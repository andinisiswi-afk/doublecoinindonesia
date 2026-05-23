import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function ProductCTA() {
  return (
    <section className="py-16 md:py-20 bg-dc-dark">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Download catalog */}
          <div className="p-8 md:p-10 rounded-xl bg-white/5 border border-white/10">
            <Download className="h-8 w-8 text-dc-yellow mb-4" />
            <h3 className="text-white font-bold text-xl md:text-2xl font-serif mb-3">
              Unduh Katalog Produk
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Dapatkan katalog lengkap produk Double Coin termasuk spesifikasi teknis, panduan aplikasi, dan informasi garansi.
            </p>
            <button className="inline-flex items-center gap-2 bg-dc-yellow text-dc-dark hover:bg-dc-yellow-dark px-6 py-3 rounded-lg text-sm font-bold transition-colors">
              <Download className="h-4 w-4" />
              Unduh PDF Katalog
            </button>
          </div>

          {/* Right: Contact */}
          <div className="p-8 md:p-10 rounded-xl bg-white/5 border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-dc-yellow/20 flex items-center justify-center mb-4">
              <ArrowRight className="h-5 w-5 text-dc-yellow" />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl font-serif mb-3">
              Butuh Bantuan Memilih?
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tim teknis kami siap membantu Anda memilih ban yang tepat untuk kebutuhan spesifik armada Anda. Konsultasi gratis!
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark px-6 py-3 rounded-lg text-sm font-bold transition-colors group"
            >
              Hubungi Tim Teknis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
