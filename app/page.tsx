import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AudienceSection } from "@/components/audience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import QuickActions from "@/components/QuickActions"
import { SpecialServicesSection } from "@/components/Special-Services"
import { AwardsSection } from "@/components/Awards"
import { FlyerSection } from "@/components/Flyer"
import { CampSection} from "@/components/camp"


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <QuickActions />
        <AboutSection />
        <HeroSection />
        <ServicesSection />
        <SpecialServicesSection/>
        <AudienceSection />
        
        <InstagramSection />
        <AwardsSection/>
        <FlyerSection/>
        <CampSection/>
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
