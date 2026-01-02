import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

// Generate static params for all projects (required for static export)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
