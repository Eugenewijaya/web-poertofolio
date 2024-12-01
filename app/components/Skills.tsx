'use client'

import { motion } from 'framer-motion'
import { FaLanguage, FaLaptopCode, FaCamera, FaPencilAlt } from 'react-icons/fa'

export default function Skills() {
  const skills = [
    { name: "Bahasa", icon: FaLanguage, items: ["Indonesia", "Inggris (middle)"] },
    { name: "Perangkat Lunak", icon: FaLaptopCode, items: ["Microsoft Office", "Canva", "Google Sheet", "ChatGPT", "Capcut Desktop/Mobile", "Web Development"] },
    { name: "Fotografi", icon: FaCamera, items: ["Photography"] },
    { name: "Lainnya", icon: FaPencilAlt, items: ["SEO", "Copywriter", "Leadership", "Public Speaking", "Design", "Editing", "Critical Thinking", "Problem Solving"] }
  ]

  return (
    <section id="skills" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className="text-4xl text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
              <ul className="list-disc list-inside">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

