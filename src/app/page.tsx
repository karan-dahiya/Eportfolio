'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../sections/Home'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Education from '../sections/Education'
import Blog from '../sections/Blog'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'

export default function Page() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
    document.documentElement.classList.toggle('dark', stored === 'dark')
  }, [])

  const toggleTheme = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t)
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('dark', t === 'dark')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-4 space-y-24 py-10 flex-1">
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="blog"><Blog /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}