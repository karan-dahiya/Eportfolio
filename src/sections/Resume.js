'use client'
import { motion } from 'framer-motion'
import { Download, Briefcase, MapPin, Calendar, FileText, Award, Users, TrendingUp } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const EXPERIENCE = [
  {
    title: 'Security Professional',
    company: 'Paladin Security',
    location: 'Part-time',
    period: 'May 2024 - Present',
    description: 'Provide comprehensive security services including alarm monitoring, first aid assistance, and customer support to ensure safety and security of premises and personnel.',
    achievements: [
      'Monitor security systems and respond promptly to alarms and emergency situations',
      'Provide first aid assistance and emergency response when required'
    ]
  },
  {
    title: 'Assistant Coordinator',
    company: 'Allianz Partners',
    location: 'Full-time',
    period: 'Jul 2023 - Dec 2023',
    description: 'Leveraged SQL\'s functions to extract relevant information & conduct insightful analysis by uncovering key metrics such as demand seasonality, churn rate & competition dynamics, thus optimizing lead conversion tracking and sales performance analysis ensuring data-driven decision-making.',
    achievements: [
      'Developed BI Dashboard that effectively conveyed top KPI\'s, enabling strategic planning and targeted sales initiatives',
      'Used CRM to connect to clients, enhancing engagement through personalized outreach and tailored product presentations',
      'Received commendation from board of directors for company\'s monthly revenue increase of 25%'
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
    <div className="relative space-y-6" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full">
          <FileText className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Professional Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Resume & Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          My professional journey and achievements across various roles and industries. 
          Download my detailed resume to learn more about my skills and experience.
        </p>
        
        {/* Video and Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative">
            <video
              ref={videoRef}
              src="/images/resume/gif.mp4"
              loop
              muted
              playsInline
              className="w-48 h-48"
              preload="metadata"
            />
          </div>
          
          <motion.a
            href="/images/resume/Karan_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Work Experience Section */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Work History</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
        </motion.div>
        
        <div className="space-y-6">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Timeline connector */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="ml-8 space-y-4">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {job.title}
                        </h4>
                        <p className="text-lg font-semibold text-purple-600 mt-1">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
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
                  <p className="text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed text-sm">{achievement}</span>
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
