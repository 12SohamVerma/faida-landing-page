import { Navbar1 } from '@/components/ui/navbar-1'
import HeroSection from '@/components/ui/hero-section'
import { About3 } from '@/components/ui/about-3'
import ReviewsShowcase from '@/components/ui/reviews-showcase'
import DownloadAppSection from '@/components/ui/download-app-section'
import FooterSection from '@/components/ui/footer'

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar1 />
      <HeroSection />
      <About3 />
      <ReviewsShowcase />
      <DownloadAppSection />
      <FooterSection />
    </main>
  )
}

export default App
