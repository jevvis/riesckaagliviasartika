'use client'

import React, { useEffect, useRef } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const STAGGER_MS = 90 // jeda antar bagian yang muncul bersamaan
const MAX_STEPS = 6
const DONE_AFTER_MS = 1300 // setelah animasi selesai atribut dilepas supaya transisi hover bawaan kembali

const usable = (el: Element): el is HTMLElement => {
  if (!(el instanceof HTMLElement)) return false
  const pos = getComputedStyle(el).position
  return pos !== 'absolute' && pos !== 'fixed'
}
const kids = (el: Element) => Array.from(el.children).filter(usable)
const hasHeading = (el: HTMLElement) => el.matches('h2') || !!el.querySelector('h2')
const isList = (el: HTMLElement) => kids(el).length >= 2 && /\b(grid|flex-col|space-y-\d+)\b/.test(el.className)

// Blok judul dipecah: label, judul, deskripsi (dan ikon di sisinya) masing-masing jadi satu bagian
function headerParts(el: HTMLElement): HTMLElement[] {
  const k = kids(el)
  if (k.length < 2) return [el]
  return k.flatMap((c) => (hasHeading(c) && kids(c).length >= 2 ? kids(c) : [c]))
}

// Bagian = judul + tiap kartu/baris di dalam daftar; blok lain tetap satu bagian
function collectParts(section: HTMLElement): HTMLElement[] {
  const root = kids(section)[0]
  if (!root) return []
  const parts = kids(root).flatMap((el) => (hasHeading(el) ? headerParts(el) : isList(el) ? kids(el) : [el]))
  return parts.length >= 2 ? parts : [root]
}

export default function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const section = host.firstElementChild
    if (!(section instanceof HTMLElement)) return

    const parts = collectParts(section)
    // jenis bagian: judul (tersingkap dari bawah) dan label kecil (huruf melebar masuk)
    parts.forEach((p) => {
      if (p.matches('h2') || p.querySelector('h2')) p.dataset.rvk = 'title'
      else if (/tracking-\[0\.3em\]/.test(p.className)) p.dataset.rvk = 'label'
    })
    const timers: number[] = []
    const reset = (el: HTMLElement) => {
      delete el.dataset.rv
      el.style.removeProperty('--rv-d')
    }
    const clearKinds = () => parts.forEach((p) => delete p.dataset.rvk)

    const reveal = (obs: IntersectionObserver) => (entries: IntersectionObserverEntry[]) => {
      const hit = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      hit.forEach((e, i) => {
        const el = e.target as HTMLElement
        obs.unobserve(el)
        el.style.setProperty('--rv-d', `${Math.min(i, MAX_STEPS) * STAGGER_MS}ms`)
        el.dataset.rv = '1'
        if (el.dataset.rvk === 'title' || el.dataset.rvk === 'label') section.dataset.rvl = '1' // garis pembuka bagian tergambar
        timers.push(window.setTimeout(() => reset(el), DONE_AFTER_MS + i * STAGGER_MS))
      })
    }
    const margin = '0px 0px -6% 0px'
    const io = new IntersectionObserver((es) => reveal(io)(es), { threshold: 0.1, rootMargin: margin })
    // judul dipotong clip-path (tersisa 1%), jadi rasio irisannya kecil: cukup threshold 0
    const ioTitle = new IntersectionObserver((es) => reveal(ioTitle)(es), { threshold: 0, rootMargin: margin })

    parts.forEach((p) => {
      p.dataset.rv = '0'
      ;(p.dataset.rvk === 'title' ? ioTitle : io).observe(p)
    })

    return () => {
      io.disconnect()
      ioTitle.disconnect()
      timers.forEach((t) => clearTimeout(t))
      parts.forEach(reset)
      clearKinds()
      delete section.dataset.rvl
    }
  }, [])

  return (
    <div ref={hostRef} className={className}>
      {children}
    </div>
  )
}
