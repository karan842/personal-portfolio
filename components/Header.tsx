"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const menuItems = ["Home", "Experience", "Projects", "Tech Stack", "Contact"]

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/80 backdrop-blur-md rounded-full shadow-lg py-2 px-4 flex items-center justify-center w-full max-w-3xl mx-auto"
      >
        <nav className="flex items-center justify-center space-x-4 md:space-x-6 text-sm md:text-base">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors text-sm md:text-base"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </motion.header>
    </div>
  )
}

export default Header

