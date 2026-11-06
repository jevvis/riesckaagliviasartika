'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '@/contexts/LanguageContext'

const mainLinkKeys = [
  { key: 'nav.about', id: 'about', href: '/#about' },
  { key: 'nav.education', id: 'education', href: '/#education' },
  { key: 'nav.work', id: 'work', href: '/#work' },
  { key: 'nav.intern', id: 'intern', href: '/#intern' },
  { key: 'nav.awards', id: 'awards', href: '/#awards' },
  { key: 'nav.skills', id: 'skills', href: '/#skills' },
]

const projectLinks = [
  { id: 'technical', label: { id: 'TEKNIS', en: 'TECHNICAL' }, href: '#technical' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const pathname = usePathname()
  const isProjectSection = pathname?.startsWith('/projects')
  const [activeProjectTab, setActiveProjectTab] = useState('technical')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isProjectSection) return

    const handleScroll = () => {
      const digitalEl = document.getElementById('digital')
      if (digitalEl && window.scrollY >= digitalEl.offsetTop - 100) {
        setActiveProjectTab('digital')
      } else {
        setActiveProjectTab('technical')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isProjectSection])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isProjectSection) return

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '')
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        e.preventDefault()
        const navOffset = 85
        const elementPos = targetEl.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({ top: elementPos - navOffset, behavior: 'smooth' })
        window.history.pushState(null, '', `/#${targetId}`)
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    }
  }

  const currentLinks = isProjectSection
    ? projectLinks.map(l => ({ label: l.label[lang], href: l.href, id: l.id }))
    : mainLinkKeys.map(l => ({ label: t(l.key), href: l.href, id: l.id }))

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-full bg-[var(--background)]/85 backdrop-blur-xl border border-[var(--card-border)] shadow-lg transition-all">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          onClick={(e) => {
            if (!isProjectSection && pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              window.history.pushState(null, '', '/')
            }
          }}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--foreground)] flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-[var(--background)] font-serif text-sm italic font-bold">N</span>
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-wider hidden sm:block">RIESCKA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 gap-1.5 xl:gap-2.5 2xl:gap-3 px-2">
          {currentLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (isProjectSection) {
                  setActiveProjectTab(link.id)
                } else {
                  handleNavClick(e, link.href)
                }
              }}
              className={`nav-link whitespace-nowrap text-[10.5px] xl:text-[11.5px] tracking-wider font-semibold px-2 py-1 rounded-full transition-all hover:text-[var(--foreground)] ${
                isProjectSection && link.id === activeProjectTab
                  ? 'text-[var(--foreground)] bg-[var(--foreground)]/10'
                  : 'text-[var(--muted)] hover:bg-[var(--foreground)]/5'
              }`}
            >
              <span className="nav-ul">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pl-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-0.5 px-2 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-[10px] font-bold tracking-widest"
            title={lang === 'id' ? 'Ganti ke bahasa Inggris' : 'Switch to Indonesian'}
            aria-label="Toggle language"
          >
            <span className={`transition-all ${lang === 'id' ? 'text-emerald-500' : 'text-[var(--muted)]'}`}>ID</span>
            <span className="text-[var(--muted)] mx-0.5 font-light">|</span>
            <span className={`transition-all ${lang === 'en' ? 'text-emerald-500' : 'text-[var(--muted)]'}`}>EN</span>
          </button>

          <ThemeToggle />
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="whitespace-nowrap px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity shadow-sm"
          >
            {t('nav.contact')}
          </a>
          {/* Mobile hamburger */}
          <button
            className="xl:hidden ml-1 p-1.5 rounded-lg hover:bg-[var(--card-border)]/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 p-3 sm:p-4 rounded-2xl bg-[var(--background)]/95 backdrop-blur-xl border border-[var(--card-border)] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {currentLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-xl text-xs tracking-wider font-semibold text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--card-border)] flex items-center gap-3 px-3 py-2">
              <span className="text-[10px] text-[var(--muted)] font-semibold tracking-widest uppercase">Bahasa / Language:</span>
              <button
                onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
                className="flex items-center gap-1 text-[10px] font-bold tracking-widest border border-[var(--card-border)] rounded-full px-2.5 py-1 hover:border-emerald-500/50 transition-all"
              >
                <span className={lang === 'id' ? 'text-emerald-500' : 'text-[var(--muted)]'}>ID</span>
                <span className="text-[var(--muted)]">|</span>
                <span className={lang === 'en' ? 'text-emerald-500' : 'text-[var(--muted)]'}>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
