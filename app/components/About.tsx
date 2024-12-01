'use client'

import { motion } from 'framer-motion'
import { profileImage } from '../utils/images'

export default function About() {
  return (
    <section id="about" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <motion.img
          src={profileImage}
          alt="Evid Wijaya"
          className="w-48 h-48 rounded-full mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Mahasiswa semester 5 Program Studi Sistem Informasi di STMIK KUWERA dengan spesialisasi dalam 
          bidang Manajemen dan Komputer. Berpengalaman dalam administrasi umum, fotografi, analisis data, serta 
          kepemimpinan. Dikenal sebagai individu yang efisien, terorganisir, dan memiliki kemampuan analitis yang 
          kuat. Berkomitmen untuk mengembangkan keahlian di bidang teknologi informasi dan manajemen proyek.
        </motion.p>
      </div>
    </section>
  )
}

