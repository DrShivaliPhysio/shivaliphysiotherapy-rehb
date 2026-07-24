import { Awards } from "@/lib/constants"

export function AwardsSection() {
  return (
    <section
      id="Awards"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Awards & Recognition
          </span>

          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Recognized for Excellence in Patient Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every achievement reflects our dedication to compassionate care,
            clinical excellence, and helping patients recover with confidence.
          </p>
        </div>

        {/* Awards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Awards.map((award) => (
            <article
              key={award.title}
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
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="
                    aspect-[4/3]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-7">

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                  <award.icon className="h-6 w-6 text-primary" />
                </span>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                  {award.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {award.body}
                </p>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}