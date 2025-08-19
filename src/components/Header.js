'use client'
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Blog' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 dark:border-neutral-800 backdrop-blur bg-white/70 dark:bg-neutral-900/70">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-tight">YourName.dev</a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} className="text-sm hover:text-brand-600">{n.label}</a>
          ))}
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700" onClick={onToggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
        <button className="md:hidden px-3 py-2 border rounded-xl" onClick={() => setOpen(v => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800">
          <div className="px-4 py-3 flex flex-col gap-2">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2">{n.label}</a>
            ))}
            <button onClick={() => { onToggleTheme(); setOpen(false) }} className="px-3 py-2 border rounded-xl">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}