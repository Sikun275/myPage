/**
 * Projects Section Component
 * 
 * Main component that orchestrates the Projects section display
 */

'use client'

import { projects } from '@/lib/projects'
import { motion } from 'framer-motion'
import { containerVariants } from './animations'
import Header from './Header'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <Header />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

