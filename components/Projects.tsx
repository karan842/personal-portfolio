"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot built with PyTorch and FastAPI.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    github: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "ML Pipeline",
    description: "End-to-end machine learning pipeline using Docker and MLflow.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    github: "https://github.com/yourusername/ml-pipeline",
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

