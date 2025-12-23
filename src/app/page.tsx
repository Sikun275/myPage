import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certificates from '@/components/Certificates'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ThankYou from '@/components/ThankYou'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <Certificates />
      <Skills />
      <Contact />
      <ThankYou />
    </div>
  )
}
