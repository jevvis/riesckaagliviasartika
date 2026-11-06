'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterTitleProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  cursorClassName?: string
}

export default function TypewriterTitle({
  text,
  className = '',
  speed = 45,
  delay = 150,
  cursorClassName = 'text-emerald-500 font-light',
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let currentIndex = 0
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
        } else {
          setIsDone(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [hasStarted, text, speed, delay])

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {displayedText || (hasStarted ? '' : '')}
      <span
        className={`inline-block ml-1 ${cursorClassName} ${
          isDone ? 'animate-pulse opacity-75' : 'animate-pulse opacity-100'
        }`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  )
}
