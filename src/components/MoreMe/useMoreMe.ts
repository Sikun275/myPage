/**
 * Custom hook for MoreMe component state management
 */

import { useState, useMemo, useEffect, useRef } from 'react'
import { timelineItems } from '@/lib/moreMe'
import { TimelineItem } from '@/types'

export function useMoreMe() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [cardWidth, setCardWidth] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Separate category items (id 1, 2) from timeline items (id 3+)
  const categoryItems = useMemo(() => {
    return timelineItems.filter(item => item.id === '1' || item.id === '2')
  }, [])

  // Sort timeline items by date (excluding category items)
  const sortedItems = useMemo(() => {
    const timelineOnly = timelineItems.filter(item => item.id !== '1' && item.id !== '2')
    if (!timelineOnly || timelineOnly.length === 0) {
      return []
    }
    return [...timelineOnly].sort((a, b) => {
      // Handle items without dates (shouldn't happen for timeline items, but safe)
      if (!a.date || !b.date) return 0
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }, [])

  // Set default selection to the cat in Category Line (index 0)
  useEffect(() => {
    // Select cat category item (index 0)
    setSelectedIndex(0)
  }, [])

  // Measure card width and calculate square size (slightly less than 1/3 for 3 per row with margins)
  useEffect(() => {
    if (cardRef.current && selectedIndex !== null) {
      // Use setTimeout to ensure the card is fully rendered
      const timer = setTimeout(() => {
        if (cardRef.current) {
          const width = cardRef.current.offsetWidth
          if (width > 0) {
            setCardWidth(width)
          }
        }
      }, 100) // Small delay to ensure rendering is complete
      
      return () => clearTimeout(timer)
    }
  }, [selectedIndex])

  // Get current item by index
  // Index 0-1: category items, Index 2+: timeline items
  const getCurrentItem = (index: number): TimelineItem | null => {
    if (index < 0) return null
    
    // Category items (indices 0 and 1)
    if (index < categoryItems.length) {
      return categoryItems[index]
    }
    
    // Timeline items (indices 2+)
    const timelineIndex = index - categoryItems.length
    if (timelineIndex < 0 || timelineIndex >= sortedItems.length) return null
    const itemId = sortedItems[timelineIndex].id
    return timelineItems.find(item => item.id === itemId) || null
  }

  return {
    isExpanded,
    setIsExpanded,
    selectedIndex,
    setSelectedIndex,
    cardWidth,
    cardRef,
    categoryItems,
    sortedItems,
    getCurrentItem,
  }
}

