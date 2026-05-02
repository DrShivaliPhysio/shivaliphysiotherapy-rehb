import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Faqs } from "@/lib/constants"

export function FaqSection() {
  const leftFaqs = Faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = Faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="bg-background/40 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            FAQ
          </span>

          <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Questions patients often ask.
          </h2>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-primary underline-offset-4 hover:underline">
              Ask directly
            </a>.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* LEFT COLUMN */}
          <Accordion type="multiple" className="space-y-4">
            {leftFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`left-${i}`}
                className="
                  group rounded-2xl border border-border bg-background px-5
                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:shadow-lg hover:shadow-primary/10
                  hover:border-primary/30
                "
              >
                <AccordionTrigger
                  className="
                    py-5 text-left md:h-22 text-base font-medium
                    transition-all duration-300

                    group-hover:text-primary
                  "
                >
                  {f.q}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-5 text-sm text-muted-foreground
                    animate-in fade-in slide-in-from-top-1 duration-300
                  "
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* RIGHT COLUMN */}
          <Accordion type="multiple" className="space-y-4">
            {rightFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`right-${i}`}
                className="
                  group rounded-2xl border border-border bg-background px-5
                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:shadow-lg hover:shadow-primary/10
                  hover:border-primary/30
                "
              >
                <AccordionTrigger
                  className="
                    py-5 md:h-22 text-left text-base font-medium
                    transition-all duration-300

                    group-hover:text-primary
                  "
                >
                  {f.q}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-5 text-sm text-muted-foreground
                    animate-in fade-in slide-in-from-top-1 duration-300
                  "
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  )
}