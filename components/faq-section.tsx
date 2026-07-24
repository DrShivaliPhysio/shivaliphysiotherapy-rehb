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
    <section
      id="faq"
      className="relative z-10 overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            FAQ
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Questions patients often ask.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a
              href="#contact"
              className="font-medium text-primary underline-offset-4 transition hover:underline"
            >
              Ask directly
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-14 max-w-6xl">
          <Accordion type="multiple" className="space-y-5">
            {Faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-border/60
                  bg-background/95
                  px-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-2xl
                  data-[state=open]:border-primary/40
                "
              >
                {/* Left Accent */}
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-full bg-primary transition-transform duration-300 group-data-[state=open]:scale-y-100" />

                <AccordionTrigger
                  className="
                    w-full
                    py-6
                    text-left
                    text-lg
                    font-medium
                    transition-colors
                    duration-300
                    hover:no-underline
                    group-hover:text-primary
                    [&[data-state=open]>svg]:rotate-180
                  "
                >
                  {f.q}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-6
                    text-base
                    leading-8
                    text-muted-foreground
                    animate-in
                    fade-in
                    slide-in-from-top-1
                    duration-300
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