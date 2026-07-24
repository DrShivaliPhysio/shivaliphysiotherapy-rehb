import { Audiences } from "@/lib/constants"

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Who It's For
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Care that meets you where you are in life.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you're healing, preventing, or simply trying to
            feel your best again, every treatment plan is tailored
            to your lifestyle, goals, and recovery journey.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {Audiences.map((a, i) => (

            <article
              key={a.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-border/60
                bg-card/90
                p-7
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-3
                hover:border-primary/30
                hover:bg-background
                hover:shadow-2xl
              "
            >

              {/* Accent */}

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

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-primary/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Header */}

              <div className="relative z-10 flex items-center justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
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
                  <a.icon className="h-6 w-6 text-primary" />
                </div>

                <span className="font-serif text-lg text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {a.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {a.body}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}