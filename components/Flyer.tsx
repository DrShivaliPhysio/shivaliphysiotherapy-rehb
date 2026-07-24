import { Flyer } from "@/lib/constants"

export function FlyerSection() {
  return (
    <section id="flyer" className="relative overflow-hidden py-24 lg:py-32 bg-secondary"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Workshops & Webinars
          </span>

          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Learn, Recover & Stay Healthy
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our educational workshops and awareness sessions designed to
            help you understand your body, prevent injuries, and recover with
            confidence.
          </p>
        </div>

        {/* Flyers */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Flyer.map((service) => (
            <article
              key={service.title}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-border/60
                bg-background/95
                backdrop-blur-xl
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-2xl
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}