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

  // Sort timeline items by date
  const sortedItems = useMemo(() => {
    if (!timelineItems || timelineItems.length === 0) {
      return []
    }
    return [...timelineItems].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  }, [])

  // Set default selection to the latest (most recent) date
  useEffect(() => {
    if (sortedItems.length > 0) {
      // Since items are sorted by date ascending, the last item is the latest
      const latestIndex = sortedItems.length - 1
      setSelectedIndex(latestIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Get current item by ID from original lib array (timelineItems) - this is the source of truth
  const getCurrentItem = (index: number): TimelineItem | null => {
    if (index < 0 || index >= sortedItems.length) return null
    const itemId = sortedItems[index].id
    return timelineItems.find(item => item.id === itemId) || null
  }

  return {
    isExpanded,
    setIsExpanded,
    selectedIndex,
    setSelectedIndex,
    cardWidth,
    cardRef,
    sortedItems,
    getCurrentItem,
  }
}

