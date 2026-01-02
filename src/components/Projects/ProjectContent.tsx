/**
 * Project content section component (problem, solution, metrics, etc.)
 */

'use client'

import { Project } from '@/types'
import { FaRocket } from 'react-icons/fa'
import ProjectLinks from './ProjectLinks'
import ProjectTitle from './ProjectTitle'

interface ProjectContentProps {
  project: Project
  index: number
}

export default function ProjectContent({ project, index }: ProjectContentProps) {
  return (
    <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
      <ProjectTitle project={project} />

      <div className="space-y-4 mb-6">
        <div>
          <p className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
            Problem
          </p>
          <p className="text-gray-700 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
            Solution
          </p>
          <p className="text-gray-700 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {project.systemDesign && (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2 text-sm">
              System Design
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {project.systemDesign}
            </p>
          </div>
        )}

        {project.performance && project.performance.length > 0 && (
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
            <p className="font-semibold text-primary-900 mb-2 text-sm flex items-center">
              <FaRocket className="w-4 h-4 mr-2" />
              Performance Metrics
            </p>
            <ul className="space-y-1">
              {project.performance.map((perf, idx) => (
                <li
                  key={idx}
                  className="text-primary-800 text-sm flex items-start"
                >
                  <span className="text-primary-600 mr-2">•</span>
                  {perf}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.testCoverage && (
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <p className="font-semibold text-green-900 mb-1 text-sm">
              Test Coverage
            </p>
            <p className="text-green-800 text-sm">
              {project.testCoverage}
            </p>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <ProjectLinks project={project} />
    </div>
  )
}

