"use client"

import { useEffect, useState, useRef } from "react"

export default function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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

  const technologies = [
    {
      icon: "🤖",
      symbol: "AI",
      title: "Vertex AI",
      description: "Advanced machine learning for portfolio optimization and predictive analytics",
      gradient: "from-blue-500 to-purple-600",
      bgGlow: "blue-500/20",
      delay: "0ms",
    },
    {
      icon: "∞",
      symbol: "∞",
      title: "Internet Computer",
      description: "Web3 infrastructure with unlimited scalability and enterprise performance",
      gradient: "from-purple-500 to-pink-600",
      bgGlow: "purple-500/20",
      delay: "200ms",
    },
    {
      icon: "🔐",
      symbol: "⛓️",
      title: "Chain Key",
      description: "Native cross-chain transactions without bridges or wrapped tokens",
      gradient: "from-green-500 to-teal-600",
      bgGlow: "green-500/20",
      delay: "400ms",
    },
    {
      icon: "🛡️",
      symbol: "ZK",
      title: "Zero Knowledge",
      description: "Privacy-preserving authentication and confidential transactions",
      gradient: "from-yellow-500 to-orange-600",
      bgGlow: "yellow-500/20",
      delay: "600ms",
    },
  ]

  return (
    <section ref={sectionRef} id="technology" className="relative z-10 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Mouse-following orb */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-4 h-4 border-2 border-purple-400/20 rotate-12 animate-bounce" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" />
        <div className="absolute bottom-20 left-20 w-8 h-1 bg-gradient-to-r from-green-400/30 to-teal-400/30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Enhanced Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full px-6 py-3 mb-8 group hover:border-gray-500/70 transition-all duration-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">TECHNOLOGY STACK</span>
            <div className="ml-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">⚡</div>
          </div>

          {/* Enhanced Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight">
            <span className="block">Powered by</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Cutting-Edge Technology
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Built on Internet Computer Protocol with enterprise-grade infrastructure, institutional security standards,
            and next-generation Web3 capabilities.
          </p>
        </div>

        {/* Enhanced Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: tech.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Enhanced Glassmorphism */}
              <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl text-center overflow-hidden">
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${tech.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-xl`}
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-6 lg:mb-8">
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${tech.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      {/* Main Icon */}
                      <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-all duration-300">
                        {tech.symbol}
                      </span>
                    </div>

                    {/* Icon Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl lg:rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse`}
                    />

                    {/* Floating Emoji */}
                    <div className="absolute -top-2 -right-2 text-xl sm:text-2xl opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500">
                      {tech.icon}
                    </div>

                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" />
                    <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-150" />
                  </div>

                  {/* Enhanced Typography */}
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {tech.title}
                  </h4>

                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg transition-all duration-300">
                    {tech.description}
                  </p>

                  {/* Interactive Progress Bar */}
                  <div className="mt-6 lg:mt-8">
                    <div className="w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-1000 ${
                          hoveredCard === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Interactive Arrow */}
                  <div className="flex items-center justify-center mt-4 lg:mt-6 text-gray-500 group-hover:text-white transition-all duration-300">
                    <span className="text-xs sm:text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Learn more
                    </span>
                    <svg
                      className="w-4 h-4 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Card Number Indicator */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 text-xs sm:text-sm font-bold group-hover:bg-white/20 group-hover:text-white/80 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl blur-2xl -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-600/30 rounded-full px-8 py-4 hover:border-gray-500/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  ∞
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  🔐
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  ZK
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                Enterprise-grade infrastructure meets Web3 innovation
              </span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}