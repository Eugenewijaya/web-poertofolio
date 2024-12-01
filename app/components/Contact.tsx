'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="mailto:evidwijaya@gmail.com"
            className="flex items-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope className="mr-2 text-red-600" /> evidwijaya@gmail.com
          </motion.a>
          <motion.a
            href="tel:+628567822903"
            className="flex items-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaPhone className="mr-2 text-red-600" /> (+62) 8567822903
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/evid-wijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaLinkedin className="mr-2 text-red-600" /> linkedin.com/in/evid-wijaya
          </motion.a>
        </div>
      </div>
    </section>
  )
}

