export interface Project {
  id: string
  title: string
  problem: string
  solution: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  screenshot?: string
  demoGif?: string
  systemDesign?: string
  performance?: string[]
  testCoverage?: string
  ciCd?: {
    badge: string
    url: string
  }
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  achievements: string[]
  technologies: string[]
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  skills: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'infrastructure' | 'tools'
}
