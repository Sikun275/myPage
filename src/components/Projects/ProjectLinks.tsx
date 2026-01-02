/**
 * Project links component (GitHub, Live Demo)
 */

'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '@/types'

interface ProjectLinksProps {
  project: Project
}

export default function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <div className="flex space-x-4">
      <motion.a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub />
        <span>View Code</span>
      </motion.a>
      {project.liveUrl && (
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt />
          <span>Live Demo</span>
        </motion.a>
      )}
    </div>
  )
}

