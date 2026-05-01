import Image from "next/image"
import { Calendar, Phone, Video, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Constants, KeyFacilities } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-10">

      {/* Background */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-secondary/60" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 md:px-6 md:pb-24 lg:grid-cols-[1.1fr_1fr]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Online & Home Consultation Available
          </span>

          {/* 🔥 NEW POWER HEADLINE */}
          <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Relieve Pain. Move Better. Live Stronger.
          </h1>

          <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
            {Constants.heroDescription}
          </p>

          {/* FEATURES */}
          <ul className="mt-7 grid gap-2.5 text-sm sm:grid-cols-2">
            {KeyFacilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Button asChild size="lg" className="rounded-full px-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <a href={`https://wa.me/${Constants.contactNo}`}>
                WhatsApp Now
              </a>
            </Button>

          </div>

          {/* 🔴 URGENCY */}
          <p className="text-sm text-red-500 font-medium mt-3">
            Limited slots available today
          </p>

          {/* STATS */}
          <div className="mt-10 flex gap-8 border-t border-border pt-6 text-sm flex-wrap">
            <div>
              <div className="text-2xl font-serif text-foreground">
                {Constants.yearsExperience}+
              </div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>

            <div>
              <div className="text-2xl font-serif text-foreground">
                {Constants.patientsTreated}
              </div>
              <div className="text-xs text-muted-foreground">Patients Treated</div>
            </div>

            <div>
              <div className="text-2xl font-serif text-foreground">
                {Constants.patientRating}
              </div>
              <div className="text-xs text-muted-foreground">Patient Rating</div>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-lg">
            <Image
              src="/doctor-hero.jpeg"
              alt="Physiotherapist"
              fill
              className="object-cover"
            />
          </div>

          {/* ONLINE BADGE */}
          <div className="absolute -left-4 top-8 bg-background border border-border rounded-xl px-4 py-3 shadow">
            <div className="flex items-center gap-2 text-sm">
              <Video className="h-4 w-4 text-primary" />
              Online Consultation Available
            </div>
          </div>

          {/* LOCATION BADGE */}
          <div className="absolute -right-4 bottom-8 bg-background border border-border rounded-xl px-4 py-3 shadow">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Clinic Opening Soon
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}