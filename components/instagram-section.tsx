'use client'

import {
  InstagramIcon,
  ArrowUpRight,
  Play,
  Clapperboard,
} from "lucide-react"

import { Constants, Posts } from "@/lib/constants"

export function InstagramSection() {
  return (
    <section
      id="InstagramSection"
      className="relative overflow-hidden bg-secondary py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {Constants.instaHandle}
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Small tips, everyday.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Exercises, posture correction, patient awareness,
              recovery tips and bite-sized physiotherapy content
              to help you stay healthy every day.
            </p>

          </div>

          <a
            href={Constants.instaHandleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border/60
              bg-background/90
              px-6
              py-3
              shadow-lg
              backdrop-blur-xl
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-primary/30
              hover:shadow-2xl
            "
          >
            <InstagramIcon className="h-5 w-5 text-primary" />

            <span className="font-medium">
              Follow on Instagram
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {Posts.map((p, i) => (

            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-border/50
                bg-background
                shadow-lg
                transition-all
                duration-500

                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-primary/30
              "
            >

              {/* Image */}

              <img
                src={p.src}
                alt={p.alt}
                className="
                  aspect-[9/16]
                  w-full
                  object-cover
                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/95
                  via-black/10
                  to-transparent
                "
              />

              {/* Reel */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  bg-black/60
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur
                "
              >
                <div className="flex items-center gap-2">
                  <Clapperboard className="h-3.5 w-3.5" />
                  Reel
                </div>
              </div>

              {/* Play */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <Play
                    className="
                      ml-1
                      h-6
                      w-6
                      fill-black
                      text-black
                    "
                  />
                </div>

              </div>

              {/* Bottom */}

              <div className="absolute inset-x-0 bottom-0 p-5">

                <p className="line-clamp-2 text-sm leading-6 text-white">
                  {p.caption}
                </p>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300

                    group-hover:gap-3
                  "
                >
                  View Reel

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  )
}