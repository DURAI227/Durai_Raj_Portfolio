/**
 * Developer portfolio data based on Durai Raj S resume
 */

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
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  level?: number; // 1-100 for technical skills
  color?: string;
}

export const developerInfo: DeveloperInfo = {
  name: 'Durai Raj S',
  title: 'Full-Stack Developer | AI & ML Learning | DevOps Engineer',
  tagline: 'Building scalable solutions with modern technologies',
  heroIntroduction: 'Passionate about building innovative web applications and AI solutions that solve real-world problems. Specializing in full-stack development, DevOps, and integrating AI/ML for smarter user experiences.',
  biography: `I am a Computer Science Engineering graduate with a strong interest in Artificial Intelligence, Python development, and DevOps technologies. I enjoy solving real-world problems using technology and continuously improving my skills through hands-on projects and learning.

I have experience working with Python, C, C++, SQL, and foundational DevOps tools, and I am currently focused on building practical, impactful projects—especially in AI-based applications. I am motivated, detail-oriented, and eager to contribute to innovative teams while growing as a software professional.`,
  email: 'durai227raj@gmail.com',
  phone: '9965066638',
  location: 'Thirukovilur, Kallakurichi, Tamil Nadu',
  linkedIn: 'https://linkedin.com/in/durairaj06',
  github: 'https://github.com/DURAI227',
  resumeUrl: '/durai_resume.pdf',
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'I.F.E.T COLLEGE OF ENGINEERING VILLUPURAM, TAMIL NADU',
      duration: '2022 - 2026',

    },
    {
      degree: 'HSC',
      institution: 'KABILAR GOVERNMENT BOYS HIGHER SECONDARY SCHOOL IN THIRUKOILURE',
      duration: '2021 - 2022'
    },
    {
      degree: 'SSC',
      institution: 'SRI VIDYA MANDIR SENIOR SECONDARY SCHOOL,THIRUKOILURE',
      duration: '2019 - 2020'
    }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
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
    id: '2',
    title: 'Accident Detection System',
    slug: 'accident-detection',
    description: 'Real-time AI-based accident detection for emergency response',
    longDescription: 'An AI-powered system designed to detect accidents in real-time using computer vision and machine learning. The system can identify accident scenarios and immediately alert emergency services, potentially saving lives by reducing response times by up to 30%.',
    techStack: ['Python', 'TensorFlow', 'Machine Learning', 'OpenCV'],
    features: [
      'Real-time video analysis for accident detection',
      'Automatic emergency service notification',
      'GPS-based location tracking',
      'Multi-camera support for wider coverage',
      'Low latency detection under 2 seconds'
    ],
    impact: 'Go Project',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
    year: '2024',
    sourceCode: 'https://github.com/DURAI227'
  },
  {
    id: '3',
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
    id: '4',
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
  { name: 'C', category: 'technical', level: 75, color: 'skill-python' },
  { name: 'Python', category: 'technical', level: 85, color: 'skill-python' },
  { name: 'Java', category: 'technical', level: 70, color: 'skill-java' },
  { name: 'Html/Css/Js', category: 'technical', level: 80, color: 'skill-web' },
  { name: 'Artificial Intelligence', category: 'technical', level: 75, color: 'skill-web' },
  { name: 'Machine Learning', category: 'technical', level: 70, color: 'skill-ml' },

  // Soft Skills
  { name: 'Management', category: 'soft' },
  { name: 'Creativity', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Leadership', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Team Collaboration', category: 'soft' },

  // Languages
  { name: 'Tamil', category: 'language' },
  { name: 'English', category: 'language' }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
