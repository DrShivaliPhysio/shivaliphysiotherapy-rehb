
import type { Metadata, Viewport } from "next";
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
  title: "Dr. Shivali Physiotherapy & Rehabilitation Clinic | Expert Physiotherapy in Yamunanagar",
  verification: {
    google: "k-nJAegrzAZ3ixh4WMMvFJQhwg0Kq5AdHUZbcl8I6xo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Dr. Shivali Physiotherapy & Rehabilitation Clinic in Yamunanagar provides expert physiotherapy, sports rehabilitation, neurological rehabilitation, orthopedic physiotherapy, dry needling, cupping therapy, posture correction, pain management, and personalized treatment plans. Clinic visits and online consultations available.",
  keywords: [
    "physiotherapy clinic Yamunanagar",
  "physiotherapist in Yamunanagar",
  "best physiotherapist Yamunanagar",
  "sports physiotherapy",
  "neurological physiotherapy",
  "orthopedic physiotherapy",
  "dry needling",
  "cupping therapy",
  "pain management",
  "rehabilitation clinic",
  "posture correction",
  "online physiotherapy consultation",
  ],
  authors: [{ name: "Dr Shivali Gupta" }],
  creator: "Dr Shivali Gupta",
  applicationName: "Dr. Shivali Physiotherapy",
  formatDetection: {
  telephone: false,
  email: false,
  address: false,
},
  metadataBase: new URL(Constants.siteUrl),
  alternates: {
    canonical: Constants.siteUrl,
  },robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
  openGraph: {
    title: "Dr. Shivali Physiotherapy & Rehabilitation Clinic | Expert Physiotherapy in Yamunanagar",
    description: "Expert physiotherapy, rehabilitation, pain management, sports injury treatment, neurological physiotherapy, and personalized care in Yamunanagar.",
    url: Constants.siteUrl,
    siteName: "Dr Shivali Physiotherapy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dr. Shivali Physiotherapy & Rehabilitation Clinic in Yamunanagar" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shivali Physiotherapy & Rehabilitation Clinic | Expert Physiotherapy in Yamunanagar",
    description: "Expert physiotherapy, rehabilitation, pain management, sports injury treatment, neurological physiotherapy, and personalized care in Yamunanagar.",
    images: ["/og-image.png"],
  },
}
export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Shivali Gupta",
              jobTitle: "Consultant Physiotherapist",
              description: "Expert physiotherapy, rehabilitation, pain management, sports injury treatment, and neurological physiotherapy in Yamunanagar.",
              url: Constants.siteUrl,
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
