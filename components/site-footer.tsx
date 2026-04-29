import { Constants, socialMediaLinks } from "@/lib/constants"
import { Activity, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary">
      {/* Contact CTA band */}
      <div id="book" className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Get in touch
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Ready when you are.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              Book a consultation, ask a quick question, or join the waitlist for the upcoming Haryana
              clinic.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={`tel:${Constants.contactNo}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Call</div>
                  <div className="text-sm font-medium text-foreground">{Constants.contactNo}</div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Mon–Sat</span>
            </a>

            <a
              href={`https://wa.me/${Constants.contactNo}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary" aria-hidden>
                    <path d="M20.5 3.5A11.9 11.9 0 0 0 3.1 19.2L2 23l3.9-1.1A12 12 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.2-.2-.3a9.5 9.5 0 1 1 7 3.4Zm5.5-7.1c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5.1-.4-.1-.3-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.1 2.9 12.7 12.7 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.4Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-medium text-foreground">Message now</div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Replies &lt; 1hr</span>
            </a>

            <a
              href={`mailto:${Constants.email}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground">{Constants.email}</div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
              <Activity className="h-5 w-5 text-primary" />
            </span>
            <span className="font-serif text-lg font-medium text-foreground">{Constants.doctorName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {Constants.heroDescription}
          </p>
          <div className="mt-5 flex gap-2">
            {socialMediaLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Who it's for", href: "#audience" },
              { label: "Reviews", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Location</h3>
          <div className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <div>Haryana, India</div>
              <div className="mt-1 text-xs">Clinic opening soon · currently online only</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {Constants.doctorName} Physiotherapy. All rights reserved.</p>
          {/* <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
