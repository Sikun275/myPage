/**
 * Category Line component with icons for cat and concert
 */

'use client'

import { motion } from 'framer-motion'
import { FaCat, FaMicrophone } from 'react-icons/fa'
import { TimelineItem } from '@/types'

interface CategoryLineProps {
  categoryItems: TimelineItem[]
  selectedIndex: number | null
  onClick: (index: number) => void
}

export default function CategoryLine({ categoryItems, selectedIndex, onClick }: CategoryLineProps) {
  // Map category IDs to icons
  const getIcon = (id: string) => {
    if (id === '1') return <FaCat className="w-3 h-3" />
    if (id === '2') return <FaMicrophone className="w-3 h-3" />
    return null
  }

  return (
    <div className="relative py-8 mb-2">
      {/* Category Icons */}
      <div className="relative w-full flex justify-center items-center gap-8">
        {categoryItems.map((item, index) => {
          const isSelected = selectedIndex === index
          const icon = getIcon(item.id)
          
          return (
            <button
              key={item.id}
              type="button"
              className="relative flex flex-col items-center cursor-pointer group"
              onClick={() => onClick(index)}
              aria-label={`Select ${item.place}`}
            >
              {/* Icon Container */}
              <div className="relative">
                {/* Outer glow ring for selected icon */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-200 opacity-50 blur-sm"
                  />
                )}

                {/* Icon */}
                <motion.div
                  className={`relative rounded-full border-2 border-white shadow-lg transition-all z-20 p-2 ${
                    isSelected
                      ? 'bg-primary-600 scale-125 ring-2 ring-primary-200 text-white'
                      : 'bg-primary-300 group-hover:bg-primary-400 group-hover:scale-110 text-primary-700'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: isSelected ? 1.25 : 1,
                  }}
                >
                  {icon}
                </motion.div>
              </div>
              
              {/* Label */}
              <span className={`mt-2 text-sm font-medium transition-colors ${
                isSelected ? 'text-primary-600' : 'text-gray-600 group-hover:text-primary-500'
              }`}>
                {item.place}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

