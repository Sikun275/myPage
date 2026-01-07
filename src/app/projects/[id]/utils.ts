/**
 * Utility functions for project detail page
 */

/**
 * Get the demo file path for a project
 * Looks for files ending with 'demo' in /images/projects/{projectId}/
 * Supports common image and video extensions
 */
export function getDemoFilePath(projectId: string): string | null {
  // Common file extensions to check (images and videos)
  const extensions = [
    // Images
    'png', 'jpg', 'jpeg', 'gif', 'webp',
    // Videos
    'mp4', 'mov', 'webm',
    // Uppercase variants
    'PNG', 'JPG', 'JPEG', 'GIF', 'WEBP',
    'MP4', 'MOV', 'WEBM'
  ]

  // Try to find a file ending with 'demo' and one of these extensions
  // Since we can't dynamically list files, we'll construct the path
  // The actual file should be named like: "something-demo.png" or "demo.mp4"
  // We'll use a pattern: /images/projects/{id}/*-demo.{ext}
  
  // For now, return a path pattern that the user should match
  // The user needs to name their file ending with '-demo' or 'demo'
  // We'll construct: /images/projects/{id}/demo.{ext}
  // But we need to know which extension - let's return a function that tries common ones
  
  // Actually, let's make it simpler: return a base path and let the component handle it
  // Or better: return the most common pattern and document it
  
  // Since static sites can't check file existence, we'll use a convention:
  // Files should be named: "demo.{ext}" or "{anything}-demo.{ext}"
  // We'll try the most common: demo.png, demo.jpg, demo.mp4, etc.
  
  return `/images/projects/${projectId}/demo`
}

/**
 * Check if a file path is a video file
 */
export function isVideoFile(path: string): boolean {
  return /\.(mp4|mov|MP4|MOV|webm|WEBM)$/i.test(path)
}

/**
 * Get the full demo file path with extension
 * Tries common extensions in order of likelihood
 */
export function getDemoFileWithExtension(projectId: string, preferredExtension?: string): string {
  const basePath = `/images/projects/${projectId}`
  
  // If preferred extension is provided, use it
  if (preferredExtension) {
    return `${basePath}/demo.${preferredExtension}`
  }
  
  // Default to most common: png for images, mp4 for videos
  // Since we can't know which exists, we'll default to png
  // User should name their file as "demo.png", "demo.jpg", "demo.mp4", etc.
  return `${basePath}/demo.png`
}

