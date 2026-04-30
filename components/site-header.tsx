"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Constants } from "@/lib/constants"
import { constants } from "buffer"

const navLinks = [
  { label: "Home", href: "#quickaction" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services-section" },
  { label: "Special Services", href: "#special-services" },
  { label: "Who It's For", href: "#audience" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Awards", href: "#Awards" },
  { label: "Flyers", href: "#flyer" },
  { label: "Camps", href: "#camp" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
            <Activity className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-medium text-foreground">{Constants.doctorName}</span>
            <span className="text-[11px] text-muted-foreground">{Constants.qualifications}</span>
            <span className="text-[11px] text-muted-foreground">{Constants.qualifications1}</span>
            {/* <span className="text-[11px] text-muted-foreground">{Constants.qualifications2}</span> */}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary ">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform">Book Appointment</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 w-full rounded-full">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform" onClick={() => setOpen(false)}>
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
