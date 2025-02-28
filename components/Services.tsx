"use client"

import { motion } from "framer-motion"
import { FaLightbulb, FaCode, FaChalkboardTeacher, FaGlobe, FaPencilAlt } from "react-icons/fa"

const services = [
  {
    title: "AI Consulting",
    description:
      "Empower your business with cutting-edge AI solutions. I provide expert consulting to help you identify opportunities, develop strategies, and implement AI technologies that drive growth and efficiency. From machine learning to natural language processing, I'll guide you through the AI landscape.",
    icon: FaLightbulb,
  },
  {
    title: "Freelance AI Development",
    description:
      "Bring your AI projects to life with custom development services. Specializing in generative AI chatbots, machine learning pipelines, and intelligent automation, I deliver tailored solutions that meet your specific needs. Let's turn your AI concepts into reality.",
    icon: FaCode,
  },
  {
    title: "AI Career Mentoring",
    description:
      "Navigate the exciting world of AI and tech with personalized career guidance. Whether you're just starting out or looking to advance, I offer mentorship to help you develop skills, build a strong portfolio, and make informed career decisions in the rapidly evolving field of AI.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Digital Presence Setup",
    description:
      "Establish a powerful online presence that sets you apart. I offer comprehensive services including SEO-optimized website development, content strategy, and digital marketing campaigns. Boost your visibility, engage your audience, and drive growth in the digital landscape.",
    icon: FaGlobe,
  },
  {
    title: "Technical Writing",
    description:
      "Enhance your brand with high-quality technical content. I provide in-depth articles and blogs on AI, ML, and emerging CS technologies. Whether it's platform-based content or technical documentation, I ensure engaging and informative writing tailored to your audience.",
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

