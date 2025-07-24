"use client"

import { useEffect, useState, useRef } from "react"

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    market: 0,
    chains: 0,
    security: 0,
    speed: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers when section becomes visible
          animateNumbers()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedNumbers({
        market: Math.floor(3.2 * easeOut * 10) / 10,
        chains: Math.floor(20 * easeOut),
        security: Math.floor(99.8 * easeOut * 10) / 10,
        speed: Math.floor(0.8 * easeOut * 10) / 10,
      })

      currentStep++
      if (currentStep > steps) {
        clearInterval(interval)
        setAnimatedNumbers({
          market: 3.2,
          chains: 20,
          security: 99.8,
          speed: 0.8,
        })
      }
    }, stepDuration)
  }

  const storySteps = [
    {
      number: 1,
      title: "Multi-Chain Fragmentation",
      description:
        "Today's crypto users manage assets across multiple chains, protocols, and interfaces. This creates complexity, security risks, and missed opportunities for optimal portfolio management.",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔗",
    },
    {
      number: 2,
      title: "AI-Powered Unification",
      description:
        "Hyperion aggregates your entire portfolio across chains, analyzing risk and opportunities with advanced AI to provide intelligent rebalancing suggestions and insights.",
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
    },
    {
      number: 3,
      title: "Internet Identity Security",
      description:
        "Built on Internet Computer Protocol with Web3-native authentication, enterprise security, and the performance needed for institutional adoption.",
      gradient: "from-green-500 to-teal-500",
      icon: "🛡️",
    },
  ]

  const stats = [
    {
      value: `$${animatedNumbers.market}T`,
      label: "Total Crypto Market",
      color: "blue-400",
      bgGradient: "from-blue-500/20 to-blue-600/10",
      icon: "💰",
    },
    {
      value: `${animatedNumbers.chains}+`,
      label: "Supported Chains",
      color: "purple-400",
      bgGradient: "from-purple-500/20 to-purple-600/10",
      icon: "⛓️",
    },
    {
      value: `${animatedNumbers.security}%`,
      label: "Security Score",
      color: "green-400",
      bgGradient: "from-green-500/20 to-green-600/10",
      icon: "🔒",
    },
    {
      value: `${animatedNumbers.speed}s`,
      label: "Execution Speed",
      color: "cyan-400",
      bgGradient: "from-cyan-500/20 to-cyan-600/10",
      icon: "⚡",
    },
  ]

  return (
    <section ref={sectionRef} id="story" className="relative z-10 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-4 h-4 border-2 border-purple-400/20 rotate-12 animate-bounce" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Enhanced Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-6 py-3 mb-8 group hover:border-blue-400/50 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-semibold tracking-wide">OUR STORY</span>
              <div className="ml-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">📖</div>
            </div>

            {/* Enhanced Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight">
              <span className="block">Reimagining</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Portfolio Management
              </span>
              <span className="block">for Web3</span>
            </h2>

            {/* Enhanced Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 lg:mb-12 leading-relaxed font-light">
              Traditional finance is fragmented, opaque, and exclusive. We're building the future where anyone can
              access institutional-grade portfolio management tools powered by AI and secured by Internet Computer
              Protocol.
            </p>

            {/* Enhanced Story Steps */}
            <div className="space-y-6 lg:space-y-8">
              {storySteps.map((step, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  <div className="flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
                    {/* Enhanced Number Badge */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <span className="text-white text-lg lg:text-xl font-bold">{step.number}</span>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-300 animate-pulse`}
                      />

                      {/* Floating Icon */}
                      <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-base lg:text-lg transition-all duration-300">
                        {step.description}
                      </p>

                      {/* Interactive Arrow */}
                      <div className="flex items-center mt-4 text-gray-500 group-hover:text-white transition-all duration-300">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Main Stats Container */}
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-2xl rounded-3xl lg:rounded-4xl p-6 lg:p-8 xl:p-10 border border-gray-700/50 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8 lg:mb-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Platform Metrics</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      {/* Stat Card */}
                      <div
                        className={`bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 xl:p-8 text-center border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl overflow-hidden`}
                      >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl lg:rounded-3xl" />

                        {/* Icon */}
                        <div className="text-2xl lg:text-3xl mb-2 lg:mb-3 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          {stat.icon}
                        </div>

                        {/* Value */}
                        <div
                          className={`text-2xl lg:text-3xl xl:text-4xl font-black text-${stat.color} mb-2 lg:mb-3 group-hover:text-white transition-all duration-300 relative z-10`}
                        >
                          {stat.value}
                        </div>

                        {/* Label */}
                        <div className="text-gray-300 group-hover:text-white text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 relative z-10">
                          {stat.label}
                        </div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
                        </div>
                      </div>

                      {/* External Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl lg:rounded-3xl blur-xl -z-10`}
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 lg:mt-10 text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/30 rounded-full px-6 py-3 hover:border-gray-500/50 transition-all duration-300 group cursor-pointer">
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium mr-2">
                      Real-time data
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}