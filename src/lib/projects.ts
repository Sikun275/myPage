import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Distributed Task Queue System',
    problem: 'Needed a scalable solution to handle async job processing with 10K+ requests/min',
    solution: 'Built a distributed task queue using Redis and Node.js with horizontal scaling, job prioritization, and retry mechanisms',
    technologies: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    githubUrl: 'https://github.com/yourusername/task-queue',
    liveUrl: 'https://demo.example.com',
    screenshot: '/images/projects/task-queue-screenshot.png',
    demoGif: '/images/projects/task-queue-demo.gif',
    systemDesign: 'Microservices architecture with Redis pub/sub for job distribution. Horizontal scaling with Kubernetes auto-scaling based on queue depth.',
    performance: [
      'Reduced job processing latency by 60% through connection pooling',
      'Achieved 99.9% uptime with health checks and circuit breakers',
      'Handles 10K+ jobs/min with <100ms p95 latency'
    ],
    testCoverage: '85% unit + integration tests, Jest + Supertest',
    ciCd: {
      badge: 'https://img.shields.io/github/workflow/status/yourusername/task-queue/CI?label=CI&logo=github',
      url: 'https://github.com/yourusername/task-queue/actions'
    }
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    problem: 'Client needed real-time data visualization for monitoring system metrics',
    solution: 'Developed a React dashboard with WebSocket connections, optimized rendering with virtualization for 100K+ data points',
    technologies: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    liveUrl: 'https://dashboard.example.com',
    screenshot: '/images/projects/dashboard-screenshot.png',
    systemDesign: 'Event-driven architecture with WebSocket server, PostgreSQL for time-series data, Redis for caching',
    performance: [
      'Optimized re-renders: 60fps with 100K+ data points using React.memo and virtualization',
      'Reduced initial load time by 40% with code splitting and lazy loading',
      'WebSocket connection handles 1K concurrent users'
    ],
    testCoverage: '80% coverage with React Testing Library',
    ciCd: {
      badge: 'https://img.shields.io/github/workflow/status/yourusername/analytics-dashboard/CI?label=CI&logo=github',
      url: 'https://github.com/yourusername/analytics-dashboard/actions'
    }
  },
  {
    id: '3',
    title: 'Microservices API Gateway',
    problem: 'Required unified API entry point for 15+ microservices with authentication and rate limiting',
    solution: 'Built API gateway with OAuth2, JWT validation, rate limiting, and request routing using Node.js and Express',
    technologies: ['Node.js', 'Express', 'Redis', 'OAuth2', 'Nginx'],
    githubUrl: 'https://github.com/yourusername/api-gateway',
    liveUrl: 'https://api.example.com',
    screenshot: '/images/projects/gateway-screenshot.png',
    systemDesign: 'Reverse proxy pattern with middleware chain for auth, rate limiting, and logging. Redis for distributed rate limiting.',
    performance: [
      'Processes 50K requests/min with <50ms overhead',
      '99.99% uptime with health checks and failover',
      'Reduced API response time by 30% through intelligent caching'
    ],
    testCoverage: '90% coverage with comprehensive integration tests',
    ciCd: {
      badge: 'https://img.shields.io/github/workflow/status/yourusername/api-gateway/CI?label=CI&logo=github',
      url: 'https://github.com/yourusername/api-gateway/actions'
    }
  },
]

