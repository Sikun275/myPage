/**
 * Project title component - clickable link to project detail page
 */

'use client'

import Link from 'next/link'
import { Project } from '@/types'

interface ProjectTitleProps {
  project: Project
}

export default function ProjectTitle({ project }: ProjectTitleProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary-600 transition-colors mb-4 inline-block"
    >
      {project.title}
    </Link>
  )
}

