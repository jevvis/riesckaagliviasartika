import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WorkGallery from '@/components/WorkGallery'
import {
  AboutSection,
  EducationSection,
  AwardsSection,
  SkillsSection,
  PersonalSkillsSection,
} from '@/components/Sections'
import Contact from '@/components/Contact'
import FadeInSection from '@/components/FadeInSection'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Navbar />
      <Hero />
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <EducationSection />
      </FadeInSection>
      <FadeInSection>
        <WorkGallery />
      </FadeInSection>
      <FadeInSection>
        <WorkGallery prefix="intern" sectionId="intern" count={2} showCta={false} />
      </FadeInSection>
      <FadeInSection>
        <AwardsSection />
      </FadeInSection>
      <FadeInSection>
        <SkillsSection />
      </FadeInSection>
      <FadeInSection>
        <PersonalSkillsSection />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} apt. Riescka Aglivia Sartika, S.Farm. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
