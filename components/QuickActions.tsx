import React from "react"
import { Constants } from "@/lib/constants"
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ArrowUpRight,
} from "lucide-react"

const QuickActions = () => {
  const cards = [
    {
      title: "Call Us",
      value: Constants.contactNo,
      subtitle: "Mon - Sat • Instant Support",
      href: `tel:${Constants.contactNo}`,
      icon: Phone,
      clickable: true,
    },
    {
      title: "WhatsApp",
      value: "Chat with our clinic",
      subtitle: "Replies within an hour",
      href: `https://wa.me/${Constants.contactNo}`,
      icon: Phone,
      clickable: true,
    },
    {
      title: "Email",
      value: "Send us an Email",
      subtitle: Constants.email,
      href: `mailto:${Constants.email}`,
      icon: Mail,
      clickable: true,
    },
    {
      title: "Consultation Hours",
      value: "Mon – Sat",
      subtitle: "10:00 AM – 7:00 PM",
      icon: Clock3,
      clickable: false,
    },
    {
      title: "Clinic Location",
      value: "Gupta Colony",
      subtitle:
        "Near Kanahiya Sahib Chowk, Yamuna Nagar",
      icon: MapPin,
      clickable: false,
    },
  ]

  return (
    <section
      id="quickaction"
      className="bg-secondary pt-28 pb-5 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {cards.map((card) => {
            const Icon = card.icon

            const content = (
              <>
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {card.clickable && (
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  )}
                </div>

                <div className="mt-7 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {card.title}
                  </p>

                  <h3 className="text-lg font-bold leading-snug text-foreground">
                    {card.value}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {card.subtitle}
                  </p>
                </div>
              </>
            )

            const className =
              "group relative overflow-hidden rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"

            if (card.clickable) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className={className}
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                  {content}
                </a>
              )
            }

            return (
              <div
                key={card.title}
                className={className}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickActions