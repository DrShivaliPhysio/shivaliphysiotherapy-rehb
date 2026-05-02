"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Constants } from "@/lib/constants"

const navLinks = [
  { label: "Home", href: "#quickaction" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services-section" },
  { label: "Special Services", href: "#special-services" },
  { label: "Who It's For", href: "#audience" },
  { label: "Insta Posts", href: "#InstagramSection" },
  { label: "Awards", href: "#Awards" },
  { label: "Flyers", href: "#flyer" },
  { label: "Camps", href: "#CampSection" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

function scrollToSection(e: React.MouseEvent<HTMLButtonElement>, href: string) {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:scale-110">
            <img
              src={"/apple-icon.png"}
              alt={"logo"}
              className="h-10 w-10"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-medium text-foreground transition-colors group-hover:text-primary">
              {Constants.doctorName}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {Constants.qualifications}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {Constants.qualifications1}
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="
                group relative text-sm text-muted-foreground
                transition-all duration-300

                hover:text-foreground
                hover:-translate-y-0.5
              "
            >
              {link.label}

              {/* Underline Animation */}
              <span className="
                absolute -bottom-1 left-0 h-0.5 w-0 bg-primary
                transition-all duration-300 ease-out
                group-hover:w-full
              " />
            </button>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="
              rounded-full px-5
              transition-all duration-300

              hover:scale-105
              hover:shadow-lg hover:shadow-primary/20
            "
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform">
              Book Appointment
            </a>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="
            inline-flex h-10 w-10 items-center justify-center rounded-full border border-border
            text-foreground md:hidden
            transition-all duration-300

            hover:scale-110 hover:bg-secondary
          "
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="transition-transform duration-300">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">

          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={(e) => {
                scrollToSection(e, link.href)
                setOpen(false)
              }}
              className="
                rounded-lg px-3 py-2.5 text-sm text-left text-foreground
                transition-all duration-300

                hover:bg-secondary
                hover:translate-x-1
              "
              style={{
                transitionDelay: open ? `${index * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </button>
          ))}

          <Button
            asChild
            size="sm"
            className="
              mt-2 w-full rounded-full
              transition-all duration-300

              hover:scale-[1.02]
              hover:shadow-md
            "
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </a>
          </Button>

        </div>
      </div>
    </header>
  )
}