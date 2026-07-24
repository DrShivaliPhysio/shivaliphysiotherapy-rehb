import { ArrowRight } from "lucide-react"
import { SpecialServices } from "@/lib/constants"

export function SpecialServicesSection() {
  return (
    <section
      id="special-services"
      className="relative overflow-hidden bg-secondary py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Special Services
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Advanced therapies tailored to accelerate your recovery.
            </h2>

          </div>

          <p className="max-w-md text-base leading-7 text-muted-foreground">
            Targeted techniques like Dry Needling, Cupping,
            Kinesio Taping and Hydrotherapy are selected
            according to your condition to improve mobility,
            relieve pain and support faster recovery.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {SpecialServices.map((service) => (

            <article
              key={service.title}
              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[1.75rem]
                border
                border-border/60
                bg-background/95
                p-7
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-3
                hover:border-primary/30
                hover:bg-background
                hover:shadow-2xl
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-primary
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-primary/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-primary/15
                  to-primary/5
                  shadow-inner
                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}

              <h3 className="relative z-10 mt-6 font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              {/* Description */}

              <p className="relative z-10 mt-4 text-sm leading-7 text-muted-foreground">
                {service.body}
              </p>

              {/* CTA */}

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  z-10
                  mt-auto
                  flex
                  items-center
                  gap-2
                  pt-8
                  text-sm
                  font-semibold
                  text-primary
                  transition-all
                  duration-300

                  group-hover:gap-3
                "
              >
                Book Consultation

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}