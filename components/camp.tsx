import { camp } from "@/lib/constants"

export function CampSection() {
  return (
    <section id="camp" className="bg-background py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Camp's Held
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              Care that reaches you — where it matters most.
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Bringing expert physiotherapy services closer to communities through dedicated health camps.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {camp.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-secondary aspect-[4/3] transition-all duration-300 hover:shadow-lg"
            >
              {/* Image (NO CROPPING) */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain bg-secondary transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}