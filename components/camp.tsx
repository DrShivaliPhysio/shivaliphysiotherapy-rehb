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
              className="
                group relative overflow-hidden rounded-2xl border border-border bg-background
                transition-all duration-300 ease-out

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-primary/10
              "
            >
              
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />

                {/* Overlay Gradient */}
                <div className="
                  absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                " />
              </div>

              {/* Optional Caption (uncomment if needed) */}
              {/* 
              <div className="
                absolute bottom-0 left-0 right-0 p-4
                translate-y-4 opacity-0
                transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100
              ">
                <p className="text-sm font-medium text-white">
                  {item.title}
                </p>
              </div>
              */}

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}