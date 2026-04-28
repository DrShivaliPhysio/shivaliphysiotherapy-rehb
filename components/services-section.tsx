import { Services } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";




export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Services</span>
            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Best Physiotherapy Clinic in Haryana — Expert Care for Faster Recovery
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every plan starts with a proper assessment. No templates, no rushed prescriptions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-20px_rgb(58_122_140_/_0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                <service.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-medium text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              {/* <a
                href="#book"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a> */}
            </article>
          ))}

          {/* soft CTA card, matching count to fill row */}
          {/* <div className="flex flex-col justify-between rounded-2xl border border-dashed border-primary/30 bg-background p-6">
            <div>
              <h3 className="font-serif text-lg font-medium text-foreground">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Book a free 15-minute discovery call. We&apos;ll figure out if online physiotherapy is right
                for you — with zero pressure.
              </p>
            </div>
            <a
              href="#book"
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Book a free call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
