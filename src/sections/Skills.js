'use client'
import { motion } from 'framer-motion'

const SKILLS = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'Git', level: 80 },
  { name: 'TypeScript', level: 70 },
  { name: 'Docker', level: 65 },
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Here are the technologies and tools I work with. I am always learning and expanding my skill set.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-neutral-600 dark:text-neutral-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
