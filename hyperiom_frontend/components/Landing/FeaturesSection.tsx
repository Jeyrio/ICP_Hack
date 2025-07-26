"use client"

import { useEffect, useState, useRef } from "react"

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      title: "Multi-Chain Portfolio Tracking",
      description:
        "Monitor assets across Ethereum, Bitcoin, Solana, and ICP with real-time balance updates. Track your entire portfolio from a single, unified dashboard with comprehensive analytics.",
      bgGlow: "blue-500/20",
      delay: "0ms",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      title: "AI-Powered Risk Analysis",
      description:
        "Advanced machine learning models provide intelligent rebalancing suggestions and risk assessments. Get personalized insights powered by on-chain AI and predictive analytics.",
      bgGlow: "purple-500/20",
      delay: "200ms",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-teal-500",
      title: "Internet Identity Security",
      description:
        "Web3-native authentication with Internet Identity ensures your portfolio remains secure and private. No passwords, no centralized accounts - just seamless, secure access.",
      bgGlow: "green-500/20",
      delay: "400ms",
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="relative z-10 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-6 h-6 border-2 border-purple-400/30 rotate-12 animate-bounce" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">CORE FEATURES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="block">Built for the Future of</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Decentralized Finance
            </span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Hyperion combines cutting-edge AI, multi-chain technology, and Internet Identity security to deliver
            unparalleled portfolio management capabilities.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: feature.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Enhanced Glassmorphism */}
              <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${feature.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl blur-xl`}
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-8">
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>

                    {/* Icon Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl lg:rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-300 animate-pulse`}
                    />

                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-150" />
                  </div>

                  {/* Enhanced Typography */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-base sm:text-lg transition-all duration-300">
                    {feature.description}
                  </p>

                  {/* Interactive Arrow */}
                  <div className="flex items-center mt-6 lg:mt-8 text-gray-500 group-hover:text-white transition-all duration-300">
                    <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 text-sm font-bold group-hover:bg-white/20 group-hover:text-white/80 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-3xl blur-2xl -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-600/30 rounded-full px-8 py-4 hover:border-gray-500/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                Ready to experience the future of portfolio management?
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
