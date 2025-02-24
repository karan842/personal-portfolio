"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ["Home", "Experience", "Projects", "Tech Stack", "Contact"]

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 px-4">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/80 backdrop-blur-md rounded-full shadow-lg py-2 px-6 flex items-center w-full max-w-3xl mx-auto justify-between"
      >
        {/* Mobile Menu Button - Left side in Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-6 text-sm md:text-base">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").trim()}`} 
                className="hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Dark Mode Toggle - Right side in Mobile, Normal for Desktop */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 md:ml-2 ml-auto rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-4 right-4 bg-background/90 backdrop-blur-md shadow-lg rounded-lg py-4 flex flex-col items-center space-y-4"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").trim()}`} 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
