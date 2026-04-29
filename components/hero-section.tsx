import Image from "next/image"
import { Calendar, Phone, MapPin, Video, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Constants, KeyFacilities } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-8">
      {/* very soft tinted backdrop shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-secondary/60"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16  md:px-6 md:pb-24  lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Currently accepting online patients across India
          </span>

          <h1 className="mt-5 text-pretty font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Expert physiotherapy care,{" "}
            <span className="italic text-primary">right from your home.</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {Constants.heroDescription}
          </p>

          <ul className="mt-7 grid gap-2.5 text-sm text-foreground sm:grid-cols-2">
            {KeyFacilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                <span className="leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border px-6">
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Contact Now
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-6 text-sm">
            <div>
              <div className="font-serif text-2xl font-medium text-foreground">{Constants.yearsExperience} yrs</div>
              <div className="text-xs text-muted-foreground">Clinical experience</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-medium text-foreground">{Constants.patientsTreated}</div>
              <div className="text-xs text-muted-foreground">Patients treated</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-medium text-foreground">{Constants.patientRating}</div>
              <div className="text-xs text-muted-foreground">Patient rating</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_20px_60px_-30px_rgb(58_122_140_/_0.35)]">
            <Image
              src="/doctor-hero.jpg"
              alt="Dr. Aanya Verma, physiotherapist, smiling warmly"
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 400px, 90vw"
              className="object-cover"
            />
          </div>

          {/* floating card — online consult */}
          <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-sm md:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
              <Video className="h-4 w-4 text-primary" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium text-foreground">Online consultation</div>
              <div className="text-xs text-muted-foreground">Available today · {Constants.availableSlots} slots</div>
            </div>
          </div>

          {/* floating card — clinic soon */}
          <div className="absolute -right-2 bottom-8 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-sm md:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/70">
              <MapPin className="h-4 w-4 text-accent-foreground" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium text-foreground">Clinic opening soon</div>
              <div className="text-xs text-muted-foreground">Haryana · in-person care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
