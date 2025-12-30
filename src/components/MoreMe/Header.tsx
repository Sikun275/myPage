/**
 * Collapsible header component for MoreMe section
 */

'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

interface HeaderProps {
  isExpanded: boolean
  onToggle: () => void
}

export default function Header({ isExpanded, onToggle }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <button
        onClick={onToggle}
        className="group w-full flex items-center justify-center space-x-3 cursor-pointer"
      >
        <h2 className="section-title">
          <span className="gradient-text">More About Me</span>
        </h2>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="w-6 h-6 text-primary-600 group-hover:text-primary-700 transition-colors" />
        </motion.div>
      </button>
    </motion.div>
  )
}

