'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center pt-8 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="space-y-6"
      >
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 m-0">
            Hi, I&apos;m Karan Dahiya,
          </h1>
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-600">
            Full‑Stack Developer & Data Enthusiast
          </h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          I build web and mobile applications, explore game development, and work with data analytics. I thrive on learning, solving challenges, and growing as a developer in the ever-evolving tech world.
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 cursor-pointer font-medium shadow-sm hover:shadow-md"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-colors duration-200 cursor-pointer font-medium"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }} 
        className="flex justify-center md:justify-end"
      >
        <div className="relative w-full max-w-md h-[350px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/profilepicture/myphoto.jpg"
            alt="My Photo"
            fill
            style={{ objectFit: 'cover' }}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </div>
  )
}
