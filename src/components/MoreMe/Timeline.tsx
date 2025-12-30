/**
 * Timeline component with horizontal line and clickable dots
 */

'use client'

import { motion } from 'framer-motion'
import { TimelineItem } from '@/types'

interface TimelineProps {
  items: TimelineItem[]
  selectedIndex: number | null
  onClick: (index: number) => void
}

export default function Timeline({ items, selectedIndex, onClick }: TimelineProps) {
  return (
    <div className="relative py-16">
      {/* Horizontal Timeline Line */}
      <div className="relative w-full h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 mb-16" />

      {/* Timeline Dots */}
      <div className="relative w-full flex justify-between items-center">
        {items.map((item, index) => {
          const isSelected = selectedIndex === index
          return (
            <button
              key={item.id}
              type="button"
              className="relative flex-1 flex justify-center cursor-pointer"
              onClick={() => onClick(index)}
              aria-label={`Select ${item.place}`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-[-8px] w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all z-20 ${
                  isSelected
                    ? 'bg-primary-600 scale-125'
                    : 'bg-primary-400'
                }`}
                whileTap={{ scale: 0.9 }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

