import { Reviews } from "@/lib/constants"
import { Quote, Star } from "lucide-react"

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="mt-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.floor(rating)
              ? "h-4 w-4 fill-yellow-400 text-yellow-400"
              : "h-4 w-4 text-yellow-400"
          }
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [featured, ...rest] = Reviews

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-secondary py-24 lg:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary bg-background">
            Patient stories
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Real words from real patients.
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="mt-10 max-w-5xl">
          <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/95 p-8 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
            <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex h-16 w-16 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-primary/15 to-primary/5 shadow-inner">
              <Quote className="h-8 w-8 text-primary" />
            </div>

            <RatingStars rating={featured.stars} />

            <blockquote className="mt-6 text-xl leading-9 text-foreground">
              "{featured.review}"
            </blockquote>

            <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {featured.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
              </span>

              <div>
                <div className="font-medium text-foreground">
                  {featured.name}
                </div>

                <div className="text-sm text-muted-foreground">
                  {featured.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((r) => (
            <figure
              key={r.name}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Content */}
              <div className="relative flex-1 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-br from-primary/15 to-primary/5 shadow-inner">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                <RatingStars rating={r.stars} />

                <blockquote className="mt-4 line-clamp-5 text-[0.95rem] leading-7 text-foreground transition-opacity duration-200 group-hover:opacity-0">
                  "{r.review}"
                </blockquote>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col bg-background/95 p-7 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-br from-primary/15 to-primary/5 shadow-inner">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>

                  <RatingStars rating={r.stars} />

                  <p className="mt-4 h-full overflow-y-auto pr-2 text-[0.95rem] leading-7 text-foreground">
                    "{r.review}"
                  </p>
                </div>
              </div>

              {/* Footer */}
              <figcaption className="flex items-center gap-3 border-t border-border/60 bg-background/95 p-4 backdrop-blur-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {r.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>

                <div className="leading-tight">
                  <div className="text-sm font-medium text-foreground">
                    {r.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {r.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}