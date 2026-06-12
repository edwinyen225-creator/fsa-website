"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-[#C9A84C]/70" aria-hidden="true" />
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-2 w-56 rounded-2xl bg-[#071226] shadow-lg ring-1 ring-[#C9A84C]/15 focus:outline-none z-50`}
          role="menu"
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

export interface MenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  href?: string
  label?: string
}

export function MenuItem({ children, onClick, disabled = false, icon, href }: MenuItemProps) {
  const inner = (
    <span className="flex items-center justify-center text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors duration-200 group-hover:scale-110 transition-transform">
      {icon && <span className="h-6 w-6">{icon}</span>}
      {children}
    </span>
  )

  const baseClass = `relative flex items-center justify-center w-12 h-12 group ${disabled ? "cursor-not-allowed opacity-40" : ""}`

  if (href) {
    return <Link href={href} className={baseClass}>{inner}</Link>
  }

  return (
    <button className={baseClass} onClick={onClick} disabled={disabled} role="menuitem">
      {inner}
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const childrenArray = React.Children.toArray(children)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    // pointer-events-none keeps the container's invisible box (as wide as the
    // hidden panel) from swallowing taps meant for the logo behind it
    <div ref={containerRef} className="fixed top-4 left-4 z-[60] pointer-events-none" data-expanded={isExpanded}>
      {/* Trigger — always visible, no backdrop */}
      <div
        className="pointer-events-auto relative w-12 h-12 flex items-center justify-center cursor-pointer z-50 text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {childrenArray[0]}
      </div>

      {/* Expanding panel — sits below trigger, backdrop wraps content */}
      <div
        className="mt-2 overflow-hidden"
        style={{
          maxHeight: isExpanded ? `${(childrenArray.length - 1) * 48 + 16}px` : "0px",
          opacity: isExpanded ? 1 : 0,
          transition: "max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease",
          pointerEvents: isExpanded ? "auto" : "none",
        }}
      >
        <div className="relative rounded-[20px] bg-[#061128]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)] py-2 px-1">
          {childrenArray.slice(1).map((child, index) => {
            const el = child as React.ReactElement<MenuItemProps>
            const label = el.props.label
            const href = el.props.href

            const inner = (
              <div className="flex items-center gap-2 px-3 py-2.5 w-full">
                <span className="w-7 h-7 flex items-center justify-center text-[#C9A84C]/80 flex-shrink-0">
                  {el.props.icon}
                </span>
                {label && (
                  <span className="text-sm font-medium text-white/90 whitespace-nowrap">{label}</span>
                )}
              </div>
            )

            return href ? (
              <Link key={index} href={href} className="block rounded-xl hover:bg-white/5 transition-colors duration-150">
                {inner}
              </Link>
            ) : (
              <div key={index} className="block rounded-xl">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
