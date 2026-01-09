/**
 * Modal component for enlarging images and videos
 */

'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { getImagePath } from '@/lib/useBasePath'

interface MediaModalProps {
  isOpen: boolean
  onClose: () => void
  mediaSrc: string
  alt?: string
}

// Helper function to check if a file is a video
const isVideoFile = (src: string): boolean => {
  return /\.(mp4|mov|MP4|MOV|webm|WEBM)$/i.test(src)
}

export default function MediaModal({ isOpen, onClose, mediaSrc, alt }: MediaModalProps) {
  const isVideo = isVideoFile(mediaSrc)

  // Handle Escape key to close modal
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            {/* Media Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              {isVideo ? (
                <video
                  src={getImagePath(mediaSrc)}
                  className="max-w-full max-h-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={getImagePath(mediaSrc)}
                  alt={alt || 'Enlarged image'}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

