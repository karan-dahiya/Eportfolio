'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Users, Target, Star } from 'lucide-react'
import Image from 'next/image'

const EDUCATION = [
  {
    degree: 'Information and Computer Systems',
    school: 'Camosun College',
    location: 'Victoria, BC',
    description: 'Comprehensive program focused on modern software development, database management, and system architecture. Developed expertise in full-stack development, cloud computing, and agile methodologies.',
    achievements: [
      'Dean\'s List recognition for academic excellence',
      'Completed capstone project: Full-stack web application with real-world impact',
      'Mentored junior students in programming fundamentals',
      'Successfully managed a team as SCRUM Master',
      'Led effective weekly meetings with sponsors to ensure project alignment',
      'Delivered class and event presentations with strong public speaking skills'
    ]
  }
]

export default function Education() {
  return (
    <div className="relative space-y-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
          <GraduationCap className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">Academic Excellence</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Education & Learning</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          My educational journey and continuous learning in technology and development. 
          Building a strong foundation for innovative problem-solving and technical excellence.
        </p>
      </motion.div>
      
      <div className="space-y-6">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:border-green-200 group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-emerald-50">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full translate-y-16 -translate-x-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Header Section */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Logo Container */}
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-28 h-28 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 p-3">
                        <Image 
                          src="/images/education/logo.png"
                          alt="Camosun College Logo"
                          width={100}
                          height={100}
                          className="object-contain rounded-xl"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Degree Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <div className="mt-2 space-y-1">
                          <p className="text-lg font-semibold" style={{ color: '#91BD36' }}>
                            {item.school}
                          </p>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full">
                      <Star className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <h4 className="text-lg font-semibold text-gray-900">Program Overview</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Achievements Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <h4 className="text-lg font-semibold text-gray-900">Notable Achievements</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {item.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-300 group/achievement"
                      >
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 leading-relaxed text-sm group-hover/achievement:text-gray-900 transition-colors duration-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
