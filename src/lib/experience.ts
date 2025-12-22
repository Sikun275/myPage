import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Outlier.ai',
    role: 'Prompt Engineer & Software Development Engineer',
    period: 'May 2025 - Present',
    achievements: [
      'Built and maintained Python-based evaluation frameworks to support internal testing of LLM outputs, enabling faster experimentation and improved reproducibility.',
      'Modernized legacy infrastructure by implementing a modular Python backend and React-based UI, increasing maintainability, visibility, and collaboration across teams.',
      'Led documentation of internal prompt testing infrastructure, onboarding guides, and evaluation tooling, improving knowledge transfer and reducing ramp-up time for new team members.'
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'React']
  },
  {
    id: '2',
    company: 'Outlier.ai',
    role: 'Prompt Engineer & Web Developer',
    period: 'Aug 2024 - Feb 2025',
    achievements: [
      'Designed and iterated on LLM prompts for models using few-shot, zero-shot, and instruction-tuning techniques; evaluated outputs with both NLP metrics and human-labeled scoring.',
      'Applied reinforcement learning from human feedback by assigning weighted rewards and penalties to guide model behaviour, improve alignment and scalability.',
      'Collaborated with cross-functional teams to develop production-ready generative AI solutions, optimize prompting strategies, and document best practices across use cases.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '3',
    company: 'Wilfrid Laurier University',
    role: 'Bachelor of Computer Science(CS)',
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
    role: 'Bachelor of CS, Minor in Business Administration',
    period: 'Sep 2020 - Aug 2022',
    achievements: [
      'President’s Gold Scholarship 2020',
      'President’s Gold Scholarship 2021',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
]

