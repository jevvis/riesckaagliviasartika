'use client'
import { useState, useRef, useEffect } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

export function ExcelLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="excel-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#18884f" />
          <stop offset="0.5" stopColor="#117e43" />
          <stop offset="1" stopColor="#0b6631" />
        </linearGradient>
      </defs>
      <path d="M19.581 15.35L8.512 13.4V27.809A1.192 1.192 0 009.705 29h19.1A1.192 1.192 0 0030 27.809V22.5h-10.419z" fill="#185c37" />
      <path d="M19.581 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 6.5 5.861 1.95L30 16V9.5L19.581 3z" fill="#21a366" />
      <path d="M8.512 9.5h11.069V16H8.512z" fill="#107c41" />
      <path d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0028.806 3z" fill="#33c481" />
      <path d="M19.581 16H30v6.5H19.581z" fill="#107c41" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#excel-grad)" />
      <path d="M5.7 19.873l2.511-3.884-2.3-3.862h1.847l1.255 2.473c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84 2.419 3.905h-1.709l-1.45-2.711a2.355 2.355 0 01-.17-.28h-.024a1.688 1.688 0 01-.168.351L7.515 19.873H5.7z" fill="#ffffff" />
    </svg>
  )
}

export function WordLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="word-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2368c4" />
          <stop offset="0.5" stopColor="#1a5dbe" />
          <stop offset="1" stopColor="#1146ac" />
        </linearGradient>
      </defs>
      <path d="M28.806 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0028.806 3z" fill="#41a5ee" />
      <path d="M30 9.5H8.512V16l11.069 1.95L30 16z" fill="#2b7cd3" />
      <path d="M8.512 16v6.5l10.418 1.3L30 22.5V16z" fill="#185abd" />
      <path d="M9.705 29h19.1A1.192 1.192 0 0030 27.809V22.5H8.512v5.309A1.192 1.192 0 009.705 29z" fill="#103f91" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#word-grad)" />
      <path d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 01.162 1h.022a7.6 7.6 0 01.135-.975l1.039-5.358h1.477l-1.824 7.748H10.591L9.354 14.742a3.78 3.78 0 01-.122-.578 3.32 3.32 0 01-.084-.52H9.127a3.46 3.46 0 01-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418c.038.188.064.336.079.443z" fill="#ffffff" />
    </svg>
  )
}

export function PowerPointLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Microsoft PowerPoint">
      <rect x="2" y="3" width="28" height="26" rx="4" fill="#c43e1c" />
      <circle cx="12" cy="16" r="6.5" fill="#ffffff" opacity="0.25" />
      <path d="M12 9.5a6.5 6.5 0 1 1-6.5 6.5H12z" fill="#ffffff" />
      <path d="M19 11h6M19 16h6M19 21h6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CanvaLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#7D2AE8" />
          <stop offset="100%" stopColor="#5E17EB" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11.5" fill="#ffffff" />
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 00.584-.24.293.293 0 01.134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 01.075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 01-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 00-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 00.102-.583c0-.343-.137-.515-.24-.515z"
        fill="url(#canva-grad)"
      />
    </svg>
  )
}

export function EhrSimrsLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ehr-screen" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="2" y="3" width="28" height="26" rx="5" fill="url(#ehr-screen)" />
      <rect x="4.5" y="5.5" width="23" height="21" rx="3.5" fill="#0f172a" fillOpacity="0.88" />
      <circle cx="8" cy="9.5" r="2.8" fill="#10B981" />
      <path d="M8 8.2v2.6M6.7 9.5h2.6" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
      <rect x="12" y="8.5" width="9" height="1.8" rx="0.9" fill="#38BDF8" fillOpacity="0.8" />
      <circle cx="24.5" cy="9.5" r="1.2" fill="#34D399" />
      <path
        d="M5.5 16.5H9.5L11 13.5L13.5 20L15.5 15L17 17.5L18.5 16.5H26.5"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="7" y="21" width="7" height="1.5" rx="0.75" fill="#94A3B8" />
      <rect x="7" y="23.5" width="11" height="1.5" rx="0.75" fill="#64748B" />
      <rect x="20.5" y="20.5" width="5" height="4.5" rx="1.5" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="0.8" />
      <path d="M21.8 22.8l1 1 2-2" stroke="#34D399" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CadLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cad-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5243B" />
          <stop offset="100%" stopColor="#B31224" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#cad-grad)" />
      <path d="M16 6.5L8.5 25h3.6l1.7-4.5h5.4l1.7 4.5h3.6L16 6.5zm-1.5 10.5L16 12.2l1.5 4.8h-3z" fill="#ffffff" />
      <path d="M20.5 16.5l3.5 2v4l-3.5-2v-4z" fill="#ffffff" fillOpacity="0.45" />
    </svg>
  )
}

export function QcLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="qc-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#qc-grad)" />
      <circle cx="16" cy="13.5" r="7.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 2" />
      <path
        d="M16 7L10.5 9.6V13.8C10.5 17.4 12.8 20.6 16 21.4C19.2 20.6 21.5 17.4 21.5 13.8V9.6L16 7Z"
        fill="#ffffff"
        fillOpacity="0.22"
        stroke="#ffffff"
        strokeWidth="1.2"
      />
      <path
        d="M12.5 13.5L15 16L19.5 11.2"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="10" y="22.2" width="12" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#9A3412" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        QC
      </text>
    </svg>
  )
}

export function PpcLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ppc-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#ppc-grad)" />
      <path
        d="M5 14L9 11V14L13 11V14L17 11V21H5V14Z"
        fill="#ffffff"
        fillOpacity="0.2"
      />
      <rect x="11" y="6" width="15" height="18" rx="2.5" fill="#ffffff" />
      <rect x="15" y="4.5" width="7" height="3" rx="1.5" fill="#075985" />
      <rect x="14" y="9.8" width="5.5" height="2" rx="1" fill="#0284C7" />
      <rect x="16.5" y="13.2" width="6.5" height="2" rx="1" fill="#38BDF8" />
      <rect x="14" y="16.6" width="8" height="2" rx="1" fill="#10B981" />
      <rect x="5.5" y="22.2" width="13" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="12" y="25.6" fill="#075985" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        PPC
      </text>
    </svg>
  )
}

export function FmeaLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fmea-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#fmea-grad)" />
      <path
        d="M16 6L6.5 21.5H25.5L16 6Z"
        fill="#ffffff"
        fillOpacity="0.22"
      />
      <circle cx="14" cy="14" r="4.2" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="1.8" fill="#ffffff" />
      <circle cx="17.5" cy="13.5" r="4" stroke="#ffffff" strokeWidth="2" fill="#000000" fillOpacity="0.15" />
      <path d="M20.5 16.5L25 21" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="7.5" y="22.2" width="17" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#B45309" fontSize="3" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        FMEA
      </text>
    </svg>
  )
}

export function LeanLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lean-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#lean-grad)" />
      <path
        d="M16 6.5C11.5 6.5 8 10 8 14.5H5L9.5 19.5L14 14.5H11C11 11.8 13.2 9.5 16 9.5C17.6 9.5 19 10.3 20 11.5L22.2 9.3C20.6 7.5 18.5 6.5 16 6.5Z"
        fill="#ffffff"
      />
      <path
        d="M16 22.5C20.5 22.5 24 19 24 14.5H27L22.5 9.5L18 14.5H21C21 17.2 18.8 19.5 16 19.5C14.4 19.5 13 18.7 12 17.5L9.8 19.7C11.4 21.5 13.5 22.5 16 22.5Z"
        fill="#ffffff"
        fillOpacity="0.85"
      />
      <circle cx="16" cy="14.5" r="2.2" fill="#FBBF24" />
      <rect x="8" y="22.2" width="16" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#047857" fontSize="3" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        LEAN
      </text>
    </svg>
  )
}

export function ScmLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scm-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#scm-grad)" />
      <circle cx="7" cy="9.5" r="2" fill="#93C5FD" />
      <circle cx="25" cy="9.5" r="2" fill="#93C5FD" />
      <circle cx="16" cy="8" r="1.5" fill="#ffffff" />
      <path d="M9 9.5H23" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="2 2" />
      <rect x="7" y="12" width="10" height="7" rx="1" fill="#ffffff" />
      <path d="M17 14H21L23.5 16.5V19H17V14Z" fill="#ffffff" fillOpacity="0.9" />
      <circle cx="10.5" cy="19" r="1.8" fill="#1E40AF" stroke="#ffffff" strokeWidth="1" />
      <circle cx="20.5" cy="19" r="1.8" fill="#1E40AF" stroke="#ffffff" strokeWidth="1" />
      <rect x="9.5" y="22.2" width="13" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#1E40AF" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        SCM
      </text>
    </svg>
  )
}

export function InvLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inv-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#inv-grad)" />
      <path d="M6 7V21M26 7V21M6 14.5H26" stroke="#C4B5FD" strokeWidth="1.2" />
      <rect x="8.5" y="9" width="6.5" height="5" rx="0.8" fill="#ffffff" />
      <path d="M11.75 9V14" stroke="#8B5CF6" strokeWidth="0.8" />
      <rect x="17" y="9" width="6.5" height="5" rx="0.8" fill="#ffffff" fillOpacity="0.85" />
      <path d="M20.25 9V14" stroke="#8B5CF6" strokeWidth="0.8" />
      <rect x="9.5" y="15.5" width="13" height="5" rx="0.8" fill="#ffffff" />
      <path d="M12 17V19.5M13.5 17V19.5M15.5 17V19.5M17 17V19.5M19 17V19.5M20.5 17V19.5" stroke="#5B21B6" strokeWidth="0.8" />
      <rect x="9.5" y="22.2" width="13" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#5B21B6" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        INV
      </text>
    </svg>
  )
}

export function PythonLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="py-blue" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#2B5B84" />
        </linearGradient>
        <linearGradient id="py-yellow" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0F172A" />
      <path
        d="M15.89 5C10.74 5 11.06 7.23 11.06 7.23L11.07 9.54H15.98V10.23H6.84S3.54 9.88 3.54 15.05C3.54 20.22 6.42 20.03 6.42 20.03H8.13V17.65S8.04 14.77 10.95 14.77H15.8V12.13S15.8 9.5 21.2 9.5H21.2V7.63S21.31 5 15.89 5ZM13.1 6.54A0.89 0.89 0 1 1 13.1 8.32A0.89 0.89 0 0 1 13.1 6.54Z"
        fill="url(#py-blue)"
      />
      <path
        d="M16.11 27C21.26 27 20.94 24.77 20.94 24.77L20.93 22.46H16.02V21.77H25.16S28.46 22.12 28.46 16.95C28.46 11.78 25.58 11.97 25.58 11.97H23.87V14.35S23.96 17.23 21.05 17.23H16.2V19.87S16.2 22.5 10.8 22.5H10.8V24.37S10.69 27 16.11 27ZM18.9 25.46A0.89 0.89 0 1 1 18.9 23.68A0.89 0.89 0 0 1 18.9 25.46Z"
        fill="url(#py-yellow)"
      />
      <rect x="10.5" y="22.2" width="11" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#0F172A" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        PY
      </text>
    </svg>
  )
}

export function SixSigmaLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sigma-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#0E7490" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#sigma-grad)" />
      <path
        d="M6 18C10 18 12 16 14 10.5C15 8 17 8 18 10.5C20 16 22 18 26 18"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 15V19M22 15V19" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="1 1" />
      <rect x="9.5" y="22.2" width="13" height="4.5" rx="1.5" fill="#ffffff" />
      <text x="16" y="25.6" fill="#0E7490" fontSize="3.2" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        6σ
      </text>
    </svg>
  )
}

export function PioLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0284C7" />
      <text x="16" y="20.5" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        PIO
      </text>
    </svg>
  )
}

export function PtoLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#10B981" />
      <text x="16" y="20.5" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        PTO
      </text>
    </svg>
  )
}

export function DrpLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#F59E0B" />
      <text x="16" y="20.5" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        DRP
      </text>
    </svg>
  )
}

export function GmpLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#8B5CF6" />
      <text x="16" y="20.5" fill="#ffffff" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        GMP
      </text>
    </svg>
  )
}

export function IpcLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#06B6D4" />
      <text x="16" y="20.5" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        IPC
      </text>
    </svg>
  )
}

export function MesoLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#EC4899" />
      <text x="16" y="20" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        MESO
      </text>
    </svg>
  )
}

const techIcons = [
  { id: 'pio', name: 'Pelayanan Informasi Obat (PIO)', icon: <PioLogo className="w-7 h-7" /> },
  { id: 'meso', name: 'Monitoring Efek Samping Obat (MESO)', icon: <MesoLogo className="w-7 h-7" /> },
  { id: 'inv', name: 'Pengelolaan Persediaan Obat', icon: <InvLogo className="w-7 h-7" /> },
  { id: 'scm', name: 'Penyimpanan & Distribusi Obat', icon: <ScmLogo className="w-7 h-7" /> },
  { id: 'qc', name: 'Jaminan Mutu Pelayanan Kefarmasian', icon: <QcLogo className="w-7 h-7" /> },
]

export function SkillsSection() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Side: Title & Icons */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('skills.label')}</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('skills.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-sm">
            <span className="text-emerald-500 font-medium">{t('skills.desc').split(' ')[0]}</span>{' '}
            {t('skills.desc').split(' ').slice(1).join(' ')}
          </p>
          
          <div className="grid grid-cols-4 gap-3 max-w-[240px]">
            {techIcons.map((tech) => (
              <div
                key={tech.id}
                title={tech.name}
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:scale-110 hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 cursor-pointer p-1.5"
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 2 Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">01</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card1.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card1.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {t('skills.card1.tags').split('|').map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">02</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card2.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z"></path>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card2.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {t('skills.card2.tags').split('|').map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({
  end,
  decimals = 0,
  suffix = '',
  duration = 1800,
}: {
  end: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(easeOut * end)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [hasStarted, end, duration])

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toFixed(decimals)}
      <span className="text-emerald-500 font-bold ml-0.5">{suffix}</span>
    </span>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const traitsData = [
    {
      id: '01',
      title: t('trait.1.title'),
      subtitle: t('trait.1.sub'),
      tag: t('trait.1.tag'),
      desc: t('trait.1.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      glow: 'rgba(16, 185, 129, 0.28)',
    },
    {
      id: '02',
      title: t('trait.2.title'),
      subtitle: t('trait.2.sub'),
      tag: t('trait.2.tag'),
      desc: t('trait.2.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      glow: 'rgba(6, 182, 212, 0.28)',
    },
    {
      id: '03',
      title: t('trait.3.title'),
      subtitle: t('trait.3.sub'),
      tag: t('trait.3.tag'),
      desc: t('trait.3.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
      glow: 'rgba(245, 158, 11, 0.28)',
    },
    {
      id: '04',
      title: t('trait.4.title'),
      subtitle: t('trait.4.sub'),
      tag: t('trait.4.tag'),
      desc: t('trait.4.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      glow: 'rgba(168, 85, 247, 0.28)',
    },
  ];

  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  // kartu depan dibuang (terlempar + memudar) sebagai lapisan sendiri, sementara kartu berikutnya naik ke depan
  const [leavingTrait, setLeavingTrait] = useState<number | null>(null);

  const handleCardClick = () => {
    if (leavingTrait !== null) return;
    setLeavingTrait(activeTraitIndex);
    setActiveTraitIndex((prev) => (prev + 1) % traitsData.length);
    setTimeout(() => setLeavingTrait(null), 460);
  };

  const currentTrait = traitsData[activeTraitIndex];
  const renderTraitCard = (trait: (typeof traitsData)[number], dotIdx: number, animation?: string) => (
              <div 
                className="relative w-full min-h-[350px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 dark:from-[#22242B] dark:via-[#1B1D23] dark:to-[#14151A] rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden will-change-transform transition-colors duration-300 group-hover:border-emerald-500/40"
                style={{
                  boxShadow: `0 20px 40px -10px ${trait.glow}, 0 10px 20px -5px rgba(0,0,0,0.5)`,
                  animation,
                }}
              >
                {/* Header: ID + Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono tracking-widest text-white/70">
                      <span>{trait.id}</span>
                      <span>/</span>
                      <span>04</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/15 transition-all">
                      {trait.icon}
                    </div>
                  </div>

                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mb-1.5 font-semibold">
                    {t('trait.card.label')}
                  </p>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                    {trait.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 mb-4 tracking-wide">
                    {trait.subtitle}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>

                {/* Footer: Pagination dots & Click hint */}
                <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {traitsData.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === dotIdx
                            ? 'w-5 bg-emerald-400'
                            : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold text-white/50 group-hover:text-emerald-400 transition-colors">
                    <span>{t('trait.change')}</span>
                    <span className="text-xs">↻</span>
                  </div>
                </div>
              </div>
  );
  const nextTrait = traitsData[(activeTraitIndex + 1) % traitsData.length];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('about.label')}</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          <TypewriterTitle text={t('about.title')} />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header: Photo + Name + Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <img src="/profile.png" alt="apt. Riescka Aglivia Sartika, S.Farm." className="w-24 h-24 rounded-full object-cover object-top border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shrink-0 shadow-lg" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">apt. RIESCKA AGLIVIA SARTIKA, S.Farm.</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-emerald-500 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.ipk')}</p>
                    <p className="text-sm font-bold">3.89/4.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.toefl')}</p>
                    <p className="text-sm font-bold">3.37/4.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.year')}</p>
                    <p className="text-sm font-bold">{t('about.yearvalue')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-6 text-justify">
              {t('about.bio1')}
            </p>
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-12">
              {t('about.cv.prompt')}{' '}
              <a href="/CV_Riescka_Aglivia_Sartika.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                {t('about.cv.link')}
              </a>.
            </p>

            {/* Currently */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-6 font-semibold">{t('about.current.label')}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.1.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.1.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.2.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.2.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.3.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.3.sub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Trait Deck */}
          <div 
            className="flex lg:col-span-4 justify-center lg:justify-end items-center relative pr-0 lg:pr-6 select-none mt-10 lg:mt-0"
          >
            <div 
              className="relative w-64 sm:w-72 min-h-[350px] cursor-pointer group"
              onClick={handleCardClick}
              title={t('trait.hint')}
            >
              {/* Back Card 2 (Layer 3) */}
              <div 
                className="absolute inset-0 bg-zinc-900/90 dark:bg-[#121316] rounded-3xl border border-white/5 shadow-xl pointer-events-none"
                style={{
                  transform: 'translate(20px, 16px) rotate(10deg) scale(0.92)',
                  opacity: 0.35,
                }}
              />

              {/* Middle Card (Layer 2) */}
              <div 
                className="absolute inset-0 bg-zinc-800/95 dark:bg-[#1A1C22] rounded-3xl border border-white/10 shadow-2xl pointer-events-none p-6 flex flex-col justify-between"
                style={{
                  transform: 'translate(10px, 8px) rotate(5deg) scale(0.96)',
                  opacity: 0.7,
                  animation: leavingTrait !== null ? 'deckFade 0.5s ease both' : undefined,
                }}
              >
                <div className="flex items-center justify-between opacity-50">
                  <span className="text-[9px] tracking-widest uppercase font-mono text-white/70">{nextTrait.id}</span>
                  <span className="text-[10px] tracking-wider uppercase text-white/70">{nextTrait.title}</span>
                </div>
                <div className="opacity-25 text-center font-bold text-base text-white">
                  {nextTrait.subtitle}
                </div>
              </div>

              {/* Front Card (Active Card): kartu baru naik ke depan dari posisi kartu tengah */}
              <div key={`front-${activeTraitIndex}`}>
                {renderTraitCard(currentTrait, activeTraitIndex, leavingTrait !== null ? 'deckRise 0.5s cubic-bezier(0.25, 1, 0.5, 1) both' : undefined)}
              </div>
              {/* Kartu yang dibuang: terlempar ke kanan-atas sambil memudar */}
              {leavingTrait !== null && (
                <div className="absolute inset-0 pointer-events-none z-30" aria-hidden="true">
                  {renderTraitCard(traitsData[leavingTrait], leavingTrait, 'deckThrow 0.46s cubic-bezier(0.25, 0.8, 0.3, 1) both')}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Moto Hidup - Interactive Quote with Shimmer & Emblem */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto px-4 relative group cursor-default">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-500/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-wide text-[var(--foreground)] leading-relaxed group-hover:text-emerald-400 transition-colors duration-300">
            {t('about.quote')}
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-6 rounded-full group-hover:w-36 transition-all duration-500"></div>
        </div>

        {/* Angka Kunci / Key Metrics with Animated Count-Up Counters */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-[var(--card-border)]/60 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 font-sans">
          {/* Item 1: IPK Profesi */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={3.89} decimals={2} suffix="" duration={1600} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.ipk')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.ipk.sub')}
            </p>
          </div>

          {/* Item 2: IPK S1 */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={3.37} decimals={2} suffix="" duration={1400} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.medal')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.medal.sub')}
            </p>
          </div>

          {/* Item 3: Rotasi Praktik */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={5} decimals={0} suffix="+" duration={1500} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.org')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.org.sub')}
            </p>
          </div>

          {/* Item 4: Lisensi Resmi */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={2} decimals={0} suffix="" duration={1800} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.toefl')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.toefl.sub')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export function EducationSection() {
  const { t } = useLanguage()

  const [photos, setPhotos] = useState([0, 0])

  const educationList = [
    {
      number: '01',
      institution: t('education.1.institution'),
      program: t('education.1.program'),
      degree: t('education.1.degree'),
      period: t('education.1.period'),
      gpa: t('education.1.gpa'),
      gpaLabel: t('about.ipk'),
      status: t('education.1.status'),
      description: t('education.1.desc'),
      images: ['/projects/edu-profesi-1.jpg'],
      imageTag: t('education.1.tag'),
      imageCaption: t('education.1.caption'),
      uni: t('education.1.uni'),
      footer: t('education.1.footer'),
      highlights: [
        t('education.1.h1'),
        t('education.1.h2'),
        t('education.1.h3'),
        t('education.1.h4'),
      ].filter(Boolean),
    },
    {
      number: '02',
      institution: t('education.2.institution'),
      program: t('education.2.program'),
      degree: t('education.2.degree'),
      period: t('education.2.period'),
      gpa: t('education.2.gpa'),
      gpaLabel: t('about.toefl'),
      status: t('education.2.status'),
      description: t('education.2.desc'),
      images: ['/projects/edu-s1-1.jpg'],
      imageTag: t('education.2.tag'),
      imageCaption: t('education.2.caption'),
      uni: t('education.2.uni'),
      footer: t('education.2.footer'),
      highlights: [
        t('education.2.h1'),
        t('education.2.h2'),
        t('education.2.h3'),
        t('education.2.h4'),
      ].filter(Boolean),
    },
  ]

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">{t('education.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans">
            <TypewriterTitle text={t('education.title')} />
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl font-sans"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content inside the single card */}
                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    {/* Top Bar: UI Logo + Period + GPA */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 shrink-0">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10 12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
                            <path d="M22 10v6" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-500 font-semibold">
                              {edu.period}
                            </span>
                            <span className="text-xs text-[var(--muted)]">•</span>
                            <span className="text-[10px] font-sans tracking-wider uppercase text-[var(--muted)] font-semibold">
                              NO. {edu.number}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-[var(--foreground)] font-sans">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right bg-[var(--background)] border border-[var(--card-border)] rounded-2xl px-4 py-2 shrink-0 shadow-sm">
                        <p className="text-[10px] uppercase font-sans tracking-wider text-[var(--muted)] font-semibold">{edu.gpaLabel}</p>
                        <p className="text-xl md:text-2xl font-black font-sans text-emerald-500">{edu.gpa}</p>
                      </div>
                    </div>

                    {/* Program Title & Degree */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold font-sans text-[var(--foreground)] tracking-tight">
                        {edu.program}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold font-sans text-[var(--muted)] mt-1">
                        {t('education.degreeLabel')}: <span className="text-[var(--foreground)] font-bold">{edu.degree}</span>
                      </p>
                    </div>

                    <p className="text-sm font-sans text-[var(--muted)] leading-relaxed mb-6 text-justify">
                      {edu.description}
                    </p>

                    {/* Competency Highlights */}
                    <div className="space-y-2.5 pt-5 border-t border-[var(--card-border)]">
                      <p className="text-[10px] font-sans tracking-widest uppercase font-semibold text-[var(--muted)] mb-3">
                        {t('education.highlights.label')}
                      </p>
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-sans text-[var(--foreground)] opacity-90">
                          <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[var(--card-border)]/60 flex items-center justify-between">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-[var(--muted)] font-semibold">
                      {edu.footer}
                    </span>
                    <span className="text-xs font-semibold font-sans text-emerald-500">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Photo Column inside the SAME single card */}
                <div className="w-full lg:w-5/12 flex">
                  <div
                    onClick={() => setPhotos((p) => p.map((v, i) => (i === idx ? v + 1 : v)))}
                    title={t('ui.changePhoto')}
                    className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px] rounded-2xl overflow-hidden shadow-md border border-[var(--card-border)] bg-[var(--background)] group cursor-pointer"
                  >
                    <img
                      src={edu.images[photos[idx] % edu.images.length]}
                      alt={edu.program}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover object-[50%_20%]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* University badge top-left */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg font-sans">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <path d="M22 10 12 5 2 10l10 5 10-5z" />
                        <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
                        <path d="M22 10v6" />
                      </svg>
                      <span>{edu.uni}</span>
                    </div>

                    {/* Penghitung foto (klik untuk ganti) */}
                    {edu.images.length > 1 && (
                    <div className="absolute top-14 right-4 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium pointer-events-none">
                      {(photos[idx] % edu.images.length) + 1}/{edu.images.length}
                    </div>
                    )}

                    {/* Period pill top-right */}
                    <div className="absolute top-4 right-4 hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-sans font-bold shadow-lg">
                      {edu.period}
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-emerald-400 font-semibold block mb-1">
                        {edu.imageTag}
                      </span>
                      <p className="text-sm md:text-base font-bold font-sans drop-shadow-md">
                        {edu.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AwardsSection() {
  const { t } = useLanguage()
  const items = [1, 2]

  return (
    <section id="awards" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3 font-semibold">{t('awards.label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <TypewriterTitle text={t('awards.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm max-w-md">{t('awards.sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((n) => (
            <div
              key={n}
              className="group p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                {t(`award.${n}.year`) && (
                <span className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-semibold shrink-0">
                  {t(`award.${n}.year`)}
                </span>
                )}
              </div>
              <p className="text-[11px] tracking-widest uppercase text-emerald-500 font-semibold mb-2">{t(`award.${n}.cat`)}</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{t(`award.${n}.title`)}</h3>
              <p className="text-xs font-semibold text-[var(--muted)] mb-4">{t(`award.${n}.issuer`)}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{t(`award.${n}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PersonalSkillsSection() {
  const { t } = useLanguage()
  const softSkills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => t(`personal.soft.${n}.t`))

  return (
    <section id="personal-skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('personal.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('personal.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">{t('personal.sub')}</p>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="mb-8 pb-4 border-b border-[var(--card-border)]">
            <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-500 font-semibold block mb-1">{t('personal.soft.label')}</span>
            <h3 className="text-2xl font-bold">{t('personal.soft.title')}</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills.map((title, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-emerald-500/50 transition-colors flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <h4 className="font-bold text-sm text-[var(--foreground)]">{title}</h4>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--muted)]">
            <span>{t('personal.orientation')}</span>
            <span className="font-sans text-emerald-500 font-semibold">{t('personal.quality')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
