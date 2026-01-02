/**
 * Project image/demo section component
 */

'use client'

import Image from 'next/image'
import { FaCode } from 'react-icons/fa'
import { Project } from '@/types'

interface ProjectImageProps {
  project: Project
  index: number
}

export default function ProjectImage({ project, index }: ProjectImageProps) {
  return (
    <div
      className={`${
        index % 2 === 1 ? 'md:col-start-2' : ''
      } relative group w-full`}
    >
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg w-full px-4 py-4">
        {project.screenshot ? (
          <div className="relative w-full">
            <Image
              src={project.screenshot}
              alt={project.title}
              width={1000}
              height={800}
              className="w-full h-auto object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-full min-h-[300px] flex items-center justify-center py-8">
            <FaCode className="w-16 h-16 text-gray-400" />
          </div>
        )}
        {project.demoGif && (
          <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg overflow-hidden">
            <Image
              src={project.demoGif}
              alt={`${project.title} demo`}
              width={1000}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
      {project.ciCd && (
        <div className="mt-4 flex items-center justify-center">
          <a
            href={project.ciCd.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.ciCd.badge}
              alt="CI/CD Status"
              className="h-6"
            />
          </a>
        </div>
      )}
    </div>
  )
}

