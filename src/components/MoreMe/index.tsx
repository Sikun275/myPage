/**
 * MoreMe Section Component
 * 
 * A collapsible section that displays a timeline of places visited.
 * Shows cards with images when clicking on timeline dots.
 */

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMoreMe } from './useMoreMe'
import Header from './Header'
import Timeline from './Timeline'
import TimelineCard from './TimelineCard'

export default function MoreMe() {
  const {
    isExpanded,
    setIsExpanded,
    selectedIndex,
    setSelectedIndex,
    cardWidth,
    cardRef,
    sortedItems,
    getCurrentItem,
  } = useMoreMe()

  const currentItem = selectedIndex !== null ? getCurrentItem(selectedIndex) : null

  // Don't render if no items
  if (!sortedItems || sortedItems.length === 0) {
    return null
  }

  return (
    <section id="moreMe" className="section-container bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Collapsible Header */}
        <Header 
          isExpanded={isExpanded} 
          onToggle={() => setIsExpanded(!isExpanded)} 
        />

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* Timeline */}
              <Timeline
                items={sortedItems}
                selectedIndex={selectedIndex}
                onClick={setSelectedIndex}
              />

              {/* Cards Container - Shown when a timeline dot is clicked */}
              <div className="relative mt-8">
                <AnimatePresence mode="wait">
                  {selectedIndex !== null && currentItem && (
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TimelineCard
                        item={currentItem}
                        cardWidth={cardWidth}
                        cardRef={cardRef}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

