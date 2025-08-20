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
    <div className="relative space-y-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Let's Connect</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I&apos;m always excited to hear about new opportunities, collaborations, and interesting projects. 
          Let&apos;s create something amazing together!
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Send me a message</h3>
            <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                placeholder="Project Inquiry / Collaboration / Job Opportunity"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none placeholder-gray-400"
                placeholder="Tell me about your project, opportunity, or how we can work together..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">Feel free to reach out through any of these channels.</p>
            
            <div className="space-y-4">
              <motion.a 
                href="mailto:karan166728@gmail.com"
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
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
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-green-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
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
                className="group flex items-center gap-4 p-6 border-2 border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={20} className="text-white" />
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Current Availability</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I&apos;m currently available for exciting freelance projects and full-time opportunities. 
              Let&apos;s discuss how we can work together!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-700">Available for new projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
