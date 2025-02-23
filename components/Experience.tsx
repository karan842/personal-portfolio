"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Engineer",
    company: "AiHello",
    period: "May 2024 - Present",
    description: "Leading remote team and projects at AiHello Brain. Building innovative and exciting AI projects.",
  },
  {
    title: "AI Researcher & Technical Writer - Freelance",
    company: "Superteams.ai",
    period: "Dec 2023 - May 2024",
    description: "Part of research team to publish articles on latest AI technologies including LLM, RAG, and GenAI.",
  },
  {
    title: "Machine Learning Engineer - Contract Based",
    company: "DataNNovite Sol",
    period: "Sep 2023 - May 2024",
    description: "Built on MLOps infrastructure and part of R&D team.",
  },
  {
    title: "Computer Vision Intern",
    company: "Netra AI",
    period: "Mar 2023 - Apr 2020",
    description: "Worked on Langchain projects, but got laid off!",
  },
  {
    title: "Data Science Intern",
    company: "Markytics",
    period: "Aug 2022 - Oct 2022",
    description: "Assisted team to build finance portal using Djagno and AWS.",
  },


  // Add more experiences as needed
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

