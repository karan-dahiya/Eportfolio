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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 space-y-24 -mt-16 md:mt-0 py-0 md:py-3 flex-1">
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