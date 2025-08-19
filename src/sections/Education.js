'use client'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    year: '2020 - 2024',
    description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
    gpa: '3.8/4.0'
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'Coding Academy',
    year: '2023',
    description: 'Intensive 12-week program covering modern web technologies and best practices.',
    gpa: 'Certificate'
  },
  {
    degree: 'High School Diploma',
    school: 'Tech High School',
    year: '2016 - 2020',
    description: 'Specialized in mathematics and computer science. Member of the robotics team.',
    gpa: '3.9/4.0'
  }
]

export default function Education() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Education</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          My educational background and continuous learning journey in technology and development.
        </p>
      </div>
      
      <div className="space-y-6">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.degree}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{item.school}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.year}</p>
                  <p className="text-sm font-medium">{item.gpa}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium">AWS Certified Developer</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Amazon Web Services</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium">MongoDB Database Administrator</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">MongoDB University</p>
          </div>
        </div>
      </div>
    </div>
  )
}
