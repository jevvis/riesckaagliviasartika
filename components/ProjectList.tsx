'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Pelayanan Resep & Dispensing di Apotek", en: "Prescription Service & Dispensing at the Pharmacy" },
    description: { id: "Menerima, menyiapkan, meracik, dan menyerahkan obat kepada pasien.", en: "Receiving, preparing, compounding, and dispensing medication to patients." },
    framework: "APOTEK MEDIKA JAYA",
    techStack: ["Resep", "Dispensing"],
  },
  {
    number: '02',
    title: { id: "PIO & Konseling Pasien di Apotek", en: "DIS & Patient Counseling at the Pharmacy" },
    description: { id: "Pelayanan informasi obat dan konseling terkait penggunaan obat.", en: "Drug information services and counseling on medication use." },
    framework: "APOTEK MEDIKA JAYA",
    techStack: ["PIO", "Konseling"],
  },
  {
    number: '03',
    title: { id: "MESO & Kepatuhan Regulasi Apotek", en: "ADR Monitoring & Pharmacy Regulatory Compliance" },
    description: { id: "Monitoring efek samping obat, memastikan keamanan penggunaan obat, serta mengawasi kepatuhan terhadap standar dan regulasi.", en: "Monitoring adverse drug reactions, ensuring medication safety, and overseeing compliance with standards and regulations." },
    framework: "APOTEK MEDIKA JAYA",
    techStack: ["MESO", "Regulasi"],
  },
  {
    number: '04',
    title: { id: "Pengelolaan Pelayanan Kefarmasian Klinik", en: "Clinic Pharmaceutical Service Management" },
    description: { id: "Mengelola seluruh pelayanan kefarmasian sebagai penanggung jawab utama.", en: "Managing all pharmaceutical services as the main person in charge." },
    framework: "KLINIK ANANDA SETIA BUDI",
    techStack: ["APJ", "Klinik"],
  },
  {
    number: '05',
    title: { id: "Dispensing, Konseling & Edukasi Obat Klinik", en: "Clinic Dispensing, Counseling & Drug Education" },
    description: { id: "Dispensing dan penyerahan obat, serta konseling dan edukasi untuk penggunaan obat yang rasional.", en: "Dispensing and handing over medication, plus counseling and education for rational drug use." },
    framework: "KLINIK ANANDA SETIA BUDI",
    techStack: ["Dispensing", "Edukasi"],
  },
  {
    number: '06',
    title: { id: "Tanggung Jawab Penuh Pelayanan Kefarmasian Klinik", en: "Full Responsibility for Clinic Pharmaceutical Services" },
    description: { id: "Bertanggung jawab penuh atas seluruh kegiatan pelayanan kefarmasian di klinik.", en: "Fully responsible for all pharmaceutical service activities at the clinic." },
    framework: "KLINIK SUDIRJO PARTODIMEDJO",
    techStack: ["APJ", "Klinik"],
  },
  {
    number: '07',
    title: { id: "Pelayanan Resep, PIO & Konseling Klinik", en: "Clinic Prescription Service, DIS & Counseling" },
    description: { id: "Resep dari penerimaan hingga penyerahan obat, serta PIO dan konseling.", en: "Prescriptions from receipt to handing over medication, plus DIS and counseling." },
    framework: "KLINIK SUDIRJO PARTODIMEDJO",
    techStack: ["Resep", "PIO"],
  },
  {
    number: '08',
    title: { id: "MESO & Evaluasi Penggunaan Obat Sederhana", en: "ADR Monitoring & Basic Drug Use Evaluation" },
    description: { id: "Monitoring efek samping obat dan evaluasi penggunaan obat secara sederhana.", en: "Monitoring adverse drug reactions and basic drug use evaluation." },
    framework: "KLINIK SUDIRJO PARTODIMEDJO",
    techStack: ["MESO", "EPO"],
  },
  {
    number: '09',
    title: { id: "Pelayanan Farmasi Rumah Sakit (PKPA)", en: "Hospital Pharmacy Services (PKPA)" },
    description: { id: "Pelayanan resep rawat jalan dan rawat inap sesuai standar pelayanan farmasi klinik.", en: "Outpatient and inpatient prescription services according to clinical pharmacy standards." },
    framework: "RSUD CIBABAT CIMAHI",
    techStack: ["Farmasi RS", "Resep"],
  },
  {
    number: '10',
    title: { id: "Pengelolaan Obat & Farmasi Klinik di RS (PKPA)", en: "Drug Management & Clinical Pharmacy in the Hospital (PKPA)" },
    description: { id: "Penyimpanan dan distribusi obat, serta monitoring terapi obat dan observasi penggunaan obat.", en: "Drug storage and distribution, plus drug therapy monitoring and observation of drug use." },
    framework: "RSUD CIBABAT CIMAHI",
    techStack: ["Distribusi", "Monitoring Terapi"],
  },
  {
    number: '11',
    title: { id: "Dispensing Resep & Obat Bebas di Apotek Jaringan (PKPA)", en: "Prescription & OTC Dispensing at a Pharmacy Chain (PKPA)" },
    description: { id: "Dispensing resep dokter serta pelayanan obat bebas dan obat bebas terbatas.", en: "Dispensing doctors’ prescriptions and providing over-the-counter and limited OTC medicines." },
    framework: "KIMIA FARMA APOTEK 335 BANDUNG",
    techStack: ["Dispensing", "OTC"],
  },
  {
    number: '12',
    title: { id: "PIO & Edukasi Penggunaan Obat di Apotek Jaringan (PKPA)", en: "DIS & Drug Use Education at a Pharmacy Chain (PKPA)" },
    description: { id: "Pelayanan informasi obat dan edukasi penggunaan obat yang aman dan rasional.", en: "Drug information services and education on safe and rational drug use." },
    framework: "KIMIA FARMA APOTEK 335 BANDUNG",
    techStack: ["PIO", "Edukasi"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'PHARMACEUTICAL PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO KEFARMASIAN & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Pharmacy, Clinic & Hospital Experience' : 'Pengalaman Apotek, Klinik & Rumah Sakit'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of work as Pharmacist-in-Charge in a pharmacy and clinics, plus professional practice in a hospital and a pharmacy chain.'
              : 'Rekam jejak sebagai Apoteker Penanggung Jawab di apotek dan klinik, serta praktik profesi di rumah sakit dan apotek jaringan.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
