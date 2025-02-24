"use client"

import Image from "next/image"
import profilePic from "@/app/assets/karan-front.png"


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-black relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        <div className="bg-white dark:bg-black shadow-lg rounded-2xl p-6 md:p-10 max-w-5xl w-full flex flex-col md:flex-row items-center border border-gray-200 dark:border-gray-800">
          <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
            <Image 
              src={profilePic} 
              alt="Karan Shingde" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Hey there! I&apos;m <strong>Karan Shingde</strong>, an AI Engineer on a mission to build and launch game-changing AI products. I specialize in Machine Learning, AI Agents, LLMs, Python, and MLOps infrastructure.🚀
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              My journey into AI started in 2020 when I hit rock bottom—failing my first-year bachelor&apos;s exam with just 8/50 marks. Instead of giving up, I turned to YouTube and blogs, diving deep into ML. After facing 12 rejections, I finally landed my first job, and since then, there&apos;s been no looking back.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Today, I help startups bring AI ideas to life. I have experience in writing tech blogs, consulting on AI projects, freelancing in ML, and now even building websites for businesses to scale their online presence. I thrive on problem-solving and innovation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Beyond AI, you&apos;ll find me hiking, powerlifting, and diving into books. I&apos;m passionate about technology, startups, and making a real impact in the AI space. Let&apos;s connect and build something amazing! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About