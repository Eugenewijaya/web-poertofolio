'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Ketua BEM",
      organization: "School of Technopreneur Nusantara",
      period: "2023 - Sekarang",
      description: "Memimpin dan mengkoordinir seluruh kegiatan BEM, memastikan kinerja pengurus selaras dengan visi dan misi organisasi."
    },
    {
      title: "Koordinator Sistem Informasi dan Fotografer",
      organization: "KLB HIMPSI 2024",
      period: "2-4 Agustus 2024",
      description: "Merancang sistem pendaftaran konsultasi gratis berbasis Google Sites dan Google Forms, mengimplementasikan sistem e-voting."
    },
    {
      title: "Freelance Graphic Designer & Video Editor",
      organization: "Fastwork",
      period: "Ongoing",
      description: "Menciptakan brand identity, marketing materials, dan mengedit video promosi untuk berbagai klien."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-red-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-red-600 mb-2">{exp.organization}</p>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

