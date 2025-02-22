"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
        >
          <p className="text-lg mb-4">
            As an AI Engineer, I'm passionate about pushing the boundaries of what's possible with artificial
            intelligence. My expertise lies in developing cutting-edge Machine Learning systems and AI agents that solve
            complex problems and drive innovation.
          </p>
          <p className="text-lg">
            With a strong foundation in both AI technologies and software engineering, I bridge the gap between
            theoretical concepts and practical applications. I'm constantly exploring new advancements in the field and
            applying them to create intelligent solutions that make a real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

