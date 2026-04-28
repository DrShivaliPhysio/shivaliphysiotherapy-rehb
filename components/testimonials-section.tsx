import { Reviews } from "@/lib/constants"
import { Quote } from "lucide-react"



export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary/40 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Patient stories</span>
          <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Real words from real patients.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Reviews.map((r, idx) => (
            <figure
              key={r.name}
              className={`flex flex-col rounded-2xl border border-border bg-background p-6`}
            >
              <Quote className="h-5 w-5 text-primary" aria-hidden />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                {`"${r.review}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-serif text-sm text-primary">
                  {r.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-medium text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
