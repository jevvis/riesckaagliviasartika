'use client'

import { useState, useRef, MouseEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Smooth subtle 3D tilt (-6 to +6 degrees)
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    setRotate({ x: rotateX, y: rotateY })
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <section className="relative h-[100svh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Kata besar di belakang foto (diam): huruf solid tebal yang memudar ke bawah */}
      <div className="absolute inset-x-0 top-[11svh] md:top-[13vh] flex justify-center overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="inline-flex font-oswald text-[clamp(90px,19.5vw,340px)] font-bold uppercase leading-[0.9] tracking-tight select-none">
          {'PORTOFOLIO'.split('').map((ch, i) => (
            <span key={i} className="hero-name hero-anim hero-letter" style={{ '--d': `${i * 75}ms` } as React.CSSProperties}>
              {ch}
            </span>
          ))}
        </span>
      </div>

      {/* Sapaan + nama + tagline (kiri) */}
      <div className="hero-anim absolute left-[4vw] lg:left-[6vw] top-[47%] 2xl:left-auto 2xl:right-1/2 2xl:mr-[360px] 2xl:top-[50%] 2xl:w-[300px] z-20 hidden md:block max-w-[250px] lg:max-w-[300px] pointer-events-none" style={{ '--d': '1000ms' } as React.CSSProperties}>
        <p className="font-script text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400 -rotate-3 leading-none mb-1">{t('hero.hey')}</p>
        <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05]">Riescka Aglivia Sartika</h1>
        <p className="mt-3 text-xs lg:text-[13px] leading-relaxed text-[var(--muted)]">{t('hero.tagline')}</p>
      </div>

      {/* Versi HP: sapaan + nama di antara kata besar dan kepala foto */}
      <div className="hero-anim absolute inset-x-0 top-[calc(11svh+8.5rem)] z-20 md:hidden text-center pointer-events-none px-4" style={{ '--d': '1000ms' } as React.CSSProperties}>
        <p className="font-script text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-none">{t('hero.hey')}</p>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Riescka Aglivia Sartika</h1>
      </div>

      {/* Keterangan kecil kiri-bawah */}
      <div className="hero-anim absolute left-[4vw] lg:left-[6vw] bottom-8 2xl:left-auto 2xl:right-1/2 2xl:mr-[360px] 2xl:w-[300px] z-20 hidden md:block pointer-events-none text-[9px] lg:text-[10px] tracking-[0.2em] font-semibold uppercase text-[var(--muted)] leading-relaxed" style={{ '--d': '1200ms' } as React.CSSProperties}>
        <p>{t('hero.based1')}</p>
        <p>{t('hero.based2')}</p>
      </div>

      {/* Kartu peran + tombol (kanan-bawah) */}
      <div className="absolute right-[3vw] lg:right-[5vw] bottom-8 xl:right-0 xl:left-[calc(50%+0.463*min(82vh,651px))] xl:-translate-x-6 z-20 hidden md:flex flex-col items-center">
        {/* kartu putih (tetap putih di mode terang maupun gelap). Di xl+: kolom dari lengan kanan foto (setengah lebar jas = 0,463 x tinggi foto yang tampil, tinggi dibatasi min(82vh, 651px)) sampai tepi kanan layar; kartu di tengahnya */}
        <div className="hero-anim w-[250px] lg:w-[270px] rounded-3xl border border-zinc-200 bg-white px-5 py-4 text-center shadow-[0_14px_34px_-14px_rgba(0,0,0,0.35)] pointer-events-none" style={{ '--d': '1350ms' } as React.CSSProperties}>
          <p className="text-base lg:text-lg font-bold leading-snug text-emerald-600">{t('hero.role1')}</p>
          <p className="mt-0.5 text-xs lg:text-[13px] font-semibold leading-snug text-zinc-500">{t('hero.role2')}</p>
        </div>
      </div>

      {/* Profile photo container with 3D Tilt & Interactive Effects */}
      <div className="hero-anim hero-photo relative z-10 flex items-end justify-center h-full pt-20" style={{ '--d': '450ms' } as React.CSSProperties}>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-[118vw] sm:w-[440px] md:w-[560px] lg:w-[680px] xl:w-[760px] max-w-none sm:max-w-[92vw] cursor-pointer perspective-[1200px] select-none"
        >
          {/* Ambient Aura / Glow Backdrop */}
          <div
            className={`absolute inset-0 pointer-events-none rounded-full blur-3xl transition-all duration-700 ease-out ${
              isHovered ? 'opacity-90 scale-110' : 'opacity-0 scale-90'
            }`}
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.4), rgba(14, 165, 233, 0.25) 45%, transparent 70%)`,
            }}
          />

          {/* Left Floating Achievement Tag (Pops out on hover) */}
          <div
            className={`absolute -left-2 sm:-left-4 lg:-left-8 top-[36%] z-30 pointer-events-none transition-all duration-500 ease-out ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-90'
            }`}
            style={{
              transform: isHovered
                ? `translate3d(0, 0, 30px) rotate(-3deg)`
                : 'translate3d(0, 20px, 0) scale(0.9)',
            }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/75 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" />
              <div className="text-left font-sans">
                <p className="text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
                  {t('hero.badge.major')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Floating Medal Tag (Pops out on hover) */}
          <div
            className={`absolute -right-2 sm:-right-4 lg:-right-8 top-[48%] z-30 pointer-events-none transition-all duration-500 delay-75 ease-out ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-90'
            }`}
            style={{
              transform: isHovered
                ? `translate3d(0, 0, 30px) rotate(3deg)`
                : 'translate3d(0, 20px, 0) scale(0.9)',
            }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/75 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_#fbbf24]" />
              <div className="text-left font-sans">
                <p className="text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
                  {t('hero.badge.medal')}
                </p>
                <p className="text-[10px] text-amber-400 font-semibold">
                  {t('hero.badge.event')}
                </p>
              </div>
            </div>
          </div>

          {/* Main Cutout Photo with 3D Parallax Tilt */}
          <div
            className="relative w-full will-change-transform"
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.035, 1.035, 1.035)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            <img
              src="/profile.png"
              alt="apt. Riescka Aglivia Sartika, S.Farm."
              className={`w-full h-auto max-h-[62svh] md:max-h-[82vh] object-contain transition-all duration-500 ${
                isHovered ? 'brightness-105 contrast-105' : 'brightness-100'
              }`}
              style={{
                filter: isHovered
                  ? 'drop-shadow(0 20px 45px rgba(16, 185, 129, 0.3)) drop-shadow(0 12px 30px rgba(0, 0, 0, 0.35))'
                  : 'drop-shadow(0 12px 30px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>

          {/* Interactive name pill at bottom */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-all duration-400 ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-3 scale-95'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/90 dark:bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-xl border border-white/20 whitespace-nowrap">
              <span>apt. RIESCKA AGLIVIA SARTIKA, S.Farm.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute right-2 md:right-6 bottom-10 z-20 hidden sm:flex items-center gap-2">
        <span
          className="text-[10px] tracking-[0.3em] font-medium text-[var(--muted)] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          {t('hero.scroll')}
        </span>
      </div>
    </section>
  )
}
