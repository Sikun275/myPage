/**
 * Utility function to handle image paths with basePath for static export
 * In production with basePath, images need to be prefixed with the basePath
 */

/**
 * Gets the base path from the current URL (client-side only)
 * For static export with basePath, we detect it from the current URL
 */
function getBasePathFromURL(): string {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/myPage')) {
      return '/myPage'
    }
  }
  return ''
}

/**
 * Adds basePath to an image path if needed
 * This function works client-side by detecting the basePath from the URL
 * @param imagePath - The image path (e.g., '/images/photo.jpg')
 * @returns The image path with basePath prefix if needed
 */
export function getImagePath(imagePath: string): string {
  if (!imagePath) return imagePath
  
  // If path already starts with basePath, return as is
  if (imagePath.startsWith('/myPage/')) {
    return imagePath
  }
  
  // External URLs (http/https) should not be modified
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // If path is absolute (starts with /), add basePath if detected
  if (imagePath.startsWith('/')) {
    const basePath = getBasePathFromURL()
    if (basePath) {
      return basePath + imagePath
    }
    // During SSR or initial render, assume production basePath
    // This will be corrected on client-side hydration
    if (typeof window === 'undefined') {
      return '/myPage' + imagePath
    }
  }
  
  // Relative paths are returned as is
  return imagePath
}

