"use client"

import { Constants } from "@/lib/constants"

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-background border-t border-border z-50 flex justify-around items-center py-2 md:hidden shadow-lg">

      <a
        href={`tel:${Constants.contactNo}`}
        className="flex flex-col items-center text-xs text-foreground"
      >
        <span className="text-lg">📞</span>
        Call
      </a>

      <a
        href={`https://wa.me/${Constants.contactNo}`}
        className="flex flex-col items-center text-xs text-foreground"
      >
        <span className="text-lg">💬</span>
        WhatsApp
      </a>

      <a
        href="#book"
        className="flex flex-col items-center text-xs text-primary font-medium"
      >
        <span className="text-lg">📅</span>
        Book
      </a>

    </div>
  )
}