import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Name - Software Development Engineer',
  description: 'Portfolio website showcasing engineering projects, experience, and technical expertise',
  keywords: ['Software Engineer', 'SDE', 'Portfolio', 'Full Stack Developer'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Software Development Engineer',
    description: 'Portfolio website showcasing engineering projects and experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

