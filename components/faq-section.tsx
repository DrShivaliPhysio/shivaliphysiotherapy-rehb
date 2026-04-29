import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Faqs } from "@/lib/constants"

export function FaqSection() {
  return (
    <section id="faq" className="bg-background/40 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">FAQ</span>
          <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Questions patients often ask.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-primary underline-offset-4 hover:underline">
              Ask directly
            </a>
            .
          </p>
        </div>

        <Accordion type="multiple" className="mt-10 grid w-full gap-y-4 gap-x-10 sm:grid-cols-2">
          {Faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-background px-5 data-[state=open]:shadow-[0_10px_30px_-20px_rgb(58_122_140_/_0.2)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
