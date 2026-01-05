/**
 * Project links component - GitHub and Live Demo links
 */

'use client'

import { Project } from '@/types'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectLinksProps {
  project: Project
}

export default function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <div className="flex space-x-4">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  )
}

