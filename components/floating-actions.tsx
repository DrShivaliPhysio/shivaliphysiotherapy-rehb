"use client"

import { useState } from "react"
import { Calendar, Phone, Mail, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Constants } from "@/lib/constants"

const actions = [
  {
    label: "Book Appointment",
    href: "#book",
    icon: Calendar,
    bg: "bg-primary text-primary-foreground",
  },
  {
    label: "Call Now",
    href: `tel:${Constants.contactNo}`,
    icon: Phone,
    bg: "bg-background text-foreground border border-border",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${Constants.contactNo}`,
    icon: WhatsAppIcon,
    bg: "bg-background text-foreground border border-border",
  },
  {
    label: "Email",
    href: `mailto:${Constants.email}`,
    icon: Mail,
    bg: "bg-background text-foreground border border-border",
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11.9 11.9 0 0 0 3.1 19.2L2 23l3.9-1.1A12 12 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.2-.2-.3a9.5 9.5 0 1 1 7 3.4Zm5.5-7.1c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5.1-.4-.1-.3-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.1 2.9 12.7 12.7 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  )
}

export function FloatingActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <div
        className={cn(
          "flex flex-col items-end gap-2 transition-all duration-300",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-2 opacity-0 pointer-events-none",
        )}
      >
        {actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className={cn(
              "flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-medium shadow-[0_10px_30px_-12px_rgb(58_122_140_/_0.25)] transition-transform hover:-translate-y-0.5",
              a.bg,
            )}
          >
            <a.icon className="h-4 w-4" />
            <span>{a.label}</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-10px_rgb(58_122_140_/_0.5)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>
    </div>
  )
}
