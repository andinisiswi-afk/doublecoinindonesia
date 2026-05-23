import Image from "next/image"

export function PartnershipSection() {
  return (
    <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with Logo */}
        <div className="text-center">
          {/* Partnership Logo */}
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/partnership-logo.png"
              alt="Double Coin x PT Gabe Andalan Semesta Partnership"
              width={400}
              height={300}
              className="h-48 md:h-64 w-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dc-dark mb-4 text-balance">
            Global Expertise, Local Support
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto text-pretty">
            PT Gabe Andalan Semesta (GAS) adalah distributor resmi ban OTR dan Industrial Double Coin di Indonesia. 
            Dengan dukungan jaringan dealer terpercaya dan garansi terdepan, kami siap menjadi mitra andalan untuk kebutuhan ban industri Anda.
          </p>
        </div>
      </div>
    </section>
  )
}
