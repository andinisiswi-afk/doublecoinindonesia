import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Double Coin Indonesia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dc-dark/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-dc-gold" />
          <span className="text-dc-gold text-sm font-medium tracking-wider uppercase">
            Hubungi Kami
          </span>
          <div className="w-8 h-px bg-dc-gold" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-serif text-balance mb-4">
          Kami Siap Membantu Anda
        </h1>
        <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto text-pretty">
          Dapatkan konsultasi gratis, penawaran khusus, atau informasi lebih lanjut tentang produk Double Coin untuk kebutuhan armada Anda.
        </p>
      </div>
    </section>
  )
}
