"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  const navigationItems = [
    { name: "Portfolio", href: "#portfolio", icon: "📊" },
    { name: "AI Insights", href: "#insights", icon: "🤖" },
    { name: "Multi-Chain", href: "#multichain", icon: "🔗" },
    { name: "Security", href: "#security", icon: "🛡️" },
  ]

  return (
    <>
      <nav
        className={`fixed top-1 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20"
            : "bg-black/20 backdrop-blur-md border border-white/5"
        } rounded-2xl lg:rounded-3xl`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => router.push("/")}>
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-xl lg:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <span className="text-white font-black text-lg lg:text-xl drop-shadow-sm">H</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-xl lg:rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>

                {/* Floating particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 group-hover:animate-bounce"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  Hyperion
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 -mt-1">
                  PORTFOLIO MANAGER
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative group px-4 xl:px-6 py-2.5 xl:py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5"
                >
                  <span className="flex items-center space-x-2 relative z-10">
                    <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm xl:text-base">{item.name}</span>
                  </span>

                  {/* Animated underline */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500 rounded-full"></div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Desktop CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => router.push("/dashboard")}
                className="group relative px-6 xl:px-8 py-3 xl:py-3.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-xl xl:rounded-2xl text-white font-bold text-sm xl:text-base overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">📊</span>
                  Launch Portfolio
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-all duration-700"></div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2.5 text-white hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-white/10 group"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></div>
              </div>

              {/* Button glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-xl border-t border-white/10 mx-4 mb-4 rounded-2xl shadow-2xl">
            <div className="p-6 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-4 py-4 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="font-medium text-base">{item.name}</span>
                  <div className="flex-1"></div>
                  <svg
                    className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    router.push("/dashboard")
                  }}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-xl text-white font-bold text-base hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">📊</span>
                  <span>Launch Portfolio</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 sm:h-24 lg:h-28"></div>
    </>
  )
}