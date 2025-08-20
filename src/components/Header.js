'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 border-b border-gray-200/60 backdrop-blur-md bg-white/80 transition-all duration-300 ${
      isScrolled ? 'translate-y-0 opacity-100 shadow-sm' : 'md:translate-y-0 md:opacity-100 -translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-4 lg:px-16 xl:px-24 2xl:px-32 max-w-6xl flex items-center justify-between h-14">
        <button 
          onClick={() => scrollToSection('home')}
          className="font-bold text-lg tracking-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer"
        >
          Karan Dahiya
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <button 
              key={n.id} 
              onClick={() => scrollToSection(n.id)}
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => setOpen(v => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200/60 bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-2 flex flex-col gap-1">
            {NAV.map(n => (
              <button 
                key={n.id} 
                onClick={() => scrollToSection(n.id)}
                className="py-2 px-3 text-left rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer font-medium"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}