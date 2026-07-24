"use client"

import { useState } from "react"
import { Calendar, Mail, Phone, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Constants } from "@/lib/constants"

const actions = [
  {
    label: "Book Appointment",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform",
    icon: Calendar,
    primary: true,
  },
  {
    label: "Call Now",
    href: `tel:${Constants.contactNo}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${Constants.contactNo}`,
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    href: `mailto:${Constants.email}`,
    icon: Mail,
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.5 3.5A11.9 11.9 0 0 0 3.1 19.2L2 23l3.9-1.1A12 12 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.2-.2-.3a9.5 9.5 0 1 1 7 3.4Zm5.5-7.1c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5.1-.4-.1-.3-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.1 2.9 12.7 12.7 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  )
}

export function FloatingActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-5 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">

      {/* Actions */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            onClick={() => setOpen(false)}
            className={cn(
              "group flex items-center gap-3 rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              action.primary
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border/60 bg-background/95 text-foreground",
            )}
            style={{
              transitionDelay: open ? `${index * 60}ms` : "0ms",
            }}
          >
            <action.icon
              className={cn(
                "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                action.primary
                  ? "text-primary-foreground"
                  : "text-primary",
              )}
            />

            <span className="whitespace-nowrap text-sm font-medium">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      {/* FAB */}
      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-primary/25 blur-xl" />

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close quick actions" : "Open quick actions"}
          aria-expanded={open}
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-primary
            text-primary-foreground
            shadow-2xl
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <Plus
            className={cn(
              "h-6 w-6 transition-transform duration-300",
              open && "rotate-45"
            )}
          />
        </button>

      </div>

    </div>
  )
}