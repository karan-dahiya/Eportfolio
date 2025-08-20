'use client'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Education</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          My educational background and continuous learning journey in technology and development.
        </p>
      </div>
      
      <div className="space-y-8">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
                         className="bg-white border border-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
                         {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-50 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
            
            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                                                  <div className="flex-shrink-0 w-24 h-24 bg-white flex items-center justify-center shadow-lg p-0 hover:shadow-xl transition-shadow duration-300">
                   <Image 
                     src="/images/education/logo.png"
                     alt="Camosun College Logo"
                     width={100}
                     height={100}
                     className="object-contain rounded-xl"
                   />
                 </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.degree}</h3>
                                     <div className="mt-1">
                     <p className="text-lg font-semibold" style={{ color: '#91BD36' }}>{item.school}</p>
                     <p className="text-sm text-gray-500 mt-1">{item.location}</p>
                   </div>
                  
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>

            {/* Achievements Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Notable Achievements</h4>
              <div className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                                         <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#91BD36' }}></span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
