/**
 * Project Detail Content Component
 * 
 * Displays all project content sections: Problem, Solution, System Design,
 * Performance Metrics, and Test Coverage
 */

'use client'

import { Project } from '@/types'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

interface ProjectDetailContentProps {
  project: Project
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      {/* Problem */}
      {/* <div className="card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
          Problem
        </h2>
        <p className="text-gray-700 leading-relaxed">{project.problem}</p>
      </div> */}

      {/* Solution */}
      {/* <div className="card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
          Solution
        </h2>
        <p className="text-gray-700 leading-relaxed">{project.solution}</p>
      </div> */}

      {/* System Design */}
      {project.systemDesign && (
        <div className="card p-6 bg-gray-50 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            System Design
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {project.systemDesign}
          </p>
        </div>
      )}

      {/* Performance Metrics */}
      {project.performance && project.performance.length > 0 && (
        <div className="card p-6 bg-primary-50 border border-primary-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-4 flex items-center">
            <FaRocket className="w-5 h-5 mr-2" />
            Performance Metrics
          </h2>
          <ul className="space-y-2">
            {project.performance.map((perf, idx) => (
              <li
                key={idx}
                className="text-primary-800 flex items-start"
              >
                <span className="text-primary-600 mr-2">•</span>
                {perf}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Test Coverage */}
      {project.testCoverage && (
        <div className="card p-6 bg-green-50 border border-green-100">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Test Coverage
          </h2>
          <p className="text-green-800">{project.testCoverage}</p>
        </div>
      )}
    </motion.div>
  )
}

