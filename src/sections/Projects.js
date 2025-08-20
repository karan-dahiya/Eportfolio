'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { image } from 'framer-motion/client'

const PROJECTS = [
  {
    title: 'WooWoo Network',
    description: 'Developed a fully responsive web platform that connects clients with nearby service providers. Built separate dashboards for clients and healers: clients can create accounts and list their services, while healers can seamlessly book and pay for appointments. Implemented MySQL for database management and integrated Stripe for secure payment processing. Designed the UI/UX in Figma for sponsor approval, built the front end with React and the back end with Node.js, and deployed the entire solution on Amazon Web Services (AWS) for scalable, reliable hosting.',
    tech: ['React', 'Node.js', 'MySql', 'Stripe', 'AWS', 'Figma'],
    github: 'https://github.com/Woowoonetwork/WooWooNetwork-main/tree/dev',
    live: 'http://woowoo-client.s3-website.us-east-2.amazonaws.com/',
    image: '/images/project/woowoo/woowoodesktop.png',
    video: '/images/project/woowoo/woowoodemo.mp4',
    hasVideo: true
  },
           {
      title: 'Robo-Bot 3D Game',
      description: 'Built in Unity (C#) featuring a robot navigating a space-themed world to collect treasure boxes. Implemented combat mechanics, health system, custom sound effects, and polished graphics to deliver an engaging gameplay experience. Clone the Git repository to play the game.',
      tech: ['C#', 'Unity', 'Git','GitHub Desktop' ],
      github: 'https://github.com/karan-dahiya/FinalProject',
      live: null,
      image: '/images/project/robomax/robomax.png',
      video: '/images/project/robomax/robomax.mp4',
      hasVideo: true
    },
         {
       title: 'Tetris Game',
       description: 'Developed a C++ implementation of the classic Tetris, demonstrating efficient programming and game design principles. Features include smooth graphics, intuitive keyboard controls, scoring system (+100 per line clear), and robust error handling for seamless gameplay. Clone the Git repository to play the game.',
       tech: ['C++' ],
       github: 'https://github.com/karan-dahiya/Tetris-Game',
       live: null,
       image: '/images/project/tetris/tetris.png',
       video: '/images/project/tetris/tetris.mp4',
       hasVideo: true
     }
]

export default function Projects() {
  const [videoStates, setVideoStates] = useState({})
  const [inViewStates, setInViewStates] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  const videoRefs = useRef({})
  const projectRefs = useRef({})

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectIndex = entry.target.dataset.projectIndex
          setInViewStates(prev => ({
            ...prev,
            [projectIndex]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.5 }
    )

    // Observe all project elements
    Object.values(projectRefs.current).forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    PROJECTS.forEach((project, index) => {
      if (project.hasVideo && inViewStates[index]) {
        // Show image for 2 seconds, then switch to video
        const delay = 2000
        const timer = setTimeout(() => {
          // On mobile, only show video if it's not too large
          if (!isMobile || window.navigator.connection?.effectiveType !== 'slow') {
            // Set only this project to show video, pause all others
            setVideoStates(prev => {
              const newStates = {}
              PROJECTS.forEach((_, i) => {
                newStates[i] = i === index ? true : false
              })
              return newStates
            })
          }
        }, delay)

        return () => clearTimeout(timer)
      } else if (!inViewStates[index]) {
        setVideoStates(prev => ({
          ...prev,
          [index]: false
        }))
      }
    })
  }, [inViewStates, isMobile])

  useEffect(() => {
    PROJECTS.forEach((project, index) => {
      const videoRef = videoRefs.current[index]
      if (videoRef) {
        if (inViewStates[index] && videoStates[index]) {
          // Add error handling and mobile optimization
          const playPromise = videoRef.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log('Video autoplay failed:', error)
              // Fallback: show image instead of video on mobile
              setVideoStates(prev => ({
                ...prev,
                [index]: false
              }))
            })
          }
        } else {
          // Pause and reset video when not active
          videoRef.pause()
          videoRef.currentTime = 0
        }
      }
    })
  }, [inViewStates, videoStates])

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
             ref={(el) => {
               projectRefs.current[index] = el
             }}
             data-project-index={index}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full"
           >
                         <div className="aspect-video bg-neutral-100 relative overflow-hidden">
               {project.hasVideo ? (
                 <>
                   {!videoStates[index] && (
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
                   {videoStates[index] && (
                     <video
                       ref={(el) => {
                         videoRefs.current[index] = el
                       }}
                       className="w-full h-full object-cover"
                       loop
                       muted
                       playsInline
                       preload="metadata"
                       poster={project.image}
                       onError={() => {
                         console.log('Video failed to load, showing image instead')
                         setVideoStates(prev => ({
                           ...prev,
                           [index]: false
                         }))
                       }}
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
                 {project.live && (
                   <a href={project.live} className="flex items-center gap-2 text-sm hover:text-brand-600">
                     <ExternalLink size={16} />
                     Live Demo
                   </a>
                 )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
