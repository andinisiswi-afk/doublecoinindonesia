import Image from "next/image"

export function AboutStory() {
  return (
    <section className="py-16 md:py-24 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/factory.jpg"
              alt="Double Coin Manufacturing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dc-dark/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-dc-yellow" />
              <span className="text-dc-dark text-sm font-semibold tracking-wider uppercase">
                Cerita Kami
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground font-serif text-balance mb-6">
              Menempa Mobilitas Global Sejak 1929
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Lahir di Shanghai pada fajar kebangkitan industri Tiongkok, Double Coin muncul dari pelopor Shanghai Great China Rubber dan Zhengtai Rubber Factories. Didirikan pada tahun 1929 sebagai salah satu merek ban pertama di negara itu, Double Coin menyalakan warisan keunggulan teknik yang akan mendorong industri karet Tiongkok ke panggung dunia.
              </p>
              <p>
                Mensintesis inovasi impor dengan R&D milik sendiri, Double Coin merekayasa terobosan yang mendefinisikan era - dari merek dasar Warrior dan Double Coin hingga ban radial all-steel pertama Tiongkok untuk truk, OTR, dan mesin industri.
              </p>
              <p>
                Saat ini, Double Coin berdiri sebagai titan mobilitas global. Ekosistem manufaktur canggihnya membentang di Tiongkok dan Thailand, memproduksi ban radial dan bias-ply yang dipercaya di lebih dari 100 negara - dari situs pertambangan Arktik hingga pusat logistik perkotaan.
              </p>
            </div>

            {/* Key strengths */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-dc-yellow/10 border border-dc-yellow/20 text-center">
                <p className="text-dc-dark font-bold text-xl font-serif">1929</p>
                <p className="text-muted-foreground text-xs mt-1">Didirikan</p>
              </div>
              <div className="p-4 rounded-lg bg-dc-yellow/10 border border-dc-yellow/20 text-center">
                <p className="text-dc-dark font-bold text-xl font-serif">100+</p>
                <p className="text-muted-foreground text-xs mt-1">Negara</p>
              </div>
              <div className="p-4 rounded-lg bg-dc-yellow/10 border border-dc-yellow/20 text-center">
                <p className="text-dc-dark font-bold text-xl font-serif">30+</p>
                <p className="text-muted-foreground text-xs mt-1">Mitra OEM</p>
              </div>
              <div className="p-4 rounded-lg bg-dc-yellow/10 border border-dc-yellow/20 text-center">
                <p className="text-dc-dark font-bold text-xl font-serif">TECO</p>
                <p className="text-muted-foreground text-xs mt-1">Teknologi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
