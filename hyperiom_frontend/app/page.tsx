"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const blockchainLogos = [
  { symbol: "BTC", name: "Bitcoin", src: "/bitcoin-logo-svgrepo-com.svg" },
  { symbol: "ETH", name: "Ethereum", src: "/eth-svgrepo-com.svg" },
  { symbol: "SOL", name: "Solana", src: "/solana-svgrepo-com.svg" },
  { symbol: "ICP", name: "Internet Computer", src: "/icp-svgrepo-com.svg" },
  // Add some variety by repeating the available logos
  { symbol: "BTC", name: "Bitcoin", src: "/bitcoin-logo-svgrepo-com.svg" },
  { symbol: "ETH", name: "Ethereum", src: "/eth-svgrepo-com.svg" },
  { symbol: "SOL", name: "Solana", src: "/solana-svgrepo-com.svg" },
  { symbol: "ICP", name: "Internet Computer", src: "/icp-svgrepo-com.svg" },
];

interface FallingLogo {
  id: number;
  symbol: string;
  name: string;
  src: string;
  x: number;
  y: number;
  speed: number;
  size: number;
}

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const [fallingLogos, setFallingLogos] = useState<FallingLogo[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Initialize falling logos
    const initialLogos: FallingLogo[] = [];
    for (let i = 0; i < 20; i++) {
      const randomLogo = blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)];
      initialLogos.push({
        id: i,
        symbol: randomLogo.symbol,
        name: randomLogo.name,
        src: randomLogo.src,
        x: Math.random() * window.innerWidth,
        y: -50 - Math.random() * 200,
        speed: 0.3 + Math.random() * 1.5,
        size: 32 + Math.random() * 24, // Larger size for better visibility
      });
    }
    setFallingLogos(initialLogos);
    
    // Show content after delay
    setTimeout(() => setShowContent(true), 800);
  }, []);

  useEffect(() => {
    const animateLogos = () => {
      setFallingLogos(prevLogos => 
        prevLogos.map(logo => ({
          ...logo,
          y: logo.y + logo.speed,
          // Reset when logo falls off screen
          ...(logo.y > window.innerHeight + 50 && {
            y: -50 - Math.random() * 200,
            x: Math.random() * window.innerWidth,
            ...blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)],
            size: 32 + Math.random() * 24,
          })
        }))
      );
    };

    const interval = setInterval(animateLogos, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {fallingLogos.map(logo => (
          <div
            key={logo.id}
            className="absolute transition-all duration-75 opacity-30"
            style={{
              left: `${logo.x}px`,
              top: `${logo.y}px`,
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              transform: `rotate(${logo.y * 0.05}deg)`,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.size}
              height={logo.size}
              className="w-full h-full object-contain filter brightness-150"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="text-2xl font-bold text-white">Hyperion</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#story" className="text-gray-300 hover:text-white transition-colors">Our Story</a>
          <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
          <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
        </div>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero Content */}
        <div className="text-center mb-16 max-w-5xl">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-full px-6 py-2 mb-8">
            <span className="text-green-400 text-sm mr-2">●</span>
            <span className="text-gray-300 text-sm">Now Live on Internet Computer Protocol</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Wealth Management
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 leading-relaxed">
            AI-powered, chain-agnostic portfolio management that transforms 
            <br className="hidden md:block" />
            how you interact with decentralized finance.
          </p>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Built on Internet Computer Protocol with Vertex AI integration, Chain Key cryptography, 
            and zero-knowledge privacy. Experience institutional-grade wealth management 
            reimagined for the decentralized future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Start Managing Wealth
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="px-10 py-4 border border-gray-600 rounded-xl text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the Future of Finance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hyperion combines cutting-edge AI, blockchain technology, and institutional-grade security 
              to deliver unparalleled wealth management capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Driven Intelligence</h3>
              <p className="text-gray-400 leading-relaxed">
                Vertex AI powers predictive analytics, risk assessment, and portfolio optimization with 
                institutional-grade precision. Our machine learning models analyze market trends, 
                predict volatility, and execute optimal strategies in real-time.
              </p>
            </div>
            
            <div className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">True Cross-Chain</h3>
              <p className="text-gray-400 leading-relaxed">
                Native Chain Key integration enables atomic transactions across 20+ blockchains 
                without bridges or wrapped assets. Execute complex strategies spanning Bitcoin, 
                Ethereum, Solana, and more from a single interface.
              </p>
            </div>
            
            <div className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Privacy-First Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Zero-knowledge proofs and Internet Identity protect your financial footprint while 
                enabling seamless interactions. Your data remains encrypted and private, 
                with institutional-grade security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Story Section */}
      <section id="story" className="relative z-10 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-400 text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Reimagining Wealth Management for Web3
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Traditional finance is fragmented, opaque, and exclusive. We're building the future 
                where anyone can access institutional-grade wealth management tools powered by AI 
                and secured by blockchain technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fragmented Ecosystem</h4>
                    <p className="text-gray-400">
                      Today's crypto users manage assets across multiple chains, protocols, and interfaces. 
                      This creates complexity, security risks, and missed opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Unification</h4>
                    <p className="text-gray-400">
                      Hyperion aggregates your entire portfolio across chains, analyzing risk and 
                      opportunities with AI to execute optimal strategies automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Institutional Grade</h4>
                    <p className="text-gray-400">
                      Built on Internet Computer Protocol with enterprise security, compliance features, 
                      and the performance needed for institutional adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">$3.2T</div>
                    <div className="text-gray-300 text-sm">Total Crypto Market</div>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                    <div className="text-gray-300 text-sm">Supported Chains</div>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                    <div className="text-gray-300 text-sm">Security Score</div>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">0.8s</div>
                    <div className="text-gray-300 text-sm">Execution Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on Internet Computer Protocol with enterprise-grade infrastructure 
              and institutional security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Vertex AI</h4>
              <p className="text-gray-400 text-sm">Advanced machine learning for portfolio optimization</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">∞</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Internet Computer</h4>
              <p className="text-gray-400 text-sm">Web3 infrastructure with unlimited scalability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🔐</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Chain Key</h4>
              <p className="text-gray-400 text-sm">Native cross-chain transactions without bridges</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">ZK</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Zero Knowledge</h4>
              <p className="text-gray-400 text-sm">Privacy-preserving authentication and transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Wealth?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Join the future of decentralized finance. Experience AI-powered portfolio management 
            with institutional-grade security and true cross-chain capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="group px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Launch Hyperion
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="px-12 py-4 border border-gray-600 rounded-xl text-white font-bold text-lg hover:bg-gray-800 transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold text-white">Hyperion</span>
            </div>
            
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 Hyperion. Built on Internet Computer Protocol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}