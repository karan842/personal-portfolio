"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led a team of developers in creating responsive web applications using React and Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Co.",
    period: "2018 - 2020",
    description: "Developed and maintained full-stack web applications using MERN stack.",
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

