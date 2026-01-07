/**
 * Project Detail Client Component
 * 
 * Main orchestrator component for the project detail page.
 * Composes all sub-components together.
 */

'use client'

import { Project } from '@/types'
import BackButton from './BackButton'
import ProjectHeader from './ProjectHeader'
import ProjectScreenshot from './ProjectScreenshot'
import ProjectDetailContent from './ProjectDetailContent'

interface ProjectDetailClientProps {
  project: Project
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackButton />
        <ProjectHeader project={project} />
        <ProjectScreenshot project={project} />
        <ProjectDetailContent project={project} />
      </div>
    </div>
  )
}

