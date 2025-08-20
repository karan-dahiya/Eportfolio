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
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold m-0">
        Hi, I&apos;m Karan Dahiya,
        </h1>
        <h1 className="text-xl sm:text-4xl font-semibold">
        Full‑Stack Developer & Data Enthusiast
        </h1>
        <p className="text-neutral-600">
        
          I build web and mobile applications, explore game development, and work with data analytics. I thrive on learning, solving challenges, and growing as a developer in the ever-evolving tech world.
        </p>

        <div className="flex gap-3">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-4 py-2 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors duration-200 cursor-pointer"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.1 }} 
        className="rounded-xl border p-5"
      >
<div className="relative w-full h-[400px] bg-neutral-100 rounded-xl overflow-hidden"><Image
            src="/images/profilepicture/myphoto.jpg"
            alt="My Photo"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
