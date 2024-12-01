'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { initAnimations } from '../utils/animations'

export default function Home() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <div className="bg-white text-red-600">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

