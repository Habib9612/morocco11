import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ValueProposition from "@/components/value-proposition"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import LogisticsShowcase from "@/components/logistics-showcase"
import StatsSection from "@/components/stats-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AIMatchingShowcase from "@/components/ai-matching-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <HeroSection />
      <StatsSection />
      <AIMatchingShowcase />
      <FeaturesSection />
      <ValueProposition />
      <HowItWorksSection />
      <TestimonialsSection />
      <LogisticsShowcase />
      <ContactSection />
      <Footer />
    </div>
  )
}

