import { Services, SpecialServices } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function SpecialServicesSection() {
  return (
    <section id="special-services" className="bg-secondary py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Special Services
            </span>

            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Advanced therapies — tailored to accelerate your recovery.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Targeted techniques like Dry Needling, Cupping, Taping, and Hydrotherapy are used where needed — not routinely. Each method is chosen to reduce pain, improve mobility, and support faster healing.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SpecialServices.map((service) => (
            <article
              key={service.title}
              className="
                group relative flex flex-col rounded-2xl border border-border bg-background p-6
                transition-all duration-300 ease-out

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-primary/10
                hover:border-primary/30
                hover:bg-secondary/40
              "
            >
              
              {/* Glow Effect */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
                bg-gradient-to-br from-primary/5 to-transparent
              " />

              {/* Icon */}
              <span className="
                relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-secondary
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10
              ">
                <service.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </span>

              {/* Title */}
              <h3 className="relative z-10 mt-5 font-serif text-lg font-medium text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>

              {/* Optional CTA (if you enable later) */}
              {/* 
              <a
                href="#book"
                className="
                  relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary
                  transition-all duration-300 group-hover:gap-2
                "
              >
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              */}

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}