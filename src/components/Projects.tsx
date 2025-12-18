'use client'

import { projects } from '@/lib/projects'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa'
import Image from 'next/image'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Engineering solutions with focus on scalability, performance, and
            clean architecture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`card p-8 md:p-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image/Demo Section */}
                <div
                  className={`${
                    index % 2 === 1 ? 'md:col-start-2' : ''
                  } relative group`}
                >
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video shadow-lg">
                    {project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaCode className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    {project.demoGif && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src={project.demoGif}
                          alt={`${project.title} demo`}
                          fill
                          className="object-cover"
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

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

