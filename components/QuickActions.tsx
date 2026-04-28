import React from 'react'
import { Constants } from '@/lib/constants'
import { Clock, Mail, Phone } from 'lucide-react'

const QuickActions = () => {
  return (
    <section className="bg-secondary/40 py-2">
      <div className="mx-auto w-full px-5 md:px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Call */}
        <a
          href={`tel:${Constants.contactNo}`}
          className="flex h-full w-full justify-between items-start rounded-2xl border border-border bg-background px-6 py-5 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Phone className="h-4 w-4 text-primary" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground leading-none">Call</div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                {Constants.contactNo}
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground self-start">Mon–Sat</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${Constants.contactNo}`}
          className="flex h-full w-full justify-between items-start rounded-2xl border border-border bg-background px-6 py-5 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary" aria-hidden>
                <path d="M20.5 3.5A11.9 11.9 0 0 0 3.1 19.2L2 23l3.9-1.1A12 12 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.2-.2-.3a9.5 9.5 0 1 1 7 3.4Zm5.5-7.1c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5.1-.4-.1-.3-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.1 2.9 12.7 12.7 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.4Z" />
              </svg>
            </span>
            <div>
              <div className="text-xs text-muted-foreground leading-none">WhatsApp</div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                Message now
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground self-start">Replies &lt; 1hr</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${Constants.email}`}
          className="flex h-full w-full justify-between items-start rounded-2xl border border-border bg-background px-6 py-5 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-4 w-4 text-primary" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground leading-none">Email</div>
              <div className="text-sm font-semibold text-foreground leading-tight break-all">
                {Constants.email}
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground self-start">24/7</span>
        </a>

        {/* Opening Hours */}
        <div className="flex h-full w-full justify-between items-start rounded-2xl border border-border bg-background px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Clock className="h-4 w-4 text-primary" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground leading-none">Opening Hours</div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                Mon–Fri 10AM–6PM
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex h-full w-full justify-between items-start rounded-2xl border border-border bg-background px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Clock className="h-4 w-4 text-primary" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground leading-none">Clinic Location</div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                Opening Soon
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default QuickActions