'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Aspiring Full‑Stack Developer & Data Enthusiast
        </h1>
        <p className="text-neutral-600">
  Hi, I&apos;m Karan Dahiya,
  I build web and mobile applications, explore game development, and work with data analytics. I thrive on learning, solving challenges, and growing as a developer in the ever-evolving tech world.
</p>



        <div className="flex gap-3">
          <a href="#projects" className="px-4 py-2 bg-brand-500 text-white rounded-xl">View Projects</a>
          <a href="#contact" className="px-4 py-2 border rounded-xl">Contact Me</a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.1 }} 
        className="rounded-xl border p-3"
      >
       <div className="relative w-full h-[400px] bg-neutral-100 rounded-xl overflow-hidden">
  <Image
    src="/images/profilepicture/myphoto.jpg"
    alt="My Photo"
    fill
    style={{ objectFit: 'cover' }} // scales and fills container
  />
</div>

      </motion.div>
    </div>
  )
}
