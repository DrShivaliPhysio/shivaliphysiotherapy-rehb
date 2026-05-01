import { Services } from "@/lib/constants"

export function ServicesSection() {
  return (
    <section id="services-section" className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.14em] text-primary">
              Services
            </span>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              Expert Physiotherapy Treatment for Pain Relief & Recovery
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Personalized treatment plans designed to reduce pain, improve mobility, and speed up recovery.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                <service.icon className="h-5 w-5 text-primary" />
              </span>

              {/* Title */}
              <h3 className="mt-5 font-serif text-lg font-medium text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>

              {/* CTA */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
                className="mt-4 text-sm font-medium text-primary flex items-center gap-1"
              >
                Book Now →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}