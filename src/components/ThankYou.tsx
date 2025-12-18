'use client'

import { motion } from 'framer-motion'

export default function ThankYou() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="gradient-text">Thanks for browsing!</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

