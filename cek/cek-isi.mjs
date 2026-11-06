// Pemeriksa isi ORDER 25 (apt. Riescka Aglivia Sartika). Jalankan: node cek/cek-isi.mjs
// Gagal (exit 1) bila: kunci ID/EN tidak sama, t('kunci') tak terdefinisi, berkas rujukan tak ada,
// masih ada sisa isi Template 1 (Hafizah/farmasi), atau data wajib klien tidak ada.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const problems = []
const fail = (m) => problems.push(m)

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (['node_modules', '.next', 'cek', 'docs'].includes(name)) continue
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) walk(p, out)
    else if (['.ts', '.tsx', '.css', '.json'].includes(extname(p)) && name !== 'package-lock.json' && name !== 'tsconfig.tsbuildinfo') out.push(p)
  }
  return out
}

// 1. Paritas kunci ID/EN
const ctxPath = join(root, 'contexts', 'LanguageContext.tsx')
const ctx = readFileSync(ctxPath, 'utf8')
const iId = ctx.indexOf('\n  id: {')
const iEn = ctx.indexOf('\n  en: {')
const iEnd = ctx.indexOf('\nexport function LanguageProvider')
const keysOf = (s) => [...s.matchAll(/^\s*'([a-zA-Z0-9_.]+)'\s*:/gm)].map((m) => m[1])
const idKeys = keysOf(ctx.slice(iId, iEn))
const enKeys = keysOf(ctx.slice(iEn, iEnd))
const idSet = new Set(idKeys)
const enSet = new Set(enKeys)
if (idKeys.length !== idSet.size) fail('Kunci ID ganda: ' + idKeys.filter((k, i) => idKeys.indexOf(k) !== i).join(', '))
if (enKeys.length !== enSet.size) fail('Kunci EN ganda: ' + enKeys.filter((k, i) => enKeys.indexOf(k) !== i).join(', '))
for (const k of idSet) if (!enSet.has(k)) fail(`Kunci ada di ID tetapi tak ada di EN: ${k}`)
for (const k of enSet) if (!idSet.has(k)) fail(`Kunci ada di EN tetapi tak ada di ID: ${k}`)

// 2. t('kunci') terdefinisi
const files = walk(root)
for (const f of files) {
  if (f === ctxPath) continue
  const src = readFileSync(f, 'utf8')
  for (const m of src.matchAll(/\bt\(\s*'([a-zA-Z0-9_.]+)'\s*\)/g)) {
    if (!idSet.has(m[1])) fail(`${f.slice(root.length + 1)}: t('${m[1]}') tak terdefinisi`)
  }
}

// 3. Berkas /public yang dirujuk harus ada
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  for (const m of src.matchAll(/['"`](\/(?:projects\/[^'"`\s$]+|profile\.png|CV[^'"`\s$]*\.pdf|[a-z0-9_-]+\.(?:png|jpg|jpeg|svg|pdf|webp)))['"`]/gi)) {
    const rel = m[1].split('?')[0]
    if (!existsSync(join(root, 'public', rel))) fail(`${f.slice(root.length + 1)}: berkas tak ada di public: ${rel}`)
  }
}

// 3b. Foto yang dirujuk lewat nama pendek (org-xxx-1, cert-xxx, work-xxx-1) harus ada
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  for (const m of src.matchAll(/['"`](?:\/projects\/)?((?:org|work|cert|edu)-[a-z]+(?:-\d+)?)['"`]/g)) {
    if (!existsSync(join(root, 'public', 'projects', m[1] + '.jpg'))) fail(`${f.slice(root.length + 1)}: foto tak ada: ${m[1]}.jpg`)
  }
  for (const m of src.matchAll(/'\/projects\/((?:org|work|cert|edu)-[a-z]+(?:-\d+)?)\.jpg'/g)) {
    if (!existsSync(join(root, 'public', 'projects', m[1] + '.jpg'))) fail(`${f.slice(root.length + 1)}: foto tak ada: ${m[1]}.jpg`)
  }
}

// 4. Kata sisa Template 1 (apoteker/farmasi/Hafizah)
const banned = /nabila|hasibuan|hasim|al-washliyah|pirngadi|muthia|padang bulan|keshia|kisaran|medan|asahan|meisya|habibah|airlangga|dhimas|tempo|golkar|danastra|rofifah|alza|hafizah|nurfadillah|kariadi|stefani|CV_(?!Riescka)[A-Za-z_]+\.pdf|pink-|PKPA di Puskesmas/i
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const lines = src.split('\n')
  lines.forEach((ln, i) => {
    const m = ln.match(banned)
    if (m) fail(`${f.slice(root.length + 1)}:${i + 1} sisa kata lama "${m[0]}"`)
  })
}

// 5. Data wajib klien
const all = files.map((f) => readFileSync(f, 'utf8')).join('\n')
for (const must of ['Riescka Aglivia Sartika', 'riesckaaglivia1@gmail.com', '6282178373320', '+62 821-7837-3320', 'Musi Rawas', 'Jenderal Achmad Yani', 'Bhakti Pertiwi', '3.99', '3.47', 'Medika Jaya', 'Ananda Setia Budi', 'Sudirjo Partodimedjo', 'Cibabat', 'Kimia Farma Apotek 335', 'Konsil Kesehatan Indonesia', 'Kolegium Farmasi Indonesia', 'MESO', 'PIO']) {
  if (!all.toLowerCase().includes(must.toLowerCase())) fail(`Data wajib tidak ditemukan: ${must}`)
}

if (problems.length) {
  console.log(`GAGAL: ${problems.length} masalah`)
  for (const p of problems.slice(0, 80)) console.log(' - ' + p)
  if (problems.length > 80) console.log(` ... +${problems.length - 80} lagi`)
  process.exit(1)
}
console.log(`LOLOS: ${idKeys.length} kunci ID = ${enKeys.length} kunci EN, rujukan berkas valid, tak ada sisa kata lama.`)
