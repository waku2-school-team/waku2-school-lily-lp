// src/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300">
      {/* 背景のオーロラエフェクト（パステルカラー） */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-70 blur-[60px]"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 60, -60, 0],
          opacity: [0.4, 0.8, 0.4],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-8 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="text-center text-gray-900 order-2 lg:order-1">
          <h1 className="text-4xl md:text-7xl font-bold hero-text">Welcome to Lily's Website</h1>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white order-1 lg:order-2">
          <Image 
            src="/images/prof.png" 
            alt="Lily's Avatar" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full blur-[10px] hover:blur-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
