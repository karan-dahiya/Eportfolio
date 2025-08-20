'use client'
import { motion } from 'framer-motion'
import { Download, Briefcase, MapPin, Calendar, FileText, Award, Users, TrendingUp } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const EXPERIENCE = [
  {
    title: 'Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    description: 'Develop and maintain web applications using React, Node.js, and PostgreSQL. Lead a team of 3 developers and implement CI/CD pipelines.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Implemented automated testing increasing coverage to 85%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency XYZ',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Built responsive user interfaces and implemented modern web technologies. Collaborated with designers and backend developers.',
    achievements: [
      'Developed 10+ client websites using React and TypeScript',
      'Improved accessibility scores to 95+ on all projects',
      'Reduced bundle size by 30% through code splitting'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'StartupHub',
    location: 'New York, NY',
    period: '2021 - 2022',
    description: 'Assisted in developing features for a SaaS platform. Worked with JavaScript, React, and Firebase.',
    achievements: [
      'Built user authentication system with Firebase',
      'Created responsive dashboard components',
      'Participated in agile development processes'
    ]
  }
]

export default function Resume() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <div className="relative space-y-12" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full">
          <FileText className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Professional Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
          Resume & Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My professional journey and achievements across various roles and industries. 
          Download my detailed resume to learn more about my skills and experience.
        </p>
        
        {/* Video and Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <video
              ref={videoRef}
              src="/images/resume/gif.mp4"
              loop
              muted
              playsInline
              className="w-56 h-56"
              preload="metadata"
            />
          </div>
          
          <motion.a
            href="/images/resume/Karan_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Work Experience Section */}
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Work History</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Professional Experience</h3>
        </motion.div>
        
        <div className="space-y-8">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Timeline connector */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-200 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="ml-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {job.title}
                        </h4>
                        <p className="text-lg font-semibold text-purple-600 mt-1">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">{job.period}</span>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{job.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {job.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
