'use client'

import { Project } from '@/types'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRocket } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailClientProps {
  project: Project
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

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
        </motion.div>

        {/* Project Screenshot/Demo */}
        {project.screenshot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg w-full p-4">
              <Image
                src={project.screenshot}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
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
          </motion.div>
        )}

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Problem */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
              Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
              Solution
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>

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
      </div>
    </div>
  )
}

