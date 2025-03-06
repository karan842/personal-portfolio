"use client"

import { motion } from "framer-motion"
import { FaLightbulb, FaCode, FaChalkboardTeacher, FaGlobe, FaPencilAlt } from "react-icons/fa"

const services = [
  {
    title: "AI Consulting",
    description:
      "Expert AI consulting to identify opportunities, develop strategies, and implement AI technologies for business growth and efficiency.",
    icon: FaLightbulb,
  },
  {
    title: "Freelance AI Development",
    description:
      "Custom AI development services specializing in generative AI chatbots, machine learning pipelines, and intelligent automation.",
    icon: FaCode,
  },
  {
    title: "AI Career Mentoring",
    description:
      "Personalized career guidance in AI and tech to develop skills, build a portfolio, and make informed career decisions.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Digital Presence Setup",
    description:
      "Comprehensive services including SEO-optimized website development, content strategy, and digital marketing campaigns to boost your online presence.",
    icon: FaGlobe,
  },
  {
    title: "Technical Writing",
    description:
      "High-quality technical content, including in-depth articles and blogs on AI, ML, and emerging CS technologies.",
    icon: FaPencilAlt,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex-shrink-0 w-80 md:w-96"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="text-3xl text-blue-500 mr-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
