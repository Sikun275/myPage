'use client'

import { certificates } from '@/lib/certificates'
import { motion } from 'framer-motion'
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      {/* Section ID for navigation anchor - links to #certificates */}
      <section id="certificates" className="section-container bg-white">
      {/* Main content container with max width constraint */}
      <div className="max-w-6xl mx-auto">
        {/* Header section with centered text and bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section title with gradient text effect */}
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          {/* Section subtitle with centered text and auto margins */}
          <p className="section-subtitle mx-auto text-center">
            Professional certifications and credentials demonstrating expertise
            in various technologies and platforms
          </p>
        </motion.div>

        {/* Grid container for certificate cards - responsive columns (1 on mobile, 2 on tablet, 3 on desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="card p-6 hover:border-primary-300 transition-all"
            >
              {/* Individual certificate card with padding and hover border effect */}
              {/* Header section with flex layout for icon and title/issuer */}
              <div className="flex items-start justify-between mb-4">
                {/* Container for icon and text, with horizontal spacing */}
                <div className="flex items-center space-x-3">
                  {/* Certificate icon container with gradient background and shadow */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <FaCertificate className="w-6 h-6 text-white" />
                  </div>

                  {/* Text container for certificate name and issuer */}
                  <div>
                    {/* Certificate name - large, bold, dark text */}
                    <h3 className="text-lg font-bold text-gray-900">
                      {cert.name}
                    </h3>
                    {/* Issuer name - small, primary colored, medium weight */}
                    <p className="text-sm text-primary-600 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details section with vertical spacing and bottom margin */}
              <div className="space-y-3 mb-4">
                {/* Date information row with calendar icon */}
                <div className="flex items-center text-gray-600 text-sm">
                  <FaCalendarAlt className="w-4 h-4 mr-2 text-primary-600" />
                  <span>
                    Issued: {cert.issueDate}
                    {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                  </span>
                </div>
                {/* Credential ID display - conditional, small gray text with monospace font */}
                {cert.credentialId && (
                  <div className="text-sm text-gray-500">
                    ID: <span className="font-mono">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Skills tags container - flex wrap with gap spacing and bottom margin */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium border border-primary-100"
                  >
                    {/* Individual skill tag - small badge with primary color scheme */}
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verify credential link - conditional, inline flex with hover color transition */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt className="w-3 h-3 ml-2" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  )
}

