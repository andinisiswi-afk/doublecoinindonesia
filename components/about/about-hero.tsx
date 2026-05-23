import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Double Coin Fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dc-dark/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-dc-yellow" />
          <span className="text-dc-yellow text-sm font-medium tracking-wider uppercase">
            Tentang Kami
          </span>
          <div className="w-8 h-px bg-dc-yellow" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-serif text-balance mb-4">
          Menghubungkan Keunggulan Manufaktur dengan Kepuasan Pelanggan
        </h1>
        <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto text-pretty">
          Lebih dari tiga dekade dedikasi dalam menghasilkan ban berkualitas tinggi yang dipercaya oleh jutaan pengguna di seluruh dunia.
        </p>
      </div>
    </section>
  )
}
