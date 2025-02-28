"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Engineer",
    company: "AiHello",
    period: "May 2024 - Present",
    description: "Leading remote team and projects at AiHello Brain. Building innovative and exciting AI projects. ",
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
    description: "Built and fine-tuned ML models, managed MLOps for real estate predictions, developed RAG pipelines, contributed to open-source NLP & CV models, and trained YOLOv9 for document verification.",
  },
  
  {
    title: "Computer Vision Intern",
    company: "Netra AI",
    period: "Mar 2023 - Apr 2023",
    description: "Worked on Langchain and data analytics projects but got laid off!",
  },
  {
    title: "Data Science Intern",
    company: "Markytics",
    period: "Aug 2022 - Oct 2022",
    description: "Contributed to building a finance portal using Django and AWS. Transitioned out early to focus on AI and ML interests.",
  },
  {
    title: "Freelancer (Self-Employed)",
    company: "Independent – No Organizational Tie-up",
    period: "Present",
    description: "Helped PhD researchers build novel algorithms in data poisoning and federated learning. Developed ML chatbots as POCs for clients. Built SEO landing pages for local businesses.",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              {/* Company name styled like project tags */}
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black border border-gray-500 mt-2">
                {exp.company}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
