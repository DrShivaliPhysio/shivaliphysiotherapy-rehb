import { Reviews } from "@/lib/constants"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const [featured, ...rest] = Reviews

  return (
    <section id="testimonials" className="bg-secondary py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Patient stories
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
            Real words from real patients.
          </h2>
        </div>

        {/* ⭐ Featured Testimonial */}
        <div className="mt-10">
          <div className="rounded-3xl border border-primary/20 bg-background p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <Quote className="h-7 w-7 text-primary opacity-70" />

            <div className="flex gap-1 mt-3 text-yellow-500 text-sm">
              {featured.stars}
            </div>

            <blockquote className="mt-4 text-lg leading-8 text-foreground">
              "{featured.review}"
            </blockquote>

            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
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

        {/* 🧾 Grid Testimonials */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((r) => (
            <figure
              key={r.name}
              className="group flex flex-col rounded-2xl border border-border bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* ✅ Content Area */}
              <div className="relative p-6 flex-1">

                {/* Quote Icon */}
                <Quote className="h-5 w-5 text-primary opacity-70" />

                {/* Stars */}
                <div className="flex gap-1 mt-2 text-yellow-500 text-xs">
                  {r.stars}
                </div>

                {/* Default Clamped Text */}
                <blockquote className="mt-4 text-[0.95rem] leading-7 text-foreground line-clamp-5 group-hover:opacity-0 transition-opacity duration-200">
                  "{r.review}"
                </blockquote>

                {/* 🔥 Hover Full Text Overlay (ONLY inside content area) */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                  
                  <Quote className="h-5 w-5 text-primary opacity-70" />

                  <div className="flex gap-1 mt-2 text-yellow-500 text-xs">
                    {r.stars}
                  </div>

                  <p className="mt-4 text-[0.95rem] leading-7 text-foreground overflow-y-auto pr-2 h-full">
                    "{r.review}"
                  </p>
                </div>
              </div>

              {/* ✅ Footer (ALWAYS VISIBLE, NEVER OVERLAPPED) */}
              <figcaption className="flex items-center gap-3 border-t border-border p-4 bg-background">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
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