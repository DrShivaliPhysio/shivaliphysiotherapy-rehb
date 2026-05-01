import { Flyer, Services, SpecialServices } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";




export function FlyerSection() {
  return (
    <section id="flyer" className="bg-secondary py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Our Workshops & Webinars</span>
            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Clear, trusted care — shared in a simple way.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Everything you need to know, from treatments to recovery guidance, in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Flyer.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-20px_rgb(58_122_140_/_0.25)]"
            >
              <div className="w-full h-full overflow-hidden rounded-xl">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
</div>
              {/* <img src={service.image} alt={service.title} ></img> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
