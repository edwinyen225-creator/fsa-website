'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MotionButtonProps {
  children: ReactNode
  href?: string
  className?: string
  id?: string
  target?: string
  rel?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#F5EEDB] [clip-path:circle(22px_at_22px_50%)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[clip-path:circle(200%_at_22px_50%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[15px] top-1/2 z-10 -translate-y-1/2 text-[#040A14]"
      >
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-[13px] w-[13px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      </span>
      <span className="relative z-10 whitespace-nowrap font-bold text-[#BCA474] transition-colors duration-300 group-hover:text-[#040A14]">
        {children}
      </span>
    </>
  )
}

export function MotionButton({
  children,
  href,
  className,
  id,
  target,
  rel,
  onClick,
  type,
}: MotionButtonProps) {
  const base = cn(
    'group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#C9A84C] pl-14 pr-8 py-4 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040A14]',
    className
  )

  if (href && target === '_blank') {
    return (
      <a href={href} target="_blank" rel={rel ?? 'noopener noreferrer'} id={id} className={base}>
        <Inner>{children}</Inner>
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} id={id} className={base}>
        <Inner>{children}</Inner>
      </Link>
    )
  }

  return (
    <button type={type} id={id} onClick={onClick} className={base}>
      <Inner>{children}</Inner>
    </button>
  )
}

export default MotionButton
