// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FallingLogo } from "../types";

// const blockchainLogos = [
//   { symbol: "BTC", name: "Bitcoin", src: "/bitcoin-logo-svgrepo-com.svg" },
//   { symbol: "ETH", name: "Ethereum", src: "/eth-svgrepo-com.svg" },
//   { symbol: "SOL", name: "Solana", src: "/solana-svgrepo-com.svg" },
//   { symbol: "ICP", name: "Internet Computer", src: "/icp-svgrepo-com.svg" },
//   // Add some variety by repeating the available logos
//   { symbol: "BTC", name: "Bitcoin", src: "/bitcoin-logo-svgrepo-com.svg" },
//   { symbol: "ETH", name: "Ethereum", src: "/eth-svgrepo-com.svg" },
//   { symbol: "SOL", name: "Solana", src: "/solana-svgrepo-com.svg" },
//   { symbol: "ICP", name: "Internet Computer", src: "/icp-svgrepo-com.svg" },
// ];

// export default function AnimatedBackground() {
//   const [fallingLogos, setFallingLogos] = useState<FallingLogo[]>([]);

//   useEffect(() => {
//     // Initialize falling logos
//     const initialLogos: FallingLogo[] = [];
//     for (let i = 0; i < 20; i++) {
//       const randomLogo = blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)];
//       initialLogos.push({
//         id: i,
//         symbol: randomLogo.symbol,
//         name: randomLogo.name,
//         src: randomLogo.src,
//         x: Math.random() * window.innerWidth,
//         y: -50 - Math.random() * 200,
//         speed: 0.3 + Math.random() * 1.5,
//         size: 32 + Math.random() * 24,
//       });
//     }
//     setFallingLogos(initialLogos);
//   }, []);

//   useEffect(() => {
//     const animateLogos = () => {
//       setFallingLogos(prevLogos => 
//         prevLogos.map(logo => ({
//           ...logo,
//           y: logo.y + logo.speed,
//           // Reset when logo falls off screen
//           ...(logo.y > window.innerHeight + 50 && {
//             y: -50 - Math.random() * 200,
//             x: Math.random() * window.innerWidth,
//             ...blockchainLogos[Math.floor(Math.random() * blockchainLogos.length)],
//             size: 32 + Math.random() * 24,
//           })
//         }))
//       );
//     };

//     const interval = setInterval(animateLogos, 16); // ~60fps
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Animated Background Logos */}
//       <div className="absolute inset-0 pointer-events-none">
//         {fallingLogos.map(logo => (
//           <div
//             key={logo.id}
//             className="absolute transition-all duration-75 opacity-30"
//             style={{
//               left: `${logo.x}px`,
//               top: `${logo.y}px`,
//               width: `${logo.size}px`,
//               height: `${logo.size}px`,
//               transform: `rotate(${logo.y * 0.05}deg)`,
//             }}
//           >
//             <Image
//               src={logo.src}
//               alt={logo.name}
//               width={logo.size}
//               height={logo.size}
//               className="w-full h-full object-contain filter brightness-150"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
//     </>
//   );
// }