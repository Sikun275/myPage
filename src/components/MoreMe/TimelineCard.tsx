/**
 * Card component that displays timeline item information and image
 */

'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { TimelineItem } from '@/types'
import { formatDate } from './utils'

interface TimelineCardProps {
  item: TimelineItem
  cardWidth: number | null
  cardRef: React.RefObject<HTMLDivElement>
}

// Helper function to check if a file is a video
const isVideoFile = (src: string): boolean => {
  return /\.(mp4|mov|MP4|MOV|webm|WEBM)$/i.test(src)
}

export default function TimelineCard({ item, cardWidth, cardRef }: TimelineCardProps) {
  return (
    <div ref={cardRef} className="card p-6 md:p-8 max-w-4xl mx-auto">
      {/* Current Item Info */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex items-center space-x-2 text-primary-600 font-semibold mb-2 md:mb-0">
            <FaCalendarAlt className="w-4 h-4" />
            <span>{formatDate(item.date)}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="font-medium">{item.place}</span>
          </div>
        </div>

        {item.title && (
          <h3 className="text-2xl font-bold text-gray-900">
            {item.title}
          </h3>
        )}
      </div>

      {/* Current Item Image(s) and Video(s) - supports single or multiple media */}
      {item && item.image && (
        <div className="w-full">
          {Array.isArray(item.image) ? (
            // Multiple media files - display in grid (3 per row, automatically wraps to multiple rows)
            <div className="grid grid-cols-3 gap-2 w-full">
              {item.image.map((mediaSrc, index) => {
                const isVideo = isVideoFile(mediaSrc)
                return (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
                    style={{
                      aspectRatio: '1 / 1',
                    }}
                  >
                    {isVideo ? (
                      // Video element
                      <video
                        src={mediaSrc}
                        className="w-full h-full object-contain"
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Image element
                      <img
                        src={mediaSrc}
                        alt={`${item.place} - Image ${index + 1}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            // Single media file
            (() => {
              const isVideo = isVideoFile(item.image)
              return (
                <div
                  className="relative group rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center w-1/3 mx-auto"
                  style={{
                    aspectRatio: '1 / 1',
                  }}
                >
                  {isVideo ? (
                    // Single video
                    <video
                      src={item.image}
                      className="w-full h-full object-contain"
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    // Single image
                    <>
                      <img
                        src={item.image}
                        alt={item.place}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        {item.title && (
                          <p className="text-white text-sm font-bold mb-1">
                            {item.title}
                          </p>
                        )}
                        <p className="text-white text-xs font-medium">
                          {item.place}
                        </p>
                        <p className="text-white/80 text-xs">
                          {formatDate(item.date)}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )
            })()
          )}
        </div>
      )}
    </div>
  )
}

