/**
 * Timeline component with horizontal line and clickable dots
 */

'use client'

import { motion } from 'framer-motion'
import { TimelineItem } from '@/types'
import { formatDate } from './utils'

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
              className="relative flex-1 flex flex-col items-center cursor-pointer group"
              onClick={() => onClick(index)}
              aria-label={`Select ${item.place}`}
            >
              {/* Date Label - Show for selected item */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 text-sm font-semibold text-primary-600 whitespace-nowrap"
                >
                  {formatDate(item.date)}
                </motion.div>
              )}

              {/* Timeline Dot Container */}
              <div className="relative">
                {/* Outer glow ring for selected dot */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-200 opacity-50 blur-sm"
                  />
                )}

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute top-[-8px] rounded-full border-4 border-white shadow-lg transition-all z-20 ${
                    isSelected
                      ? 'w-6 h-6 bg-primary-600 scale-125 ring-4 ring-primary-200'
                      : 'w-3 h-3 bg-primary-300 group-hover:bg-primary-400 group-hover:scale-110'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: isSelected ? 1.25 : 1,
                  }}
                />
              </div>

              {/* Place Label - Show on hover for unselected, always for selected */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isSelected ? 1 : 0 
                }}
                className="absolute top-4 text-xs font-medium text-gray-600 text-center px-2 whitespace-nowrap"
              >
                {item.place}
              </motion.div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

