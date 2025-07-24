"use client"

import { useEffect, useState, useRef } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const footerLinks = [
    { name: "Privacy", href: "#privacy", icon: "🔒" },
    { name: "Terms", href: "#terms", icon: "📋" },
    { name: "Security", href: "#security", icon: "🛡️" },
    { name: "Docs", href: "#docs", icon: "📚" },
  ]

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦", gradient: "from-blue-400 to-blue-600" },
    { name: "Discord", href: "#", icon: "💬", gradient: "from-indigo-400 to-purple-600" },
    { name: "GitHub", href: "#", icon: "⚡", gradient: "from-gray-400 to-gray-600" },
    { name: "Telegram", href: "#", icon: "📱", gradient: "from-blue-400 to-cyan-500" },
  ]

  const quickLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "AI Insights", href: "#insights" },
    { name: "Multi-Chain", href: "#multichain" },
    { name: "Technology", href: "#technology" },
  ]

  return (
    <footer ref={footerRef} className="relative z-10 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-following orb */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-20 w-4 h-4 bg-blue-400/10 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 left-16 w-6 h-6 border border-purple-400/10 rotate-12 animate-bounce" />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      {/* Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4 mb-6 group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <span className="text-white font-black text-xl sm:text-2xl drop-shadow-sm">H</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>

                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 group-hover:animate-bounce"></div>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                    Hyperion
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 -mt-1">
                    PORTFOLIO MANAGER
                  </span>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-gray-400 leading-relaxed mb-6 text-base sm:text-lg max-w-md">
                The future of decentralized finance. AI-powered portfolio management with institutional-grade security
                on Internet Computer Protocol.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full px-4 py-2 mb-8 group hover:border-gray-500/70 transition-all duration-300">
                <div className="relative">
                  <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
                  <span className="relative block w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                </div>
                <span className="text-gray-300 text-sm font-medium">Live on ICP</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 flex items-center justify-center overflow-hidden"
                    onMouseEnter={() => setHoveredLink(`social-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Hover background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300`}
                    />

                    <span className="relative z-10 text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 transition-all duration-300 blur-lg -z-10`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="mr-2">🚀</span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                      onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="mr-2">📋</span>
                Legal & Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                      onMouseEnter={() => setHoveredLink(`legal-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="mr-3 text-sm opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30">
                <h5 className="text-sm font-semibold text-white mb-2">Need Help?</h5>
                <p className="text-xs text-gray-400 mb-3">Get support from our team</p>
                <a
                  href="mailto:support@hyperion.finance"
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="mr-2">📧</span>
                  support@hyperion.finance
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-gray-800/50 py-6 sm:py-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">© 2024 Hyperion. Built on Internet Computer Protocol.</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>All rights reserved</span>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>Made with ❤️ for Web3</span>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">ICP</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/30">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-xs text-gray-400 font-medium">AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-xs text-gray-400 font-medium">Web3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-400/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 left-4 w-4 h-4 bg-purple-400/10 rounded-full animate-bounce"></div>
    </footer>
  )
}