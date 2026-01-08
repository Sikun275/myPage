/**
 * Utility functions for MoreMe component
 */

/**
 * Format date string to readable format
 * @param dateString - Date string in format 'YYYY-MM', 'YYYY-MM-DD', or custom format like '2022 - present'
 * @returns Formatted date string (e.g., "January 2024" or "2022 - present")
 */
export const formatDate = (dateString: string): string => {
  // Handle custom date formats like "2022 - present"
  if (dateString.includes('present') || dateString.includes('Present')) {
    return dateString
  }
  
  // Handle empty or invalid dates
  if (!dateString || dateString.trim() === '') {
    return ''
  }
  
  try {
    const date = new Date(dateString)
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return dateString // Return original if invalid
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  } catch (error) {
    // If parsing fails, return original string
    return dateString
  }
}

