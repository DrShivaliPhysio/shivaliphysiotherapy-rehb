import Image from "next/image";
import { AboutUsPoints, Constants, socialMediaLinks } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-secondary pt-40 pb-24 lg:pt-32 lg:pb-32">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute -left-10 top-16 h-72 w-72 rounded-full bg-primary/10 blur-[90px]" />

            {/* Image */}

            <div className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border/60 shadow-2xl">

              <div className="relative aspect-[4/5]">
                <Image
                  src="/about-consultation.jpeg"
                  alt="Dr. Shivali Gupta"
                  fill
                  sizes="(min-width:1024px) 500px,100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Experience */}

              <div className="absolute left-4 top-4 rounded-2xl border border-white/20 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl md:left-6 md:top-6 md:px-5 md:py-4">

                <p className="text-2xl md:text-3xl font-bold text-primary">
                  15+
                </p>

                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Years Experience
                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="relative z-10 mx-4 -mt-10 md:mx-8 md:-mt-16 rounded-[1.5rem] border border-border/60 bg-background/95 p-5 shadow-2xl backdrop-blur-xl">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-lg md:text-xl font-bold text-primary">
                  SG
                </div>

                <div className="flex-1">

                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {Constants.doctorName}
                  </h3>

                  <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                    {Constants.qualifications}
                  </p>

                  <p className="text-xs md:text-sm text-muted-foreground">
                    {Constants.qualifications1}
                  </p>

                  <p className="text-xs md:text-sm text-muted-foreground">
                    {Constants.qualifications2}
                  </p>

                </div>

              </div>

              <div className="mt-3 rounded-2xl bg-secondary/50 p-4">

                <p className="text-sm leading-6 md:leading-7 text-muted-foreground">
                  {Constants.aboutUsMessage}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Dr. Shivali Gupta
            </span>

            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl"></h2>

            <p className="mt-8 text-lg leading-9 text-muted-foreground">
              {Constants.aboutUsDescription}
            </p>

            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              {Constants.aboutUsDescription2}
            </p>

            {/* Social */}

            <div className="mt-10 flex flex-wrap gap-4">

              {socialMediaLinks.map((s) => (

                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-xl"
                >
                  <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>

              ))}

            </div>

            {/* Cards */}

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {AboutUsPoints.map((c) => (
                <div
                  key={c.title}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-border/60
                  bg-card/90
                  p-6
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-2xl
                "
                >
                  {/* Top Accent */}

                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  />

                  {/* Icon */}

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    md:h-14
                    md:w-14                    
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary/15
                    to-primary/5
                    shadow-inner
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                  >
                    <c.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>

                  {/* Description */}

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p
                        className="
                        mt-3
                        cursor-help
                        text-sm
                        leading-7
                        text-muted-foreground
                        line-clamp-4
                      "
                      >
                        {c.body}
                      </p>
                    </TooltipTrigger>

                    <TooltipContent className="max-w-sm">
                      <p>{c.body}</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Hover Glow */}

                  <div
                    className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-primary/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )}