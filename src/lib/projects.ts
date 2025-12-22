import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'DecideForMe (iOS App)',
    problem: 'Users struggle with decision-making when faced with multiple options and need a systematic way to make choices across different scenarios (delivery options, places, image selections)',
    solution: 'Built an iOS app with SwiftUI offering three decision modes: customizable list decisions with weighted random selection, location-based place recommendations using Google Places API, and image marking for visual choice selection. Implemented MVVM architecture with persistent storage and user feedback system to improve future recommendations',
    technologies: ['SwiftUI (iOS 16+)', 'MVVM', 'Google Places API', 'URLSession for Google Places API', 'UserDefaults', 'CoreLocation', 'PhotosUI', 'UIKit integration', 'XCTest framework'],
    githubUrl: 'https://github.com/Sikun275/DecideForMe',
    screenshot: '/images/projects/decideforme-screenshot.png',
    demoGif: '/images/projects/decideforme-demo.gif',
    systemDesign: 'MVVM architecture with SwiftUI views, ViewModels handling business logic, and Models for data persistence. Uses UserDefaults for local storage, Google Places API for location services, and CoreLocation for GPS. Weighted selection algorithms combine user feedback with distance/rating metrics for intelligent recommendations',
    performance: [
      'Instant decision calculations with weighted algorithms',
      'Efficient location-based searches with Google Places API integration',
      'Smooth UI performance with SwiftUI declarative syntax',
      'Persistent data storage with UserDefaults for fast retrieval'
    ],
    testCoverage: 'Comprehensive XCTest coverage for models, view models, location services, and utility functions',
    ciCd: {
      badge: 'https://img.shields.io/github/workflow/status/Sikun275/DecideForMe/CI?label=CI&logo=github',
      url: 'https://github.com/Sikun275/DecideForMe/actions'
    }
  },
  {
    id: '2',
    title: 'Cryptocurrency Trading Bot',
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
]

