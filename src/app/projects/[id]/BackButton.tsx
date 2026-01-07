/**
 * Back Button Component
 * 
 * Navigation button to return to the projects section
 */

'use client'

import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-8"
    >
      <FaArrowLeft className="w-4 h-4" />
      <span>Back to Projects</span>
    </Link>
  )
}

