/**
 * Utility function to prepend basePath to an asset URL
 * Handles GitHub Pages basePath (/myPage) in production
 */
export function getImagePath(path: string): string {
  // In production (GitHub Pages), we need to prepend /myPage
  // In development, basePath is empty
  let basePath = ''
  
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages by looking at the pathname
    const pathname = window.location.pathname
    if (pathname.startsWith('/myPage')) {
      basePath = '/myPage'
    }
  } else {
    // Server-side: check environment variable
    // For static export, we check NODE_ENV
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

