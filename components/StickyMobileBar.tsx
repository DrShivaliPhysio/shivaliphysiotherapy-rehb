"use client"

import { Constants } from "@/lib/constants"
import {
  CalendarDays,
  Phone,
  MessageCircle,
} from "lucide-react"

export function StickyMobileBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        border-t border-border/60
        bg-background/95
        backdrop-blur-xl
        shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
        rounded-t-3xl
        md:hidden
      "
    >
      <div className="grid grid-cols-3 px-3 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <a
          href={`tel:${Constants.contactNo}`}
          className="
            flex flex-col items-center justify-center gap-1
            rounded-2xl py-2
            text-xs font-medium text-foreground
            transition-all duration-300
            hover:bg-primary/5
            active:scale-95
          "
        >
          <Phone className="h-5 w-5 text-primary" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${Constants.contactNo}`}
          className="
            flex flex-col items-center justify-center gap-1
            rounded-2xl py-2
            text-xs font-medium text-foreground
            transition-all duration-300
            hover:bg-primary/5
            active:scale-95
          "
        >
          <MessageCircle className="h-5 w-5 text-primary" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
          className="
            flex flex-col items-center justify-center gap-1
            rounded-2xl
            bg-primary
            py-2
            text-xs font-semibold text-primary-foreground
            shadow-lg shadow-primary/20
            transition-all duration-300
            hover:scale-[1.02]
            active:scale-95
          "
        >
          <CalendarDays className="h-5 w-5" />
          <span>Book</span>
        </a>
      </div>
    </div>
  )
}