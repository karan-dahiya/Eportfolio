'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Blog' },
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
    setOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className={`sticky top-0 z-40 border-b border-neutral-200/60 backdrop-blur bg-white/70 transition-all duration-300 ${
      isScrolled ? 'translate-y-0 opacity-100' : 'md:translate-y-0 md:opacity-100 -translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button 
          onClick={() => scrollToSection('home')}
          className="font-semibold tracking-tight hover:text-brand-600 transition-colors duration-200 cursor-pointer"
        >
          Karan Dahiya
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(n => (
            <button 
              key={n.id} 
              onClick={() => scrollToSection(n.id)}
              className="text-sm hover:text-brand-600 transition-colors duration-200 cursor-pointer"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button className="md:hidden px-3 py-2 border rounded-xl" onClick={() => setOpen(v => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200/60">
          <div className="px-4 py-3 flex flex-col gap-2">
            {NAV.map(n => (
              <button 
                key={n.id} 
                onClick={() => scrollToSection(n.id)}
                className="py-2 text-left hover:text-brand-600 transition-colors duration-200 cursor-pointer"
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