import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Constants } from "@/lib/constants"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Shivali Gupta | Online Physiotherapy Consultation & Rehabilitation Services",
  verification: {
    google: "k-nJAegrzAZ3ixh4WMMvFJQhwg0Kq5AdHUZbcl8I6xo",
  },
  description:
    "Dr. Shivali Gupta provides online physiotherapy consultations, rehabilitation guidance, posture correction support, neurological rehabilitation, orthopedic physiotherapy, and personalized recovery programs. Online appointments available through scheduled video consultations.",
  keywords: [
    "online physiotherapy consultation",
    "physiotherapist in Yamunanagar",
    "rehabilitation services",
    "neurological physiotherapy",
    "orthopedic physiotherapy",
    "posture correction",
    "pain management",
    "virtual physiotherapy session",
  ],
  authors: [{ name: "Dr Shivali Gupta" }],
  creator: "Dr Shivali Gupta",
  metadataBase: new URL("https://drshivaliphysio.com"),
  alternates: {
    canonical: "https://drshivaliphysio.com",
  },
  openGraph: {
    title: "Dr. Shivali Gupta | Online Physiotherapy Consultation",
    description: "Professional online physiotherapy consultations and rehabilitation guidance.",
    url: "https://drshivaliphysio.com/",
    siteName: "Dr Shivali Physiotherapy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dr Shivali Physiotherapy" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shivali Gupta | Online Physiotherapy Consultation",
    description: "Professional online physiotherapy consultations and rehabilitation guidance.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Shivali Gupta",
              jobTitle: "Consultant Physiotherapist",
              description: "Online physiotherapy consultation and rehabilitation services",
              url: "https://drshivaliphysio.com",
            }),
          }}
        />
        <main className="pb-[calc(96px+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
