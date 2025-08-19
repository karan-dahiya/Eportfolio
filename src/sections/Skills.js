'use client'
import { motion } from 'framer-motion'
import { 
  Code, 
  Globe, 
  Database, 
  GitBranch, 
  Cloud, 
  Gamepad2, 
  BarChart3,
  FileCode,
  Palette,
  Server,
  GitCommit,
  Zap,
  Coffee,
  Terminal,
  Python,
  Smartphone,
  Layout,
  Palette as Paintbrush,
  Layers,
  Database as DbIcon,
  GitBranch as GitIcon,
  Cloud as AwsIcon,
  Gamepad2 as UnityIcon,
  BarChart3 as ChartIcon,
  FileText,
  Cpu,
  Monitor,
  Smartphone as MobileIcon,
  Zap as ReactIcon
} from 'lucide-react'
import Image from 'next/image'

const SKILLS = [
  {
    category: 'Programming Languages',
    icon: <Code size={20} />,
    skills: [
      { name: 'Java', logo: '/images/skills/java.svg', color: 'bg-orange-500' },
      { name: 'C++', logo: '/images/skills/cpp.svg', color: 'bg-blue-600' },
      { name: 'Python', logo: '/images/skills/python.svg', color: 'bg-yellow-500' },
      { name: 'C#', logo: '/images/skills/csharp.svg', color: 'bg-purple-600' },
      { name: 'SwiftUI', logo: '/images/skills/swift.svg', color: 'bg-orange-400' }
    ]
  },
  {
    category: 'Front-End',
    icon: <Globe size={20} />,
    skills: [
      { name: 'HTML', logo: '/images/skills/html5.svg', color: 'bg-orange-600' },
      { name: 'CSS', logo: '/images/skills/css3.svg', color: 'bg-blue-500' },
      { name: 'JavaScript', logo: '/images/skills/javascript.svg', color: 'bg-yellow-400' },
      { name: 'React', logo: '/images/skills/react.svg', color: 'bg-cyan-500' },
      { name: 'Bootstrap', logo: '/images/skills/bootstrap.svg', color: 'bg-purple-500' },
      { name: 'Tailwind CSS', logo: '/images/skills/tailwindcss.svg', color: 'bg-teal-500' },
      { name: 'Node.js', logo: '/images/skills/nodejs.svg', color: 'bg-green-600' },
      { name: 'Figma', logo: '/images/skills/figma.svg', color: 'bg-pink-500' },
      { name: 'Adobe XD', logo: '/images/skills/adobexd.svg', color: 'bg-purple-400' },
      { name: 'Next.js', logo: '/images/skills/nextjs.svg', color: 'bg-black' }
    ]
  },
  {
    category: 'Back-End',
    icon: <Server size={20} />,
    skills: [
      { name: 'NodeJS', logo: '/images/skills/nodejs.svg', color: 'bg-green-600' },
      { name: 'Django', logo: '/images/skills/django.svg', color: 'bg-green-700' },
      { name: 'SQL*PLUS', logo: '/images/skills/sqlplus.svg', color: 'bg-red-600' },
      { name: 'MySQL', logo: '/images/skills/mysql.svg', color: 'bg-blue-600' },
      { name: 'MongoDB', logo: '/images/skills/mongodb.svg', color: 'bg-green-500' }
    ]
  },
  {
    category: 'Version Control',
    icon: <GitBranch size={20} />,
    skills: [
      { name: 'Git', logo: '/images/skills/git.svg', color: 'bg-orange-600' },
      { name: 'GitHub', logo: '/images/skills/github.svg', color: 'bg-gray-800' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud size={20} />,
    skills: [
      { name: 'Amazon Web Services (AWS)', logo: '/images/skills/aws.svg', color: 'bg-orange-500' }
    ]
  },
  {
    category: 'Game Development / Interactive Media',
    icon: <Gamepad2 size={20} />,
    skills: [
      { name: 'Unity', logo: '/images/skills/unity.svg', color: 'bg-gray-700' }
    ]
  },
  {
    category: 'Data & Business Intelligence',
    icon: <BarChart3 size={20} />,
    skills: [
      { name: 'Tableau', logo: '/images/skills/tableau.svg', color: 'bg-blue-600' },
      { name: 'Power BI', logo: '/images/skills/powerbi.svg', color: 'bg-yellow-600' }
    ]
  }
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Here are the technologies and tools I work with. I'm always learning and expanding my skill set.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg">{category.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill.name} className="px-3 py-2 bg-neutral-100 text-sm rounded-full border flex items-center gap-2 hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image 
                      src={skill.logo} 
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
