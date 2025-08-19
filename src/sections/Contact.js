'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-neutral-600">hello@yourname.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-neutral-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Availability</h3>
            <p className="text-neutral-600 mb-4">
              I&apos;m currently available for freelance work and full-time opportunities.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
