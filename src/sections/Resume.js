'use client'
import { motion } from 'framer-motion'
import { Download, Briefcase, MapPin, Calendar } from 'lucide-react'

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
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          My professional experience and achievements in software development.
        </p>
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          Download Resume (PDF)
        </motion.a>
      </div>
      
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold">Work Experience</h3>
        
        <div className="space-y-8">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-brand-500 pl-6"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <div className="flex items-center gap-4 text-neutral-600 mt-1">
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-600">
                  {job.description}
                </p>
                
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="border-t pt-8">
        <h3 className="text-2xl font-semibold mb-6">Skills Summary</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Frontend</h4>
            <ul className="space-y-1 text-sm text-neutral-600">
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS & Styled Components</li>
              <li>Redux & Context API</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Backend</h4>
            <ul className="space-y-1 text-sm text-neutral-600">
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>PostgreSQL & MongoDB</li>
              <li>REST APIs & GraphQL</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Tools & Others</h4>
            <ul className="space-y-1 text-sm text-neutral-600">
              <li>Git & GitHub</li>
              <li>Docker & AWS</li>
              <li>Jest & Testing Library</li>
              <li>Agile & Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
