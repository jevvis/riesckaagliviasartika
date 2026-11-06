'use client'

import { useRef, useState } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

export function InternshipImageStack({
  images,
  title,
  align,
}: {
  images: string[]
  title: string
  align: 'left' | 'right'
}) {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // kartu depan "dibuang" (terlempar + memudar), lalu muncul lagi di belakang tanpa menyapu melintasi kartu lain
  const [leavingIdx, setLeavingIdx] = useState<number | null>(null)
  const [resetIdx, setResetIdx] = useState<number | null>(null)
  const busy = useRef(false)

  const goTo = (target: number) => {
    if (images.length < 2 || busy.current || target === activeIndex) return
    busy.current = true
    const leaving = activeIndex
    setLeavingIdx(leaving)
    setActiveIndex(target)
    window.setTimeout(() => {
      setLeavingIdx(null)
      setResetIdx(leaving) // lompat ke posisi belakang tanpa transisi, masih transparan
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setResetIdx(null) // lalu muncul pelan di belakang
          busy.current = false
        })
      )
    }, 430)
  }
  const handleNext = () => goTo((activeIndex + 1) % images.length)

  const isRight = align === 'right'
  const xSign = isRight ? -1 : 1
  const rotSign = isRight ? -1 : 1

  return (
    <div className="w-full relative pt-7 pb-3 px-3 select-none">
      <div
        className={`relative w-full aspect-video group ${images.length > 1 ? 'cursor-pointer' : ''}`}
        onClick={handleNext}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, idx) => {
          const offset = (idx - activeIndex + images.length) % images.length

          let transformStyle = ''
          let zIndex = 0
          let opacity = 0
          let filter = 'brightness(1)'

          if (offset === 0) {
            transformStyle = 'translate(0px, 0px) rotate(0deg) scale(1)'
            zIndex = 20
            opacity = 1
            filter = 'brightness(1)'
          } else if (offset === 1) {
            const tx = isHovered ? xSign * 18 : xSign * 12
            const ty = isHovered ? -18 : -12
            const rot = isHovered ? rotSign * 4 : rotSign * 2.5
            transformStyle = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0.97)`
            zIndex = 10
            opacity = 0.88
            filter = isHovered ? 'brightness(0.92)' : 'brightness(0.82)'
          } else if (offset === 2) {
            const tx = isHovered ? xSign * 34 : xSign * 24
            const ty = isHovered ? -34 : -24
            const rot = isHovered ? rotSign * 8 : rotSign * 5
            transformStyle = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0.94)`
            zIndex = 5
            opacity = 0.72
            filter = isHovered ? 'brightness(0.82)' : 'brightness(0.68)'
          }

          // fase animasi per kartu: dibuang -> lompat ke belakang (tanpa transisi) -> normal
          let transition = 'transform 480ms cubic-bezier(0.25, 1, 0.5, 1), opacity 350ms ease, filter 350ms ease'
          if (idx === leavingIdx) {
            transformStyle = `translate(${-xSign * 150}px, -44px) rotate(${-rotSign * 15}deg) scale(0.9)`
            zIndex = 30
            opacity = 0
            filter = 'brightness(1)'
            transition = 'transform 430ms cubic-bezier(0.3, 0.7, 0.25, 1), opacity 320ms ease-in 70ms, filter 250ms ease'
          } else if (idx === resetIdx) {
            opacity = 0
            transition = 'none'
          }

          return (
            <div
              key={idx}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-[var(--card-border)] bg-[var(--card-bg)] will-change-transform"
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                filter,
                transition,
              }}
            >
              <img
                src={img}
                alt={`${title} - ${t('ui.photo')} ${idx + 1}`}
                draggable={false}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          )
        })}

        {/* Floating pill: Click to shuffle next */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 z-40 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-lg">
              <span>{activeIndex + 1} / {images.length}</span>
              <span className="opacity-60">•</span>
              <span className="text-[10px] opacity-80 group-hover:opacity-100 flex items-center gap-1">
                {t('ui.changePhoto')}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        )}

        {/* Dots indicator at bottom */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 z-40 flex items-center gap-1.5 pointer-events-auto">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-emerald-500 shadow-md'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`${t('ui.viewPhoto')} ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function WorkGallery({
  prefix = 'work',
  sectionId = 'work',
  count = 3,
  showCta = true,
}: {
  prefix?: 'work' | 'intern'
  sectionId?: string
  count?: number
  showCta?: boolean
}) {
  const { t } = useLanguage()

  const items = Array.from({ length: count }, (_, i) => {
    const n = i + 1
    return {
      number: `0${n}`,
      role: t(`${prefix}.${n}.role`),
      institution: t(`${prefix}.${n}.inst`),
      location: t(`${prefix}.${n}.loc`),
      period: t(`${prefix}.${n}.period`),
      subtitle: t(`${prefix}.${n}.sub`),
      description: t(`${prefix}.${n}.desc`),
      tags: t(`${prefix}.${n}.tags`).split('|'),
    }
  })

  return (
    <section id={sectionId} className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">{t(`${prefix}.label`)}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight font-sans">
              <TypewriterTitle text={t(`${prefix}.title`)} />
            </h2>
            <p className="text-[var(--muted)] text-sm md:text-base max-w-xl font-sans">{t(`${prefix}.subtitle`)}</p>
          </div>
          {showCta && (
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity shrink-0 w-max font-sans"
            >
              {t('work.cta')}
            </a>
          )}
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl font-sans"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-sans font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">{item.number}</span>
                    <span className="text-[11px] tracking-widest text-[var(--muted)] uppercase font-sans font-semibold">{item.subtitle}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1 font-sans">{item.institution}</h3>
                  <h4 className="text-lg md:text-xl font-semibold text-emerald-500 font-sans">{item.role}</h4>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="inline-block text-[11px] tracking-widest uppercase font-semibold px-3.5 py-1.5 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)]">{item.period}</span>
                  {item.location && <p className="text-xs font-semibold text-[var(--muted)] mt-2">{item.location}</p>}
                </div>
              </div>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6 text-justify font-sans">{item.description}</p>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-[var(--card-border)]/60">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] opacity-90 font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
