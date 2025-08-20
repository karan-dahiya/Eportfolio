'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SKILLS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', logo: '/images/skills/java.svg', bgColor: 'bg-orange-500', borderColor: 'border-orange-500' },
      { name: 'C++', logo: '/images/skills/cpp.svg', bgColor: 'bg-blue-600', borderColor: 'border-blue-600' },
      { name: 'Python', logo: '/images/skills/python.svg', bgColor: 'bg-yellow-500', borderColor: 'border-yellow-500' },
      { name: 'C#', logo: '/images/skills/csharp.svg', bgColor: 'bg-purple-600', borderColor: 'border-purple-600' },
      { name: 'SwiftUI', logo: '/images/skills/swift.svg', bgColor: 'bg-orange-400', borderColor: 'border-orange-400' }
    ]
  },
  {
    category: 'Front-End',
    skills: [
      { name: 'HTML', logo: '/images/skills/html5.svg', bgColor: 'bg-orange-600', borderColor: 'border-orange-600' },
      { name: 'CSS', logo: '/images/skills/css3.svg', bgColor: 'bg-blue-500', borderColor: 'border-blue-500' },
      { name: 'JavaScript', logo: '/images/skills/javascript.svg', bgColor: 'bg-yellow-400', borderColor: 'border-yellow-400' },
      { name: 'React', logo: '/images/skills/react.svg', bgColor: 'bg-cyan-500', borderColor: 'border-cyan-500' },
      { name: 'Bootstrap', logo: '/images/skills/bootstrap.svg', bgColor: 'bg-purple-500', borderColor: 'border-purple-500' },
      { name: 'Tailwind CSS', logo: '/images/skills/tailwindcss.svg', bgColor: 'bg-teal-500', borderColor: 'border-teal-500' },
      { name: 'Node.js', logo: '/images/skills/nodejs.svg', bgColor: 'bg-green-600', borderColor: 'border-green-600' },
      { name: 'Figma', logo: '/images/skills/figma.svg', bgColor: 'bg-pink-500', borderColor: 'border-pink-500' },
      { name: 'Adobe XD', logo: '/images/skills/adobexd.svg', bgColor: 'bg-purple-400', borderColor: 'border-purple-400' },
      { name: 'Next.js', logo: '/images/skills/nextjs.svg', bgColor: 'bg-black', borderColor: 'border-black' }
    ]
  },
  {
    category: 'Back-End',
    skills: [
      { name: 'NodeJS', logo: '/images/skills/nodejs.svg', bgColor: 'bg-green-600', borderColor: 'border-green-600' },
      { name: 'Django', logo: '/images/skills/django.svg', bgColor: 'bg-green-700', borderColor: 'border-green-700' },
      { name: 'SQL*PLUS', logo: '/images/skills/sqlplus.svg', bgColor: 'bg-red-600', borderColor: 'border-red-600' },
      { name: 'MySQL', logo: '/images/skills/mysql.svg', bgColor: 'bg-blue-600', borderColor: 'border-blue-600' },
      { name: 'MongoDB', logo: '/images/skills/mongodb.svg', bgColor: 'bg-green-500', borderColor: 'border-green-500' }
    ]
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', logo: '/images/skills/git.svg', bgColor: 'bg-orange-600', borderColor: 'border-orange-600' },
      { name: 'GitHub', logo: '/images/skills/github.svg', bgColor: 'bg-gray-800', borderColor: 'border-gray-800' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Amazon Web Services (AWS)', logo: '/images/skills/aws.svg', bgColor: 'bg-orange-500', borderColor: 'border-orange-500' }
    ]
  },
  {
    category: 'Game Development',
    skills: [
      { name: 'Unity', logo: '/images/skills/unity.svg', bgColor: 'bg-gray-700', borderColor: 'border-gray-700' }
    ]
  },
  {
    category: 'Data & Business Intelligence',
    skills: [
      { name: 'Tableau', logo: '/images/skills/tableau.svg', bgColor: 'bg-blue-600', borderColor: 'border-blue-600' },
      { name: 'Power BI', logo: '/images/skills/powerbi.svg', bgColor: 'bg-yellow-600', borderColor: 'border-yellow-600' }
    ]
  }
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Skills & Technologies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Here are the technologies and tools I work with. I&apos;m always learning and expanding my skill set.
        </p>
      </motion.div>
      
      <div className="border border-gray-200 rounded-2xl bg-white p-6 shadow-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-lg text-gray-800 border-b border-gray-100 pb-2">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill.name} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    className={`px-3 py-2 ${skill.bgColor} ${skill.borderColor} text-white font-bold text-sm rounded-lg border flex items-center gap-2 hover:shadow-md transition-all duration-200 hover:scale-105`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full">
                      <Image 
                        src={skill.logo} 
                        alt={skill.name}
                        width={14}
                        height={14}
                        className="w-3 h-3"
                      />
                    </div>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
