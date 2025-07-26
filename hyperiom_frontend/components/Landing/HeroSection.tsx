"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  showContent: boolean
}

export default function HeroSection({ showContent }: HeroSectionProps) {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-18 sm:pt-22 lg:pt-24 overflow-hidden transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * -0.01}px`,
            bottom: `${mousePosition.y * -0.01}px`,
            transform: "translate(50%, 50%)",
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rotate-45 animate-spin-slow opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 border-2 border-purple-400 rotate-12 animate-bounce opacity-40" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" />
        <div className="absolute bottom-20 right-20 w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
      </div>

      <div className="text-center max-w-6xl relative z-10">
        {/* Status Badge with Enhanced Design */}
        <div className="inline-flex items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full px-8 py-3 mb-12 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
          <div className="relative">
            <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
            <span className="relative block w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          </div>
          <span className="text-gray-200 text-sm font-medium tracking-wide">
            Now Live on Internet Computer Protocol
          </span>
          <div className="ml-3 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        </div>

        {/* Main Heading with Enhanced Typography - BOTH LINES NOW ANIMATED */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
              Chain-Agnostic
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Portfolio Manager
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Description Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 group">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse"></div>
              <h3 className="text-lg font-semibold text-white">Multi-Chain Portfolio Tracking</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Monitor assets across Ethereum, Bitcoin, Solana, and ICP with real-time balance updates and comprehensive
              portfolio insights.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 group">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
              <h3 className="text-lg font-semibold text-white">AI-Powered Risk Analysis</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Get intelligent rebalancing suggestions and risk assessments powered by on-chain AI models and Internet
              Identity authentication.
            </p>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              Launch Portfolio Manager
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button className="group px-12 py-5 bg-gray-900/50 backdrop-blur-xl border border-gray-600/50 rounded-2xl text-white font-bold text-lg hover:bg-gray-800/70 hover:border-gray-500 transition-all duration-500 hover:shadow-xl">
            <span className="flex items-center">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 010 5H9m4.5-5H15a2.5 2.5 0 010 5h-1.5m-5-5v5m5-5v5"
                />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm mb-6">Trusted by forward-thinking investors</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Multi-Chain Support</span>
            </div>
            <div className="w-1 h-4 bg-gray-700"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-gray-400 text-sm">Internet Identity</span>
            </div>
            <div className="w-1 h-4 bg-gray-700"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <span className="text-gray-400 text-sm">AI-Driven Insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
