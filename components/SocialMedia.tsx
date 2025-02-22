"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaInstagram } from "react-icons/fa"

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/karanshingde" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/karanshingde" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/karanshingde" },
  { name: "Medium", icon: FaMedium, url: "https://medium.com/@karanshingde" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/karanshingde" },
]

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-4xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <social.icon />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMedia

