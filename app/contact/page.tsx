import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Kontak | apt. Riescka Aglivia Sartika, S.Farm.',
  description: 'Hubungi apt. Riescka Aglivia Sartika, S.Farm. — Apoteker',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center pt-20">
        <div className="w-full">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} apt. Riescka Aglivia Sartika, S.Farm. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
