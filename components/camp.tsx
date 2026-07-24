import { camp } from "@/lib/constants"

export function CampSection() {
  return (
    <section
      id="CampSection"
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
            Camps Conducted
          </span>

          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Bringing Physiotherapy Care Closer to Every Community
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our health camps focus on early diagnosis, awareness, and accessible
            physiotherapy services, helping individuals receive quality care
            beyond the clinic.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {camp.map((item) => (
            <article
              key={item.title}
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
                  src={item.image}
                  alt={item.title}
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-black/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Caption */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    translate-y-6
                    p-6
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    Community Camp
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}