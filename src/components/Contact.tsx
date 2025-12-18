'use client'

import { personalInfo } from '@/lib/personalInfo'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my code',
      href: personalInfo.github,
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-primary-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            const Component = method.href ? motion.a : motion.div

            return (
              <Component
                key={method.label}
                variants={itemVariants}
                href={method.href || undefined}
                target={method.href ? '_blank' : undefined}
                rel={method.href ? 'noopener noreferrer' : undefined}
                className={`card p-8 text-center group ${
                  method.href ? 'cursor-pointer' : ''
                }`}
                whileHover={method.href ? { scale: 1.05, y: -5 } : {}}
                whileTap={method.href ? { scale: 0.95 } : {}}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-600">{method.value}</p>
              </Component>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Prefer to reach out directly? Feel free to send me an email or
            connect on LinkedIn.
          </p>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="w-4 h-4 mr-2" />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

