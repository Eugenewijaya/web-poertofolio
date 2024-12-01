'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bannerImages } from '../utils/images'

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative h-screen">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={bannerImages[currentImage]}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <nav className="absolute top-0 left-0 right-0 z-10 bg-red-600 bg-opacity-80">
        <ul className="flex justify-center space-x-6 py-4">
          <li><a href="#about" className="text-white hover:text-red-200">About</a></li>
          <li><a href="#experience" className="text-white hover:text-red-200">Experience</a></li>
          <li><a href="#skills" className="text-white hover:text-red-200">Skills</a></li>
          <li><a href="#contact" className="text-white hover:text-red-200">Contact</a></li>
        </ul>
      </nav>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-6xl font-bold">Evid Wijaya</h1>
      </div>
    </header>
  )
}

