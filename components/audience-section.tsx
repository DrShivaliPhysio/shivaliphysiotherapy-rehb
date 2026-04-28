import { Audiences } from "@/lib/constants";

export function AudienceSection() {
  return (
    <section id="audience" className="bg-background py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Who it&apos;s for</span>
          <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Care that meets you where you are in life.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re healing, preventing, or simply trying to feel good in your body again — the
            right physiotherapy plan meets you halfway.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Audiences.map((a, i) => (
            <div
              key={a.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <a.icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-medium text-foreground">{a.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
