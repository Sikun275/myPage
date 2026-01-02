/**
 * Project title component with link to detail page
 */

'use client'

import Link from 'next/link'
import { Project } from '@/types'

interface ProjectTitleProps {
  project: Project
}

export default function ProjectTitle({ project }: ProjectTitleProps) {
  return (
    <div className="flex items-start justify-between mb-4">
      <Link
        href={`/projects/${project.id}`}
        className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer"
      >
        {project.title}
      </Link>
    </div>
  )
}

