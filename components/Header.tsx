"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = ["Home", "Experience", "Projects", "Tech Stack", "Contact"]

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t"
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block px-4 py-2 hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export default Header

