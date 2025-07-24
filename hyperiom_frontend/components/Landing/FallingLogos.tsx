"use client";

import { useState, useEffect } from "react";

const blockchainLogos = [
  { symbol: "₿", name: "Bitcoin", color: "#F7931A", glow: "shadow-orange-500/20" },
  { symbol: "Ξ", name: "Ethereum", color: "#627EEA", glow: "shadow-blue-500/20" },
  { symbol: "◎", name: "Solana", color: "#9945FF", glow: "shadow-purple-500/20" },
  { symbol: "∞", name: "Internet Computer", color: "#ED1E79", glow: "shadow-pink-500/20" },
  { symbol: "⬟", name: "Polygon", color: "#8247E5", glow: "shadow-indigo-500/20" },
  { symbol: "▲", name: "Avalanche", color: "#E84142", glow: "shadow-red-500/20" },
  { symbol: "⬢", name: "Chainlink", color: "#375BD2", glow: "shadow-blue-600/20" },
  { symbol: "₳", name: "Cardano", color: "#0033AD", glow: "shadow-blue-700/20" },
  { symbol: "●", name: "Polkadot", color: "#E6007A", glow: "shadow-pink-600/20" },
  { symbol: "⚛", name: "Cosmos", color: "#2E3148", glow: "shadow-gray-500/20" },
];

interface FallingLogo {
  id: number;
  symbol: string;
  name: string;
  color: string;
  glow: string;
  x: number;
  y: number;
  speed: number;
  size: number;
  rotation: number;
  opacity: number;
}

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export default function FallingLogos() {
  const [fallingLogos, setFallingLogos] = useState<FallingLogo[]>([]);
  const [floatingParticles, setFloatingParticles] = useState<FloatingParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize falling logos
    const initialLogos: FallingLogo[] = [];
    for (let i = 0; i < 25; i++) {
      const randomLogo = blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)];
      initialLogos.push({
        id: i,
        symbol: randomLogo.symbol,
        name: randomLogo.name,
        color: randomLogo.color,
        glow: randomLogo.glow,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: -50 - Math.random() * 300,
        speed: 0.5 + Math.random() * 2,
        size: 18 + Math.random() * 16,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.2,
      });
    }
    setFallingLogos(initialLogos);

    // Initialize floating particles
    const initialParticles: FloatingParticle[] = [];
    const colors = ['#3B82F6', '#8B5CF6', '#06D6A0', '#FFD60A', '#FF006E'];
    for (let i = 0; i < 40; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: 2 + Math.random() * 4,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
    setFloatingParticles(initialParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateLogos = () => {
      setFallingLogos(prevLogos => 
        prevLogos.map(logo => ({
          ...logo,
          y: logo.y + logo.speed,
          rotation: logo.rotation + 0.5,
          x: logo.x + Math.sin(logo.y * 0.01) * 0.5,
          // Reset when logo falls off screen
          ...(logo.y > (typeof window !== 'undefined' ? window.innerHeight : 800) + 50 && {
            y: -50 - Math.random() * 300,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            ...blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)]
          })
        }))
      );

      setFloatingParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          // Bounce off edges
          speedX: particle.x <= 0 || particle.x >= (typeof window !== 'undefined' ? window.innerWidth : 1200) 
            ? -particle.speedX : particle.speedX,
          speedY: particle.y <= 0 || particle.y >= (typeof window !== 'undefined' ? window.innerHeight : 800)
            ? -particle.speedY : particle.speedY,
        }))
      );
    };

    const interval = setInterval(animateLogos, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div 
          className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite',
        }}></div>
      </div>

      {/* Falling Logos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {fallingLogos.map(logo => (
          <div
            key={logo.id}
            className={`absolute font-bold transition-all duration-75 drop-shadow-lg ${logo.glow}`}
            style={{
              left: `${logo.x}px`,
              top: `${logo.y}px`,
              fontSize: `${logo.size}px`,
              color: logo.color,
              opacity: logo.opacity,
              transform: `rotate(${logo.rotation}deg)`,
              textShadow: `0 0 20px ${logo.color}40`,
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))',
            }}
          >
            {logo.symbol}
          </div>
        ))}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </>
  );
}