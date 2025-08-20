'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const PROJECTS = [
  {
    title: 'WooWoo Network',
    description: 'Developed a fully responsive web platform that connects clients with nearby service providers. Built separate dashboards for clients and healers: clients can create accounts and list their services, while healers can seamlessly book and pay for appointments. Implemented MySQL for database management and integrated Stripe for secure payment processing. Designed the UI/UX in Figma for sponsor approval, built the front end with React and the back end with Node.js, and deployed the entire solution on Amazon Web Services (AWS) for scalable, reliable hosting.Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MySql', 'Stripe', 'AWS', 'Figma'],
    github: 'https://github.com/Woowoonetwork/WooWooNetwork-main/tree/dev',
    live: 'http://woowoo-client.s3-website.us-east-2.amazonaws.com/',
    image: '/images/project/woowoo/woowoodesktop.png',
    video: '/images/project/woowoo/woowoodemo.mp4',
    hasVideo: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: '#',
    live: '#',
    image: '/images/project2.jpg',
    hasVideo: false
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.',
    tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    github: '#',
    live: '#',
    image: '/images/project3.jpg',
    hasVideo: false
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with modern web technologies, featuring responsive design and smooth animations.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    github: '#',
    live: '#',
    image: '/images/project4.jpg',
    hasVideo: false
  }
]

export default function Projects() {
  const [showVideo, setShowVideo] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef(null)
  const projectRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView && PROJECTS[0].hasVideo) {
      // Show image for 4 seconds, then switch to video
      const timer = setTimeout(() => {
        setShowVideo(true)
      }, 4000)

      return () => clearTimeout(timer)
    } else {
      setShowVideo(false)
    }
  }, [isInView])

  useEffect(() => {
    if (videoRef.current) {
      if (isInView && showVideo) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isInView, showVideo])

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Here are some of the projects I have worked on. Each project represents different skills and technologies.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            ref={index === 0 ? projectRef : null}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full"
          >
            <div className="aspect-video bg-neutral-100 relative overflow-hidden">
              {index === 0 && project.hasVideo ? (
                <>
                  {!showVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-opacity duration-500"
                      />
                    </div>
                  )}
                  {showVideo && (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-neutral-600">Project Screenshot</p>
                </div>
              )}
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
