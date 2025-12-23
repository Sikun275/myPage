import { Certificate } from '@/types'

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2023',
    expiryDate: '2026',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://www.credly.com/badges/example',
    skills: ['AWS', 'Cloud Architecture', 'System Design']
  },
  {
    id: '2',
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    issueDate: '2023',
    credentialId: 'GCP-123456',
    credentialUrl: 'https://www.credly.com/badges/example',
    skills: ['Google Cloud', 'Cloud Architecture', 'DevOps']
  },
  // Add more certificates as needed
]

