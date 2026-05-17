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
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
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
    <div ref={containerRef} className="fixed top-4 left-4 z-[60]" data-expanded={isExpanded}>
      <div className="relative">
        {/* Trigger — always visible */}
        <div
          className="relative w-12 h-12 flex items-center justify-center cursor-pointer z-50 text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {childrenArray[0]}
        </div>

        {/* Expanding items */}
        {childrenArray.slice(1).map((child, index) => {
          const el = child as React.ReactElement<MenuItemProps>
          const label = el.props.label
          const isHovered = hoveredItem === index

          return (
            <div
              key={index}
              className="absolute top-0 left-0 flex items-center"
              style={{
                transform: `translateY(${isExpanded ? (index + 1) * 52 : 0}px)`,
                opacity: isExpanded ? 1 : 0,
                zIndex: 40 - index,
                transition: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${isExpanded ? "300ms" : "350ms"}`,
                pointerEvents: isExpanded ? "auto" : "none",
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                {child}
              </div>

              {/* Label */}
              {label && (
                <span
                  className="ml-3 text-sm font-medium text-[#C9A84C] whitespace-nowrap pointer-events-none select-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                  }}
                >
                  {label}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
