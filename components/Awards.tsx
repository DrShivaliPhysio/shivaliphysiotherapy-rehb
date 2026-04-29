import { Awards, Services, SpecialServices } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";




export function AwardsSection() {
  return (
    <section id="Awards" className="bg-secondary py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Awards</span>
            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Recognized for care — trusted by patients.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every milestone reflects our commitment to quality treatment, patient satisfaction, and consistent results.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Awards.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-20px_rgb(58_122_140_/_0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                <service.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-medium text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>          
              <img src={service.image} alt={service.title} className="mt-3 rounded-lg object-cover w-full h-full"></img> 
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
