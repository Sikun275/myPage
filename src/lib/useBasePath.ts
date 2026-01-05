/**
 * Utility function to prepend basePath to image and video URLs
 * 
 * This function ensures correct paths for GitHub Pages deployment.
 * Works for both images (used with Next.js Image component) and videos.
 * 
 * @param path - The asset file path (e.g., '/images/moreMe/image.jpg' or '/images/projects/screenshot.png')
 * @returns The path with basePath prefix in production
 */
export function getImagePath(path: string): string {
  // Determine basePath: use /myPage in production, empty in development
  let basePath = ''
  
  // Check at runtime (client-side)
  if (typeof window !== 'undefined') {
    // If we're on GitHub Pages, the pathname will start with /myPage
    if (window.location.pathname.startsWith('/myPage')) {
      basePath = '/myPage'
    }
    // If we're in production build but on localhost, still use basePath
    else if (process.env.NODE_ENV === 'production') {
      basePath = '/myPage'
    }
  } else {
    // Server-side or build-time: use NODE_ENV
    if (process.env.NODE_ENV === 'production') {
      basePath = '/myPage'
    }
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Don't double-prefix if already has basePath
  if (basePath && normalizedPath.startsWith(basePath)) {
    return normalizedPath
  }
  
  // Return path with basePath prefix
  return basePath ? `${basePath}${normalizedPath}` : normalizedPath
}

