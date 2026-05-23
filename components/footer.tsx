import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dc-dark text-white relative">
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/628118805645"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/doublecoin-logo.png"
                alt="Double Coin Indonesia"
                width={180}
                height={45}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Didirikan tahun 1929 di Shanghai, Double Coin adalah merek ban internasional terpercaya dengan kehadiran di lebih dari 100 negara.
            </p>
            <p className="text-dc-yellow text-sm font-medium italic">
              {'"Driven the World Over"'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Navigasi</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Produk</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/produk#otr" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Ban OTR
                </Link>
              </li>
              <li>
                <Link href="/produk#industrial" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  Ban Industri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - PT GABE ANDALAN SEMESTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Distributor Resmi</h3>
            <p className="text-dc-yellow font-semibold text-sm mb-4">PT GABE ANDALAN SEMESTA</p>
            {/* QR Code */}
            <div className="mb-4">
              <Image
                src="/images/gas-qr-code.png"
                alt="GAS QR Code"
                width={100}
                height={100}
                className="rounded-lg bg-white p-1"
              />
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-dc-yellow flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white group-hover:text-dc-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-dc-yellow flex items-center justify-center transition-colors group"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-white group-hover:text-dc-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-dc-yellow flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white group-hover:text-dc-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-dc-yellow mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  RUKO BIDEX G-19, BSD CITY<br />
                  JL. PAHLAWAN SERIBU NO.8,<br />
                  SERPONG, KOTA TANGERANG SELATAN,<br />
                  BANTEN
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-dc-yellow shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+628118805645" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                    +62-811-8805-645
                  </a>
                  <a href="tel:+622153191614" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                    +62-21-5319-1614
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-dc-yellow shrink-0" />
                <a href="mailto:info@gabetires.com" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  info@gabetires.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-dc-yellow shrink-0" />
                <a href="https://www.gabetires.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-dc-yellow text-sm transition-colors">
                  www.gabetires.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} PT Gabe Andalan Semesta. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
