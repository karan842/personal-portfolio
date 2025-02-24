"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center"
        >
          Hi <WavingHand /> ,&nbsp;<span>I am&nbsp;</span>
          <span className="text-blue-500 dark:text-blue-400">Karan</span>

        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          <span className="text-green-500 dark:text-green-400">AI Engineer</span> crafting intelligent systems
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      <ParticleEffect />
    </section>
  );
};

// Waving hand component with animation
const WavingHand = () => {
  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0, 0],
  };

  return (
    <motion.span
      className="inline-block mx-2 transform-origin-bottom-right text-4xl md:text-5xl"
      animate={waveAnimation}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        repeatDelay: 1,
      }}
      style={{ originY: 0.7, originX: 0.7 }}
    >
      👋
    </motion.span>
  );
};

const ParticleEffect = () => {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const createParticles = () => {
        setParticles(
          [...Array(40)].map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }))
        );
      };

      createParticles();
      window.addEventListener("resize", createParticles);
      return () => window.removeEventListener("resize", createParticles);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 pointer-events-none"
    >
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full shadow-lg"
          initial={{ x: p.x, y: p.y }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Hero;