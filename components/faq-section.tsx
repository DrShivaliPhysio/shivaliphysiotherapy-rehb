"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Faqs } from "@/lib/constants"

export function FaqSection() {
  return (
    <section id="faq" className="bg-background/40 py-10 relative z-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            FAQ
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Questions patients often ask.
          </h2>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#contact"
              className="text-primary underline-offset-4 hover:underline"
            >
              Ask directly
            </a>.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10">
          <Accordion type="multiple" className="space-y-4">
            {Faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
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
                    w-full py-5 text-left text-base font-medium
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
