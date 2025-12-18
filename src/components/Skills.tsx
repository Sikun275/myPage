'use client'

import { skills } from '@/lib/skills'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
} from 'react-icons/fa'

const categoryConfig = {
  frontend: {
    label: 'Frontend',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  backend: {
    label: 'Backend',
    icon: FaServer,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  infrastructure: {
    label: 'Infrastructure',
    icon: FaCloud,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
  },
  tools: {
    label: 'Tools',
    icon: FaTools,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
  },
}

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Technologies and tools I work with to build scalable solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const config = categoryConfig[category as keyof typeof categoryConfig]
            const Icon = config.icon

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {config.label}
                </h3>
                <div className="space-y-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-2 ${config.bgColor} ${config.borderColor} border rounded-lg text-sm font-medium ${config.textColor} transition-all hover:shadow-md`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

