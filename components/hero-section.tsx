import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Constants, KeyFacilities } from "@/lib/constants";

type StatCardProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div
      className="
      group rounded-3xl
      border border-slate-200/80
      bg-white/90
      backdrop-blur-xl
      p-5
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      {icon && <div className="mb-3">{icon}</div>}

      <h3 className="font-serif text-3xl font-semibold text-slate-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div
      className="
      flex items-center gap-3
      rounded-2xl
      border
      border-slate-200
      bg-white/80
      px-4
      py-3
      backdrop-blur
      transition-all
      duration-300
      hover:border-primary/20
      hover:shadow-lg
      "
    >
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />

      <span className="text-sm font-medium text-slate-700">{title}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-sky-200/30 blur-[120px]" />

        <div className="absolute right-[-160px] top-[80px] h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-16 py-12 lg:grid-cols-[1fr_1.05fr]">
          {/* LEFT */}

          <div className="order-1">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70"></span>

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                In-Clinic & Online Physiotherapy
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
              mt-8
              max-w-xl
              font-serif
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-slate-900
              md:text-6xl
              xl:text-7xl
              "
            >
              Relieve Pain.
              <br />
              Move Better.
              <br />
              <span className="text-primary">Live Stronger.</span>
            </h1>

            {/* Description */}

            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-slate-600
              "
            >
              {Constants.heroDescription}
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="
                 group
  h-14
  rounded-full
  px-8
  text-base
  font-semibold
  shadow-lg
  shadow-primary/20
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-xl
">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScRSWRfnJEsaEUr6a2m3WK-A2Mgn2QLGQvM-qWodkUF56-_dw/viewform">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Clinic Appointment
                  <ArrowRight
                    className="
    ml-2
    h-5
    w-5
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
                  />
                </Link>
              </Button>

              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="
    group
    flex-1
    rounded-full
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    hover:border-primary
  "
                >
                  <Link href={`tel:${Constants.contactNo}`}>
                    <Phone
                      className="mr-2
   h-5
   w-5
   transition-transform
   duration-300
   group-hover:-rotate-12"
                    />
                    Call
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="
    group
    flex-1
    rounded-full
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-green-500/20
    hover:bg-green-50
hover:border-green-300
  "
                >
                  <Link href={`https://wa.me/${Constants.contactNo}`}>
                    <MessageCircle
                      className="
        mr-2
        h-5
        w-5
        animate-whatsapp-icon
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
                    />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {KeyFacilities.map((item) => (
                <FeatureCard key={item} title={item} />
              ))}
            </div>
            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
              <StatCard
                value={Constants.yearsExperience}
                label="Years Experience"
              />

              <StatCard
                value={Constants.patientsTreated}
                label="Patients Helped"
              />

              <div className="col-span-2 lg:col-span-1">
                <StatCard
                  value={Constants.patientRating}
                  label="Google Rating"
                  icon={
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  }
                />
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="order-2 relative flex justify-center lg:justify-end">
            {/* Background Glow */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                h-[320px]
                w-[320px]
                rounded-full
                bg-cyan-200/30
                blur-[90px]

                sm:h-[420px]
                sm:w-[420px]

                lg:h-[560px]
                lg:w-[560px]
                "
              />
            </div>

            {/* Organic Frame */}

            <div
              className="
              relative
              z-10

              h-[430px]
              w-[320px]

              sm:h-[560px]
              sm:w-[420px]

              lg:h-[700px]
              lg:w-[540px]

              overflow-hidden
              rounded-[36%_64%_44%_56%/40%_38%_62%_60%]
              border
              border-white/60
              bg-white
              p-4
              shadow-[0_40px_90px_rgba(15,23,42,.18)]
              ">
              <div
                className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[40%_60%_50%_50%/44%_44%_56%_56%]
                animate-float">
                <Image
                  src="/doctor-hero.jpeg"
                  alt="Dr Shivali Gupta"
                  fill
                  priority
                  className="object-cover object-top scale-100
                  sm:scale-105
                  lg:scale-110"/>
              </div>
            </div>

            {/* Google Rating */}
            <div
              className="
    absolute

    left-2
    top-6

    sm:left-0
    sm:top-10

    lg:-left-6
    lg:top-24

    z-20

    animate-[float_6s_ease-in-out_infinite]
  "
            >
              <div
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white/95
                backdrop-blur-xl
                px-5
                py-4
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {Constants.patientRating}
                    </p>
                    <p className="text-sm text-slate-500">
                      Google Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}

            <div
              className="
              absolute
              bottom-6
              right-2
              sm:right-0
              sm:bottom-10
              lg:-right-6
              lg:bottom-24
              z-20
              rounded-3xl
              border
              border-slate-200
              bg-white/95
              backdrop-blur-xl
              px-5
              py-4
              shadow-xl
              animate-[float_8s_ease-in-out_infinite]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-2xl">
              <div className="flex items-center gap-3">
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-primary/10
                  "
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {Constants.yearsExperience}
                  </p>

                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
