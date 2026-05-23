"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Beranda" },
  {
    href: "/produk",
    label: "Produk",
    children: [
      { href: "/produk#otr", label: "Ban OTR" },
      { href: "/produk#industrial", label: "Ban Industri" },
    ],
  },
  { href: "/pencarian-ban", label: "Pencarian Ban" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Hubungi Kami" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dc-yellow shadow-lg"
          : "bg-dc-yellow/95 backdrop-blur-md"
      )}
    >
      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-8 lg:mr-12">
            <Image
              src="/images/doublecoin-logo.png"
              alt="Double Coin Indonesia"
              width={180}
              height={45}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-semibold transition-colors rounded-md flex items-center gap-1",
                      pathname.startsWith("/produk")
                        ? "text-dc-dark bg-dc-dark/10"
                        : "text-dc-dark/80 hover:text-dc-dark hover:bg-dc-dark/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-dc-dark border border-dc-dark-surface rounded-lg shadow-xl py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-dc-yellow hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold transition-colors rounded-md",
                    pathname === link.href
                      ? "text-dc-dark bg-dc-dark/10"
                      : "text-dc-dark/80 hover:text-dc-dark hover:bg-dc-dark/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-dc-dark p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dc-yellow border-t border-dc-dark/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-semibold transition-colors rounded-md",
                      pathname.startsWith("/produk")
                        ? "text-dc-dark bg-dc-dark/10"
                        : "text-dc-dark/80 hover:text-dc-dark hover:bg-dc-dark/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-dc-dark/60 hover:text-dc-dark transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-semibold transition-colors rounded-md",
                    pathname === link.href
                      ? "text-dc-dark bg-dc-dark/10"
                      : "text-dc-dark/80 hover:text-dc-dark hover:bg-dc-dark/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 px-4">
              <a
                href="tel:+62211234567"
                className="flex items-center gap-2 text-dc-dark/60 text-sm"
              >
                <Phone className="h-4 w-4" />
                +62 21 1234 567
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
