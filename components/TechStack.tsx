"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FaPython, FaDocker, FaDatabase, FaCloud } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiFastapi, SiPytorch, SiHuggingface, SiLangchain } from "react-icons/si"

const techStack = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: { light: "#000000", dark: "#FFFFFF" } },
  { name: "Database", icon: FaDatabase, color: "#336791" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "HuggingFace", icon: SiHuggingface, color: "#FFD21E" },
  { name: "LangChain", icon: SiLangchain, color: { light: "#000000", dark: "#FFFFFF" } },
  { name: "Cloud", icon: FaCloud, color: "#00ADEF" },
]

const TechStack = () => {
  const { theme } = useTheme()

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon
            const iconColor =
              typeof tech.color === "string"
                ? tech.color
                : theme === "dark"
                ? tech.color.dark
                : tech.color.light

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg"
              >
                <IconComponent className="text-6xl mb-2" style={{ color: iconColor }} />
                <span className="text-sm text-center font-medium">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
