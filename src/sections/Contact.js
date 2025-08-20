'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="relative space-y-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Let&apos;s Connect</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          I&apos;m always excited to hear about new opportunities, collaborations, and interesting projects. 
          Let&apos;s create something amazing together!
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">      
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="space-y-3">
              <motion.a 
                href="mailto:karan166728@gmail.com"
                className="group flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</p>
                  <p className="text-gray-600 group-hover:text-gray-700">karan166728@gmail.com</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://www.google.com/maps/place/Victoria,+BC,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-green-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Location</p>
                  <p className="text-gray-600 group-hover:text-gray-700">Victoria, BC, Canada</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/karan-dahiya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">LinkedIn</p>
                  <p className="text-gray-600 group-hover:text-gray-700">Karan Dahiya</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </motion.a>
            </div>
          </div>
          
          {/* Availability Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Clock size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Current Availability</h3>
            </div>
            <p className="text-gray-600 mb-3 leading-relaxed text-sm">
              I&apos;m currently available for exciting freelance projects and full-time opportunities. 
              Let&apos;s discuss how we can work together!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-700 text-sm">Available for new projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
