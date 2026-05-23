"use client"

const milestones = [
  {
    year: "1929",
    title: "Pendirian Double Coin",
    description:
      "Double Coin didirikan di Shanghai dari Shanghai Great China Rubber dan Zhengtai Rubber Factories, menjadi salah satu produsen ban pertama di Tiongkok.",
  },
  {
    year: "1934",
    title: "Ban Mobil Pertama Tiongkok",
    description:
      "Double Coin mencatat tonggak sejarah industri Tiongkok dengan memperkenalkan ban mobil pertama buatan dalam negeri.",
  },
  {
    year: "1964",
    title: "Ban Radial All-Steel Pertama",
    description:
      "Double Coin memelopori pengembangan ban radial all-steel pertama untuk truk di Tiongkok.",
  },
  {
    year: "1992",
    title: "Perusahaan Ban Terdaftar Pertama",
    description:
      "Double Coin menjadi perusahaan ban pertama di Tiongkok yang menerbitkan saham A/B, terdaftar sebagai Shanghai Tyre & Rubber Co. Ltd.",
  },
  {
    year: "2002",
    title: "Ban Radial OTR Pertama",
    description:
      "Double Coin mencapai terobosan dengan ban radial all-steel OTR (Off-The-Road) pertama di Tiongkok.",
  },
  {
    year: "2003",
    title: "Ban Radial Industri Pertama",
    description:
      "Produksi ban radial all-steel industri pertama di Tiongkok menegaskan kontribusi awal Double Coin pada sektor industri.",
  },
  {
    year: "2011",
    title: "Ekspansi Basis Produksi",
    description:
      "Basis produksi baru didirikan di Anhui, menandai masuknya perusahaan ke pasar ban kendaraan penumpang.",
  },
  {
    year: "2016",
    title: "Pabrik Thailand",
    description:
      "Pembangunan pabrik Double Coin di Thailand merupakan tonggak penting dalam strategi ekspansi internasional perusahaan.",
  },
  {
    year: "Sekarang",
    title: "Pemimpin Global",
    description:
      "Double Coin terus memimpin di ban truk, bus, industri, dan OTR, dengan kehadiran di lebih dari 100 negara dan menjadi mitra OEM untuk CIMC, Yutong, Volvo, Caterpillar dan 30+ produsen lainnya.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-dc-yellow" />
            <span className="text-dc-dark text-sm font-semibold tracking-wider uppercase">
              Perjalanan Kami
            </span>
            <div className="w-8 h-px bg-dc-yellow" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground font-serif text-balance">
            Sejarah Double Coin
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Hampir satu abad inovasi dan keunggulan dalam industri ban
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8 md:gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative md:flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-dc-yellow/30 transition-colors">
                    <span className="text-dc-yellow-dark font-bold text-2xl font-serif">{m.year}</span>
                    <h3 className="text-foreground font-bold text-lg mt-2 mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>

                {/* Dot - desktop only */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dc-yellow border-4 border-background" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
