import { camp } from "@/lib/constants"

export function CampSection() {
  return (
    <section id="CampSection" className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.14em] text-primary">
              Camps Conducted
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              Bringing care closer to communities.
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Dedicated physiotherapy camps designed to reach patients where they need care the most.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {camp.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:shadow-lg"
            >

              {/* Image */}
              <div className="w-full h-full overflow-hidden">
                <img
  src={item.image}
  alt={item.title}
  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
/>
              </div>

              {/* Content
              <div className="p-4 flex-1 flex items-end">
                <p className="text-sm font-medium text-foreground leading-snug">
                  {item.title}
                </p>
              </div> */}

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}