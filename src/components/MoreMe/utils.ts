/**
 * Utility functions for MoreMe component
 */

/**
 * Format date string to readable format
 * @param dateString - Date string in format 'YYYY-MM' or 'YYYY-MM-DD'
 * @returns Formatted date string (e.g., "January 2024")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long' 
  })
}

