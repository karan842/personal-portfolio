"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-500 dark:text-blue-400">Karan Shingde</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          <span className="text-teal-500 dark:text-teal-400">AI Engineer</span> crafting intelligent systems
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
            className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      <BackgroundAnimation />
    </section>
  )
}

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500 dark:bg-blue-400 rounded-full opacity-10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            opacity: [0.1, 0.2, 0.4, 0.2, 0.1],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default Hero

