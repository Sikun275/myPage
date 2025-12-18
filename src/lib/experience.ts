import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    role: 'Software Development Engineer',
    period: '2022 - Present',
    achievements: [
      'Built and deployed microservices handling 1M+ requests/day',
      'Reduced API response time by 50% through caching and query optimization',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      'Led architecture decisions for new product features serving 100K+ users'
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'React']
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Engineer',
    period: '2020 - 2022',
    achievements: [
      'Developed MVP from scratch using React and Node.js',
      'Implemented real-time features using WebSockets',
      'Optimized database queries reducing load time by 70%',
      'Set up monitoring and alerting infrastructure'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '3',
    company: 'Wilfrid Laurier University',
    role: 'Bachelor of Computer Science',
    period: 'Sep 2022 - Oct 2024',
    achievements: [
      'Developed MVP from scratch using React and Node.js',
      'Implemented real-time features using WebSockets',
      'Optimized database queries reducing load time by 70%',
      'Set up monitoring and alerting infrastructure'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '4',
    company: 'University of Waterloo & Wilfrid Laurier University',
    role: 'Bachelor of Computer Science, minor in Business Administration',
    period: 'Sep 2020 - Aug 2022',
    achievements: [
      'President’s Gold Scholarship 2020',
      'President’s Gold Scholarship 2021',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
]

