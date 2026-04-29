import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import ProductPreview from '@/components/ProductPreview'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import Roadmap from '@/components/Roadmap'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductPreview />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </main>
  )
}
