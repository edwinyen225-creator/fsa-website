'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LINE_URL } from '@/lib/site'

interface LineButtonProps {
  children: ReactNode
  href?: string
  className?: string
  id?: string
}

// Simplified LINE speech-bubble mark
function LineBubble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3.5c-5.25 0-9.5 3.36-9.5 7.5 0 3.7 3.36 6.78 7.78 7.38.31.07.72.21.83.47.1.24.06.61.03.86l-.13.79c-.04.24-.19.93.82.51 1.02-.42 5.47-3.22 7.46-5.51 1.38-1.5 2.21-3.04 2.21-4.5 0-4.14-4.25-7.5-9.5-7.5z" />
    </svg>
  )
}

/**
 * Gold-outlined LINE CTA — the site's primary conversion action.
 * Mirrors MotionButton's interaction language (clip-path reveal from the left)
 * so the two button families feel related.
 */
export function LineButton({ children, href = LINE_URL, className, id }: LineButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className={cn(
        'group relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#C9A84C] px-6 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040A14]',
        className
      )}
    >
      {/* Hover fill — sweeps out from the icon */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#F5EEDB] [clip-path:circle(0px_at_24px_50%)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[clip-path:circle(200%_at_24px_50%)]"
      />
      <LineBubble className="relative z-10 h-[18px] w-[18px] flex-shrink-0 text-[#BCA474] transition-colors duration-300 group-hover:text-[#040A14]" />
      <span className="relative z-10 whitespace-nowrap font-normal text-[#BCA474] transition-colors duration-300 group-hover:text-[#040A14]">
        {children}
      </span>
    </a>
  )
}

export default LineButton
