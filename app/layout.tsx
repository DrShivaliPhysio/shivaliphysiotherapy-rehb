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
  title: "Online Physiotherapy Consultation | Dr Shivali Physiotherapy Haryana",
verification: {
    google: "k-nJAegrzAZ3ixh4WMMvFJQhwg0Kq5AdHUZbcl8I6xo",
  },
  description:
    "Get expert online physiotherapy consultation from Dr Shivali. Personalized treatment for back pain, neuro rehab, and recovery across Haryana and India.",

  keywords: [
    "online physiotherapy consultation",
    "physiotherapist in Haryana",
    "physiotherapy at home India",
    "back pain treatment online",
    "neuro physiotherapy",
    "virtual physiotherapy session",
  ],

  authors: [{ name: "Dr Shivali Physiotherapy" }],
  creator: "Dr Shivali Physiotherapy",

  metadataBase: new URL("https://drshivaliphysio.com"),

  alternates: {
    canonical: "https://drshivaliphysio.com",
  },

  openGraph: {
    title: "Online Physiotherapy Consultation | Dr Shivali",
    description:
      "Expert online physiotherapy sessions for pain relief and recovery. Book consultation today.",
    url: "https://drshivaliphysio.com/",
    siteName: "Dr Shivali Physiotherapy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr Shivali Physiotherapy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Physiotherapy Consultation",
    description:
      "Recover from pain with expert online physiotherapy sessions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        
        {/* ✅ Structured Data (SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr Shivali Physiotherapy",
              description:
                "Online physiotherapy consultation and rehabilitation services",
                "@id": "https://drshivaliphysio.com/#organization",
              areaServed: {
  "@type": "AdministrativeArea",
  name: "Haryana, India",
},
              url: "https://drshivaliphysio.com",
              availableService: {
                "@type": "MedicalTherapy",
                name: "Physiotherapy",
              },
            }),
          }}
        />

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}