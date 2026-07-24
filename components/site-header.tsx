"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Constants } from "@/lib/constants"

const navLinks = [
  { label: "Home", href: "#quickaction" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services-section" },
  { label: "Special", href: "#special-services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

const mobileLinks = [
  { label: "Home", href: "#quickaction" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services-section" },
  { label: "Special Services", href: "#special-services" },
  { label: "Who It's For", href: "#audience" },
  { label: "Insta Posts", href: "#InstagramSection" },
  { label: "Awards", href: "#Awards" },
  { label: "Our Workshops & Webinars", href: "#flyer" },
  { label: "Camps", href: "#CampSection" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

function scrollToSection(
  e: React.MouseEvent<HTMLButtonElement>,
  href: string
) {
  e.preventDefault()

  const element = document.querySelector(href)

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#quickaction")

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKey)

    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((item) => ({
        href: item.href,
        element: document.querySelector(item.href),
      }))
      .filter(Boolean)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const position = window.scrollY + 180

      for (const section of sections) {
        const el = section.element as HTMLElement | null

        if (!el) continue

        if (
          position >= el.offsetTop &&
          position < el.offsetTop + el.offsetHeight
        ) {
          setActive(section.href)
        }
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5"
      >
        <motion.div
          animate={{
            height: scrolled ? 72 : 82,
            scale: scrolled ? .985 : 1,
          }}
          transition={{
            duration: .25,
          }}
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-5 shadow-xl backdrop-blur-2xl transition-all",
            scrolled && "shadow-2xl ring-1 ring-primary/10"
          )}
        >
          {/* LOGO */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: -6,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 shadow-md"
            >
              <Image
                src="/apple-icon.png"
                alt="Dr. Shivali Gupta"
                width={48}
                height={48}
                priority
              />
            </motion.div>

            <div className="hidden sm:block">
              <h2 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {Constants.doctorName}
              </h2>

              <p className="text-xs text-muted-foreground">
                {Constants.qualifications}
              </p>

              <p className="text-xs text-muted-foreground">
                {Constants.qualifications1}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const selected = active === link.href

              return (
                <button
                  key={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative rounded-xl px-4 py-2 text-sm font-medium"
                >
                  {selected && (
                    <motion.div
                      layoutId="header-nav"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-xl bg-primary/10"
                    />
                  )}

                  <span
                    className={cn(
                      "relative z-10 transition-colors",
                      selected
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden lg:flex rounded-full px-5 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-primary/25"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <motion.button
              whileTap={{ scale: .92 }}
              whileHover={{ rotate: 90 }}
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border bg-background lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-[340px] flex-col bg-background shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h3 className="text-lg font-semibold">
                  Menu
                </h3>

                <p className="text-xs text-muted-foreground">
                  Dr. Shivali Physiotherapy
                </p>
              </div>

              <motion.button
                whileTap={{ scale: .9 }}
                whileHover={{ rotate: 90 }}
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-2">
                {mobileLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * .05,
                    }}
                    onClick={(e) => {
                      scrollToSection(e, link.href)
                      setOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all",
                      active === link.href
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-secondary"
                    )}
                  >
                    {link.label}

                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Footer */}

            <div className="border-t p-5">
              <Button
                asChild
                className="w-full rounded-xl"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book Appointment
                </a>
              </Button>

              <div className="mt-5 rounded-2xl bg-secondary p-4">
                <p className="font-semibold">
                  {Constants.doctorName}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {Constants.qualifications}
                </p>

                <p className="text-sm text-muted-foreground">
                  {Constants.qualifications1}
                </p>
              </div>
            </div>
          </motion.aside>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}