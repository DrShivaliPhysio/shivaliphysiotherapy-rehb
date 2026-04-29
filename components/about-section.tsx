import Image from "next/image"
import { AboutUsPoints, Constants } from "@/lib/constants"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"



export function AboutSection() {
  return (
    <section id="about" className="bg-background pb-10 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border">
              <Image
                src="/about-consultation.jpg"
                alt="Dr. Shivali Gupta during an online physiotherapy consultation"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover h-[90%]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-background p-5 shadow-sm md:-bottom-8 md:left-8 md:right-12">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-serif text-primary">
                  SG
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">{Constants.doctorName}</div>
                  <div className="text-xs text-muted-foreground">{Constants.qualifications}</div>
                  <div className="text-xs text-muted-foreground">{Constants.qualifications1}</div>
                  <div className="text-xs text-muted-foreground">{Constants.qualifications2}</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {Constants.aboutUsMessage}
              </p>
            </div>
          </div>

          <div>
            {/* <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">About</span> */}
            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Real care, from a physiotherapist who listens first.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {Constants.aboutUsDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {Constants.aboutUsDescription2}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {AboutUsPoints.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                    <c.icon className="h-4 w-4 text-primary" />
                  </span>
                  <h3 className="mt-3 text-sm font-medium text-foreground">{c.title}</h3>
                  <Tooltip>
                    <TooltipTrigger className="md:cursor-help">
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:line-clamp-3">
                        {c.body}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{c.body}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
