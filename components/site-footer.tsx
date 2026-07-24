import { Constants, socialMediaLinks } from "@/lib/constants"
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60">

      {/* CONTACT CTA */}
      <div
        id="book"
        className="relative overflow-hidden bg-secondary py-20"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Get in touch
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Ready when you are.
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
              Book a consultation, ask a quick question, or join the waitlist
              for the upcoming Haryana clinic.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid gap-4">

            {/* CALL */}
            <a
              href={`tel:${Constants.contactNo}`}
              className="
                group
                flex
                items-center
                justify-between
                rounded-[1.75rem]
                border
                border-border/60
                bg-background/95
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[1rem]
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:bg-primary/10
                    group-hover:scale-110
                  "
                >
                  <Phone className="h-5 w-5 text-primary" />
                </span>

                <div>
                  <div className="text-xs text-muted-foreground">
                    Call
                  </div>

                  <div className="text-sm font-medium text-foreground">
                    {Constants.contactNo}
                  </div>
                </div>
              </div>

              <span className="text-xs text-muted-foreground">
                Mon–Sat
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${Constants.contactNo}`}
              className="
                group
                flex
                items-center
                justify-between
                rounded-[1.75rem]
                border
                border-border/60
                bg-background/95
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[1rem]
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:bg-primary/10
                    group-hover:scale-110
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-primary"
                  >
                    <path d="M20.5 3.5A11.9 11.9 0 0 0 3.1 19.2L2 23l3.9-1.1A12 12 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.2-.2-.3a9.5 9.5 0 1 1 7 3.4Zm5.5-7.1c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5.1-.4-.1-.3-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.1 2.9 12.7 12.7 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.4Z" />
                  </svg>
                </span>

                <div>
                  <div className="text-xs text-muted-foreground">
                    WhatsApp
                  </div>

                  <div className="text-sm font-medium text-foreground">
                    Message now
                  </div>
                </div>
              </div>

              <span className="text-xs text-muted-foreground">
                Replies &lt; 1hr
              </span>
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${Constants.email}`}
              className="
                group
                flex
                items-center
                justify-between
                rounded-[1.75rem]
                border
                border-border/60
                bg-background/95
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[1rem]
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:bg-primary/10
                    group-hover:scale-110
                  "
                >
                  <Mail className="h-5 w-5 text-primary" />
                </span>

                <div>
                  <div className="text-xs text-muted-foreground">
                    Email
                  </div>

                  <div className="text-sm font-medium text-foreground">
                    {Constants.email}
                  </div>
                </div>
              </div>

              <span className="text-xs text-muted-foreground">
                24/7
              </span>
            </a>

          </div>
        </div>
      </div>      {/* MAIN FOOTER */}
      <div className="bg-background/60 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">

          {/* BRAND */}
          <div>
            <div className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                <Activity className="h-6 w-6 text-primary" />
              </span>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {Constants.doctorName}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Physiotherapy & Rehabilitation
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-8 text-muted-foreground">
              {Constants.heroDescription}
            </p>

            {/* SOCIAL */}
            <div className="mt-8 flex gap-3">
              {socialMediaLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-border/60
                    bg-background/80
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:bg-primary
                    hover:text-white
                    hover:shadow-xl
                  "
                >
                  <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Who it's for", href: "#audience" },
                { label: "Reviews", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="
                      group
                      relative
                      inline-flex
                      text-muted-foreground
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-foreground
                    "
                  >
                    {l.label}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-[2px]
                        w-0
                        bg-primary
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Visit Us
            </h3>

            <div
              className="
                mt-6
                rounded-[1.75rem]
                border
                border-border/60
                bg-background/95
                p-6
                backdrop-blur-xl
              "
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>

                <div className="space-y-3">
                  <p className="leading-7 text-muted-foreground">
                    9-10, Upper Ground, Gupta Colony,
                    <br />
                    Near Kanahiya Sahib Chowk,
                    <br />
                    Yamuna Nagar,
                    <br />
                    Haryana 135001
                  </p>

                  <div className="rounded-xl bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
                    Online consultations are available.
                    <br />
                    Future clinic services will be announced soon.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
            {/* COPYRIGHT */}
      <div className="border-t border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-6">

          {/* Left */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">
              {Constants.doctorName}
            </span>
            . All rights reserved.
          </p>

          {/* Right */}
          <a
            href="https://datetechsolution.store"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border/60
              bg-background/90
              px-4
              py-2
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/30
              hover:shadow-lg
            "
          >
            <span>Crafted with</span>

            <Heart className="h-4 w-4 fill-red-500 text-red-500" />

            <span>by</span>

            <span className="font-semibold text-primary transition-colors group-hover:text-primary/80">
              Datetech Solution
            </span>
          </a>

        </div>
      </div>
    </footer>
  )
}