"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

export default function CTASection() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Mouse-following interactive orb */}
        <div
          className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 bg-blue-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-6 h-6 border-2 border-purple-400/20 rotate-12 animate-bounce" />
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-20 w-12 h-2 bg-gradient-to-r from-green-400/20 to-teal-400/20 animate-pulse" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Container with Enhanced Glassmorphism */}
        <div
          className={`relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-2xl rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-16 xl:p-20 border border-gray-700/50 shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl lg:rounded-4xl blur-xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Enhanced Badge */}
            <div
              className={`inline-flex items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full px-6 py-3 mb-8 lg:mb-12 group hover:border-gray-500/70 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wide">READY TO START</span>
              <div className="ml-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">🚀</div>
            </div>

            {/* Enhanced Heading */}
            <div
              className={`mb-8 lg:mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight">
                <span className="block">Ready to Transform</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Your Wealth?
                </span>
              </h2>

              {/* Decorative Line */}
              <div className="flex justify-center mb-6 lg:mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div
              className={`mb-12 lg:mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
                Join the future of decentralized finance. Experience AI-powered portfolio management with
                institutional-grade security and true cross-chain capabilities.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Enterprise Security</span>
                </div>
                <div className="w-1 h-4 bg-gray-700 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>AI-Powered Insights</span>
                </div>
                <div className="w-1 h-4 bg-gray-700 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span>Multi-Chain Support</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {/* Primary CTA Button */}
              <button
                onClick={() => router.push("/dashboard")}
                onMouseEnter={() => setHoveredButton("primary")}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative px-10 sm:px-12 lg:px-16 py-4 lg:py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-2xl lg:rounded-3xl text-white font-bold text-lg lg:text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95 w-full sm:w-auto"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-all duration-700"></div>

                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">🚀</span>
                  Launch Hyperion
                  <svg
                    className="ml-3 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-2xl lg:rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
              </button>

              {/* Secondary CTA Button */}
              <button
                onMouseEnter={() => setHoveredButton("secondary")}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative px-10 sm:px-12 lg:px-16 py-4 lg:py-5 bg-gray-900/50 backdrop-blur-xl border border-gray-600/50 rounded-2xl lg:rounded-3xl text-white font-bold text-lg lg:text-xl hover:bg-gray-800/70 hover:border-gray-500/70 transition-all duration-500 hover:shadow-xl w-full sm:w-auto overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl lg:rounded-3xl"></div>

                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Request Demo
                  <div className="ml-3 w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                </span>
              </button>
            </div>

            {/* Bottom Stats/Social Proof */}
            <div
              className={`mt-12 lg:mt-16 pt-8 border-t border-gray-700/50 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <p className="text-gray-500 text-sm mb-6">Trusted by forward-thinking investors worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$2.3T+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Total Market Cap</div>
                </div>
                <div className="w-1 h-8 bg-gray-700 hidden sm:block"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Supported Chains</div>
                </div>
                <div className="w-1 h-8 bg-gray-700 hidden sm:block"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements around the container */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 -left-2 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 -right-2 w-3 h-3 bg-green-400/20 rounded-full animate-ping delay-500"></div>
        </div>
      </div>
    </section>
  )
}