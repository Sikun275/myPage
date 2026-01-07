/**
 * Project Screenshot Component
 * 
 * Displays project demo image/video from /images/projects/{id}/ folder.
 * Automatically looks for files ending with 'demo' (e.g., demo.png, demo.mp4, something-demo.jpg)
 * 
 * File naming convention:
 * - Place files in: /public/images/projects/{projectId}/
 * - Name files ending with 'demo': demo.png, demo.mp4, project-demo.jpg, etc.
 */

'use client'

import { Project } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '@/lib/useBasePath'
import { isVideoFile } from './utils'

interface ProjectScreenshotProps {
  project: Project
}

export default function ProjectScreenshot({ project }: ProjectScreenshotProps) {
  // Construct path to demo file in /images/projects/{projectId}/ folder
  // File naming convention: Name your file as "demo.{ext}" (e.g., demo.png, demo.mp4, demo.jpg)
  // Supported extensions: png, jpg, jpeg, gif, webp (images) or mp4, mov, webm (videos)
  // 
  // Note: Default extension is 'png'. If your file has a different extension,
  // you'll need to update this component or name your file as demo.png
  const basePath = `/images/projects/${project.id}`
  const demoFilePath = `${basePath}/demo.gif`

  if (!demoFilePath) {
    return null
  }

  const fullPath = getImagePath(demoFilePath)
  const isVideo = isVideoFile(demoFilePath)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg w-full p-4">
        {isVideo ? (
          <video
            src={fullPath}
            className="w-full h-auto object-contain rounded-lg"
            controls
            muted
            loop
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={fullPath}
            alt={`${project.title} demo`}
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 100vw"
            unoptimized
          />
        )}
      </div>
      
      {project.ciCd && (
        <div className="mt-4 flex items-center justify-center">
          <a
            href={project.ciCd.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.ciCd.badge}
              alt="CI/CD Status"
              className="h-6"
            />
          </a>
        </div>
      )}
    </motion.div>
  )
}

