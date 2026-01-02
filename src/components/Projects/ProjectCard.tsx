/**
 * Individual project card component
 */

'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import { itemVariants } from './animations'
import ProjectImage from './ProjectImage'
import ProjectContent from './ProjectContent'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      variants={itemVariants}
      className={`card p-8 md:p-12 ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
          index % 2 === 1 ? 'md:grid-flow-dense' : ''
        }`}
      >
        <ProjectImage project={project} index={index} />
        <ProjectContent project={project} index={index} />
      </div>
    </motion.div>
  )
}

