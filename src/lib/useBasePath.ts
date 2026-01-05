/**
 * Utility function to prepend basePath to video URLs
 * 
 * Note: For images, use Next.js Image component which handles basePath automatically.
 * This function is only needed for <video> tags since Image component doesn't support videos.
 * 
 * @param path - The video file path (e.g., '/images/moreMe/video.mp4')
 * @returns The path with basePath prefix in production
 */
export function getImagePath(path: string): string {
  // For static export to GitHub Pages, always use /myPage in production
  // This matches the basePath in next.config.js
  const basePath = process.env.NODE_ENV === 'production' ? '/myPage' : ''
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Don't double-prefix if already has basePath
  if (basePath && normalizedPath.startsWith(basePath)) {
    return normalizedPath
  }
  
  // Return path with basePath prefix
  return basePath ? `${basePath}${normalizedPath}` : normalizedPath
}

