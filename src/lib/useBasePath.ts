/**
 * React hook to get the base path for the current environment
 * Detects basePath from the current URL pathname
 * For static export, we can detect it immediately on client-side
 */

import { useState, useEffect } from 'react'

export function useBasePath(): string {
  // Initialize with detection if available (client-side)
  const [basePath, setBasePath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      if (pathname.startsWith('/myPage')) {
        return '/myPage'
      }
    }
    // For production builds, assume basePath exists
    // This will be corrected on client-side if wrong
    return process.env.NODE_ENV === 'production' ? '/myPage' : ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      if (pathname.startsWith('/myPage')) {
        setBasePath('/myPage')
      } else {
        setBasePath('')
      }
    }
  }, [])

  return basePath
}

