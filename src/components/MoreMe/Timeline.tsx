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
      {/* Timeline Dots */}
      <div className="relative w-full flex justify-between items-center px-12">
        {items.map((item, index) => {
          const isSelected = selectedIndex === index
          return (
            <button
              key={item.id}
              type="button"
              className="relative flex-1 flex justify-center cursor-pointer group"
              onClick={() => onClick(index)}
              aria-label={`Select ${item.place}`}
            >
              {/* Timeline Dot Container */}
              <div className="relative">
                {/* Outer glow ring for selected dot */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-200 opacity-50 blur-sm"
                  />
                )}

                {/* Timeline Dot - Empty circle when unselected, full circle when selected */}
                <motion.div
                  className={`rounded-full border-2 border-white shadow-lg transition-all z-20 ${
                    isSelected
                      ? 'w-6 h-6 bg-primary-600 scale-125 ring-2 ring-primary-200'
                      : 'w-6 h-6 bg-transparent border-2 border-primary-300 group-hover:border-primary-400 group-hover:scale-110'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: isSelected ? 1.25 : 1,
                  }}
                />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

