'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    image: '/images/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: '#',
    live: '#',
    image: '/images/project2.jpg'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.',
    tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    github: '#',
    live: '#',
    image: '/images/project3.jpg'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with modern web technologies, featuring responsive design and smooth animations.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    github: '#',
    live: '#',
    image: '/images/project4.jpg'
  }
]

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different skills and technologies.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
              <p className="text-neutral-600">Project Screenshot</p>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-neutral-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-neutral-100 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="flex items-center gap-2 text-sm hover:text-brand-600">
                  <Github size={16} />
                  Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-sm hover:text-brand-600">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
