/**
 * Header component for Projects section
 */

'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
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
  )
}

