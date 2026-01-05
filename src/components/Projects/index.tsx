/**
 * Projects Section Component
 * 
 * Displays a grid of project cards with images and content
 */

'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import ProjectContent from './ProjectContent'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2 md:row-start-1' : ''}`}>
                  {project.screenshot && (
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={project.screenshot}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <ProjectContent project={project} index={index} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

