"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const stats = [
  { value: 95, suffix: "+", label: "Tahun Pengalaman" },
  { value: 30, suffix: "+", label: "Mitra OEM" },
  { value: 100, suffix: "+", label: "Negara Distribusi" },
  { value: 1929, suffix: "", label: "Didirikan" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-3xl md:text-5xl font-bold text-dc-yellow font-serif">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/factory.jpg"
          alt="Double Coin Factory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dc-dark/85 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white font-serif text-balance mb-4">
            Dipercaya di Seluruh Dunia
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto text-pretty">
            Hampir satu abad pengalaman menghasilkan ban berkualitas tinggi yang diakui secara global.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
