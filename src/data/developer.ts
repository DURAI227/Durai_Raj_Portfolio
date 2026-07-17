/**
 * Developer portfolio data based on Durai Raj S resume
 */

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface DeveloperInfo {
  name: string;
  title: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  resumeUrl: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    grade?: string;
  }[];
  experience?: Experience[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  impact?: string;
  category: 'app' | 'ai' | 'web';
  coverImage: string;
  year: string;
  sourceCode?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  level?: number; // 1-100 for technical skills
  color?: string;
}

export const developerInfo: DeveloperInfo = {
  name: 'Durai Raj',
  title: 'Full-Stack Developer | AI & ML Practitioner | DevOps Enthusiast',
  tagline: 'Developing efficient, scalable, and intelligent software solutions',
  heroIntroduction: 'Passionate about building innovative web applications and AI solutions that solve real-world problems. Specializing in python development, machine learning, and frontend technologies.',
  biography: `I am a motivated computer science student with a strong foundation in programming languages including Python, C, C++, SQL, and web technologies such as HTML, CSS, and JavaScript. I am passionate about developing efficient and scalable solutions while continuously enhancing my technical skills.

Along with my technical expertise, I possess strong leadership, time management, and problem-solving abilities, which help me work effectively both independently and in team environments. I am eager to apply my knowledge to real-world projects, contribute to innovative solutions, and grow as a professional in the field of software development.`,
  email: 'durai227raj@gmail.com',
  phone: '9965066638',
  location: 'Thirukovilur, Kallakurichi, Tamil Nadu',
  linkedIn: 'https://linkedin.com/in/durairaj06',
  github: 'https://github.com/DURAI227',
  resumeUrl: '/durai_raj_resume.pdf',
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'I.F.E.T COLLEGE OF ENGINEERING, VILLUPURAM, TAMIL NADU',
      duration: '2022 - 2026',
    },
    {
      degree: 'HSC',
      institution: 'KABILAR GOVERNMENT BOYS HIGHER SECONDARY SCHOOL IN THIRUKOILURE',
      duration: '2021 - 2022'
    },
    {
      degree: 'SSC',
      institution: 'SRI VIDYA MANDIR SENIOR SECONDARY SCHOOL IN THIRUKOILURE',
      duration: '2019 - 2020'
    }
  ],
  experience: [
    {
      role: 'AI & ML Intern',
      company: 'SUV INTERNATIONAL',
      duration: 'Jan 20, 2025 - Feb 10, 2025',
      description: [
        'Worked on AI and Machine Learning projects, focusing on data analysis, model development, and evaluation.',
        'Collected, cleaned, and processed structured and unstructured datasets for training and testing models.',
        'Implemented automation workflows to improve model training and testing efficiency.'
      ]
    },
    {
      role: 'Frontend Web Development Intern',
      company: 'SIMPLZONE',
      duration: 'Jun 20, 2024 - Jun 30, 2024',
      description: [
        'Developed and maintained responsive web interfaces using HTML, CSS, and JavaScript.',
        'Collaborated with designers and backend developers to implement user-friendly and visually appealing UI components.',
        'Optimized website performance, accessibility, and cross-browser compatibility.'
      ]
    }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Evaluation of Myofascial Sling Exercises Effects on Human Lumbar Pain, Flexibility, and Balance',
    slug: 'ai-myofascial-sling-analysis',
    description: 'Developed an AI-powered web application using Python and YOLOv8-Pose to analyze myofascial sling exercises through real-time human pose estimation.',
    longDescription: 'An AI-powered digital physiotherapy and rehabilitation platform designed to assess, track, and improve posture, balance, and lumbar flexibility using Myofascial Sling Exercises. Using a standard webcam, YOLOv8-Pose skeletal estimation, and Streamlit, it provides real-time joint-angle measurements, posture feedback, and Center of Gravity (CoG) stability calculations. The system features guided corrective exercises, user progress logs, and posture analysis metrics.',
    techStack: ['Python', 'XGBoost', 'Streamlit', 'YOLOv8', 'OpenCV'],
    features: [
      'Developed an AI-powered web application using Python and YOLOv8-Pose to analyze myofascial sling exercises through real-time human pose estimation.',
      'Implemented posture analysis by detecting body keypoints and calculating joint angles, Range of Motion (ROM), and balance metrics from webcam video.',
      'Built a real-time feedback system that evaluates exercise performance and provides posture correction with progress tracking.',
      'Designed a low-cost, vision-based rehabilitation solution for improving lumbar flexibility, balance, and posture without requiring wearable sensors.'
    ],
    category: 'ai',
    coverImage: '/myofascial-cover.jpg',
    year: '2026',
    sourceCode: 'https://github.com/DURAI227/AI-Enabled-Analysis-of-Myofascial-Sling-Exercises-Web.git'
  },
  {
    id: '2',
    title: 'Accident Detection System',
    slug: 'accident-detection',
    description: 'Developed an AI-powered accident detection system using Python and machine learning to analyze vehicle motion in real time.',
    longDescription: 'An AI-powered accident detection system designed to monitor, identify, and alert on traffic accidents in real-time. By utilizing Python and machine learning models, the system processes vehicle motion patterns and camera feeds to automatically trigger emergency alerts, improving emergency response times by 30%.',
    techStack: ['Python', 'Machine Learning', 'Artificial Intelligence', 'OpenCV'],
    features: [
      'Developed an AI-powered accident detection system using Python and machine learning to analyze vehicle motion in real time.',
      'Implemented real-time monitoring algorithms to detect road accidents and automatically trigger emergency alerts.',
      'Improved emergency response times by 30% by sending instant notifications to responders and vehicle owners.',
      'Utilized data preprocessing, feature extraction, and predictive modeling to ensure accurate accident detection.'
    ],
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
    year: '2024',
    sourceCode: 'https://github.com/DURAI227'
  },
  {
    id: '3',
    title: 'Quantum96',
    slug: 'quantum96',
    description: 'Smart Investment Tracker with AI-driven forecasting',
    longDescription: 'Quantum96 is an innovative investment tracking platform that leverages AI and machine learning to provide users with smart investment insights. The platform includes SIP calculators, goal-setting features, and real-time analytics powered by XGBoost prediction models.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'XGBoost', 'Machine Learning'],
    features: [
      'AI-powered investment predictions using XGBoost',
      'Interactive SIP calculator for planning investments',
      'Goal-setting dashboard with progress tracking',
      'Real-time portfolio analytics and insights',
      'Personalized investment recommendations'
    ],
    category: 'web',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60',
    year: '2024',
    sourceCode: 'https://github.com/DURAI227'
  },
  {
    id: '4',
    title: 'Scientific Calculator',
    slug: 'scientific-calculator',
    description: 'Advanced calculator with scientific functions and mathematical operations',
    longDescription: 'A comprehensive scientific calculator application that performs advanced mathematical calculations. Features a user-friendly interface with support for trigonometric functions, logarithmic operations, and complex mathematical expressions.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    features: [
      'Basic arithmetic operations',
      'Trigonometric functions (sin, cos, tan)',
      'Logarithmic and exponential calculations',
      'Memory functions for result storage',
      'Clear history and reset functionality',
      'Responsive and intuitive user interface'
    ],
    category: 'web',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
    year: '2024',
    sourceCode: 'https://github.com/DURAI227/scientific-calculator.git'
  },
  {
    id: '5',
    title: 'Chess Tic-Tac-Toe',
    slug: 'chess-tic-tac-toe',
    description: 'A hybrid game combining chess strategy with tic-tac-toe gameplay',
    longDescription: 'An innovative game that blends the strategic elements of chess with the simplicity of tic-tac-toe. Players engage in tactical gameplay combining both classic game mechanics for a unique and entertaining experience.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    features: [
      'Hybrid gameplay combining chess and tic-tac-toe mechanics',
      'Interactive game board interface',
      'Real-time move validation',
      'Game state management',
      'Win detection and game outcome handling',
      'Responsive design for multiple devices'
    ],
    category: 'web',
    coverImage: '/chess.jpg',
    year: '2024',
    sourceCode: 'https://github.com/DURAI227/chess-tic-tac-toe.git'
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: 'Python', category: 'technical', level: 90, color: 'skill-python' },
  { name: 'C', category: 'technical', level: 80, color: 'skill-python' },
  { name: 'C++', category: 'technical', level: 80, color: 'skill-python' },
  { name: 'Java', category: 'technical', level: 75, color: 'skill-python' },
  { name: 'MySQL', category: 'technical', level: 80, color: 'skill-ml' },
  { name: 'HTML, CSS, JS', category: 'technical', level: 85, color: 'skill-web' },
  { name: 'Artificial Intelligence', category: 'technical', level: 75, color: 'skill-ml' },
  { name: 'Machine Learning', category: 'technical', level: 75, color: 'skill-ml' },

  // Soft Skills
  { name: 'Leadership', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' },

  // Languages
  { name: 'English', category: 'language' },
  { name: 'Tamil', category: 'language' }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
