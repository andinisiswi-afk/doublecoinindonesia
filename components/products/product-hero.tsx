import Image from "next/image"

export function ProductHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/tire-tbr.jpg"
          alt="Double Coin Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dc-dark/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-dc-yellow" />
          <span className="text-dc-yellow text-sm font-medium tracking-wider uppercase">
            Katalog Produk
          </span>
          <div className="w-8 h-px bg-dc-yellow" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-serif text-balance mb-4">
          Ban Berkualitas untuk Setiap Kebutuhan
        </h1>
        <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto text-pretty">
          Lebih dari 40 pola ban dan 210 ukuran tersedia untuk truk, OTR, industri, dan kendaraan penumpang.
        </p>
      </div>
    </section>
  )
}
