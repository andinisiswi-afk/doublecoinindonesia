import Image from "next/image"

export function TireSearchHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Pencarian Ban Double Coin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dc-dark/90 via-dc-dark/70 to-dc-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/" className="text-white/60 hover:text-white transition-colors">Beranda</a>
          <span className="text-white/40">{">"}</span>
          <span className="text-dc-yellow font-medium">Pencarian Ban</span>
        </nav>

        <div className="max-w-2xl">
          {/* Yellow accent bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-12 bg-dc-yellow" />
            <h1 className="text-3xl md:text-5xl font-bold text-white font-serif">
              Pencarian Ban
            </h1>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Temukan ban Double Coin yang tepat untuk kendaraan dan aplikasi Anda. 
            Gunakan filter di bawah untuk menemukan ban berkualitas tinggi berdasarkan kriteria Anda.
          </p>
        </div>
      </div>
    </section>
  )
}
