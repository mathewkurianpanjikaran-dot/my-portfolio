export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  role: string;
  timeline: string;
  status: 'Completed' | 'Active Development' | 'Prototype';
  techStack: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecturePoints: string[];
  interviewDiscussionPoints: string[];
  demoType: 'ecommerce' | 'voice' | 'terminal';
}

export interface InterviewQA {
  id: string;
  question: string;
  category: 'Background' | 'Technical Deep Dive' | 'System Architecture' | 'Behavioral';
  shortAnswer: string;
  detailedAnswer: string;
  keyTakeaway: string;
}

export const PERSONAL_INFO = {
  name: 'Mathew Kurian Panjikaran',
  initials: 'MKP',
  role: 'AI & Data Science Engineer',
  education: {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    status: 'Undergraduate Student',
    focus: 'Applied Machine Learning, Real-Time Audio Infrastructure & Full-Stack Systems',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning & Deep Neural Networks',
      'Natural Language Processing',
      'Database Management Systems (SQL)',
      'Probability & Statistical Inference',
      'Computer Vision Foundations',
      'Distributed Systems & Cloud Computing'
    ]
  },
  email: 'mathewkurianpanjikaran@gmail.com',
  location: 'Kerala, India',
  availability: 'Open for Summer/Fall 2026 Internships & Graduate Full-Time Engineering Roles',
  summary:
    'B.Tech Artificial Intelligence and Data Science undergraduate building intelligent software at the intersection of real-time audio systems, applied machine learning, and high-performance web products. Experienced in building full-scale e-commerce architectures, WebRTC-based voice assistants with LiveKit, and interactive developer tooling.',
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:mathewkurianpanjikaran@gmail.com'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'mark-voice',
    title: 'Mark — LiveKit Voice Assistant',
    category: 'Real-Time Voice AI / WebRTC',
    tagline: 'Ultra-low latency speech-to-speech AI agent built with LiveKit WebRTC pipeline.',
    description:
      'A real-time interactive voice assistant that leverages LiveKit audio tracks, streaming speech-to-text, LLM context chaining, and neural speech synthesis for human-like conversational responsiveness.',
    longDescription:
      'Mark was designed to solve the critical latency bottleneck in traditional conversational AI. Instead of round-tripping whole audio recordings over HTTP, Mark streams bi-directional WebRTC audio rooms via LiveKit. It features Silero VAD (Voice Activity Detection) for instant interruption handling, streaming transcription, low-latency prompt conditioning, and synthesized audio playback in sub-400ms end-to-end cycles.',
    image: '/src/assets/images/project_mark_voice_1794229216792.jpg',
    role: 'Sole Architect & Lead Developer',
    timeline: '2025 – Present',
    status: 'Active Development',
    techStack: ['LiveKit Agents', 'WebRTC', 'Python', 'FastAPI', 'Silero VAD', 'Whisper STT', 'Deepgram', 'TypeScript'],
    metrics: [
      { label: 'End-to-End Latency', value: '< 380ms' },
      { label: 'Audio Protocol', value: 'WebRTC OPUS' },
      { label: 'Barge-In / Interruption', value: 'Zero Jitter' },
      { label: 'Audio Sampling', value: '48kHz Stereo' }
    ],
    keyFeatures: [
      'Bi-directional WebRTC audio rooms powered by LiveKit SFU server',
      'Voice Activity Detection (VAD) enabling natural user barge-in and conversational interruption',
      'Streaming token generation piped directly into speech synthesis without buffering entire paragraphs',
      'Context-aware state machine preserving dialogue memory and multi-turn conversational goals'
    ],
    architecturePoints: [
      'WebRTC Media Pipeline: Raw client microphone track published to LiveKit audio room',
      'Agent Worker: Python LiveKit Agent subscribes to user audio track with zero transcoding overhead',
      'VAD & Turn Detection: Silero VAD detects user speech pauses within 250ms thresholds',
      'Streaming Inference: Chained LLM token streams feeding streaming TTS models to eliminate perceptual delay'
    ],
    interviewDiscussionPoints: [
      'Why WebRTC over WebSockets: WebRTC UDP packet delivery guarantees lower packet retransmission delay and jitter buffers critical for real-time human conversation.',
      'Handling Interruptions: How the agent immediately halts audio playback buffers the millisecond client VAD triggers new vocal input.',
      'Scaling Agents: Deploying containerized LiveKit agent workers that dynamically bind to active room IDs.'
    ],
    demoType: 'voice'
  },
  {
    id: 'orenwatches',
    title: 'OrenWatches — Luxury Timepiece E-Commerce',
    category: 'Full-Stack Web Engineering',
    tagline: 'High-performance digital boutique storefront for curated horological timepieces.',
    description:
      'A bespoke e-commerce platform built with modern React and Tailwind CSS, engineered for high conversion, buttery smooth micro-interactions, responsive inventory filtering, and seamless cart state management.',
    longDescription:
      'OrenWatches represents a masterclass in front-end architecture and aesthetic discipline. Built to showcase luxury automatic chronographs, dress watches, and diving instruments, the storefront features sub-millisecond client-side multi-attribute filtering (movement, case diameter, strap material, water resistance), real-time cart persistence, responsive checkout flow, and fluid UI responsiveness.',
    image: '/src/assets/images/project_orenwatches_1794229216090.jpg',
    role: 'Full-Stack Engineer',
    timeline: '2024 – 2025',
    status: 'Completed',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Local Storage State', 'Responsive UX'],
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Client Filter Speed', value: '< 2ms' },
      { label: 'Catalog Assets', value: 'Retina Ready' },
      { label: 'Cart Synchronization', value: '100% Offline Resilient' }
    ],
    keyFeatures: [
      'Multi-facet filtering across price, movement (automatic, quartz, manual wind), and water resistance',
      'Interactive cart drawer with dynamic price recalculation, coupon discounts, and persistent storage',
      'High-resolution timepiece zoom gallery and technical specification tabs',
      'Polished mobile-first UX with frictionless single-page checkout preview'
    ],
    architecturePoints: [
      'State Decoupling: Custom reducer hook isolating cart mutations from high-frequency search re-renders',
      'Layout Performance: CSS containment and zero-layout-shift image wrappers ensuring instantaneous page loads',
      'Modular Component Design: Strict atomic separation between product cards, specification matrices, and checkout modals'
    ],
    interviewDiscussionPoints: [
      'State Management: Choosing lightweight React hooks and persistent state over bloated external state stores for zero dependency overhead.',
      'Accessibility & UX: Full keyboard navigable menus, ARIA labels for modal dialogs, and clean contrast ratios.',
      'E-commerce Scalability: How the architecture cleanly maps to Headless Shopify, Medusa, or Supabase backends.'
    ],
    demoType: 'ecommerce'
  },
  {
    id: 'resume-cli-bot',
    title: 'Resume Chatbot & Terminal CLI',
    category: 'Developer Tooling & Conversational AI',
    tagline: 'Command-line interface & interactive resume bot allowing clients to query professional history in CMD.',
    description:
      'A dual-mode developer interface combining a lightweight terminal CLI and conversational chatbot. Clients and recruiters can run commands directly in their console or chat in real-time to query Mathew\'s technical credentials.',
    longDescription:
      'Conceived to transform the passive PDF resume into an interactive technical demonstration, this project allows hiring managers, recruiters, and clients to run `npx mathew-resume` in their local CMD or use the embedded in-browser terminal. It parses natural questions, runs diagnostic commands, outputs structured tables of skills and projects, and delivers rapid answers about Mathew\'s professional life.',
    image: '/src/assets/images/project_cli_chatbot_1794229217192.jpg',
    role: 'Creator & Systems Engineer',
    timeline: '2025 – Present',
    status: 'Active Development',
    techStack: ['Node.js CLI', 'TypeScript', 'Terminal Ink / Chalk', 'Conversational AI Engine', 'Command Parser', 'REST API'],
    metrics: [
      { label: 'CLI Boot Time', value: '< 120ms' },
      { label: 'Command Coverage', value: '18+ Commands' },
      { label: 'Natural Query Accuracy', value: '95%' },
      { label: 'Platform Support', value: 'Mac, Linux, Windows CMD' }
    ],
    keyFeatures: [
      'Interactive terminal emulator in browser with command history, autocomplete, and syntax color formatting',
      'Natural language query answering engine for conversational interviewer dialogue',
      'Structured ASCII tables for technical skills, B.Tech coursework, and project telemetry',
      'Direct one-click export for ATS-compliant resume and direct recruiter contact'
    ],
    architecturePoints: [
      'Parser Engine: Tokenizes inputs into commands, flags (`--all`, `--json`, `--detail`), and natural queries',
      'Knowledge Graph: Grounded schema representing Mathew\'s academic projects, strengths, and work timeline',
      'Terminal UI Rendering: Virtual DOM terminal buffer handling cursor blinking, scrolling, and keyboard up/down history'
    ],
    interviewDiscussionPoints: [
      'Solving Recruiter Friction: Why giving engineers and technical interviewers a native terminal interface creates memorable engagement.',
      'Extensibility: Integrating the CLI with live GitHub API stats and automated interview scheduling webhooks.',
      'Local vs Cloud: Building the core parser to function with zero external latency while optionally chaining to LLMs for open-ended queries.'
    ],
    demoType: 'terminal'
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Core B.Tech coursework and applied model engineering',
    skills: [
      { name: 'Machine Learning Algorithms', level: 'Advanced', highlight: 'Regression, Trees, Ensemble, SVMs' },
      { name: 'Deep Learning & Neural Networks', level: 'Intermediate', highlight: 'PyTorch, CNNs, Transformers basics' },
      { name: 'Natural Language Processing', level: 'Intermediate', highlight: 'Text classification, Embeddings, Tokenization' },
      { name: 'Voice & Speech Processing', level: 'Specialized', highlight: 'Whisper STT, VAD, LiveKit Voice Agents' },
      { name: 'Data Preprocessing & EDA', level: 'Advanced', highlight: 'Pandas, NumPy, Matplotlib, Scikit-Learn' }
    ]
  },
  {
    category: 'Web & Systems Engineering',
    description: 'Full-stack application development and real-time networking',
    skills: [
      { name: 'TypeScript & JavaScript', level: 'Advanced', highlight: 'Modern ESNext, Strict typing, Asynchronous loops' },
      { name: 'React & Frontend Architecture', level: 'Advanced', highlight: 'Hooks, State management, Tailwind CSS, Responsive design' },
      { name: 'LiveKit & WebRTC', level: 'Specialized', highlight: 'Audio tracks, SFU rooms, Real-time telemetry' },
      { name: 'Node.js & Express / Python FastAPI', level: 'Intermediate', highlight: 'RESTful API design, Middleware, Webhooks' },
      { name: 'Databases & Storage', level: 'Intermediate', highlight: 'SQL / PostgreSQL, Schema design, LocalStorage' }
    ]
  },
  {
    category: 'Software Engineering Disciplines',
    description: 'Computer science fundamentals and developer tooling',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Strong Foundations', highlight: 'Arrays, Trees, Graphs, Sorting, Hash Maps' },
      { name: 'Git & Version Control', level: 'Advanced', highlight: 'Branching strategies, CI/CD basics, Open source' },
      { name: 'CLI Tooling & Terminal Dev', level: 'Specialized', highlight: 'Interactive shells, Command parsing, Node CLI' },
      { name: 'Problem Solving & Systems Thinking', level: 'Core Strength', highlight: 'Analytical troubleshooting, Debugging' }
    ]
  }
];

export const INTERVIEW_PREP_QA: InterviewQA[] = [
  {
    id: 'tell-me-about-yourself',
    category: 'Background',
    question: 'Tell me about yourself and your background.',
    shortAnswer:
      'I am an Artificial Intelligence and Data Science B.Tech student with a focus on real-time systems, voice infrastructure, and full-stack software development.',
    detailedAnswer:
      'I am Mathew Kurian Panjikaran, currently pursuing my B.Tech in Artificial Intelligence and Data Science. My passion lies in taking machine learning and intelligence out of notebooks and turning them into production-ready software people can actually interact with in real time. My flagship work includes building Mark, a sub-400ms voice assistant using LiveKit and WebRTC, OrenWatches, a responsive e-commerce platform for curated timepieces, and an interactive CLI resume bot that allows hiring teams to query my professional profile directly through their terminal. I love solving latency challenges, writing clean TypeScript and Python, and collaborating with fast-moving engineering teams.',
    keyTakeaway: 'Bridge between applied AI/data science algorithms and real-time product engineering.'
  },
  {
    id: 'why-livekit-mark',
    category: 'Technical Deep Dive',
    question: 'Why did you choose LiveKit for your Mark voice assistant instead of standard WebSockets?',
    shortAnswer:
      'WebSockets use TCP which causes head-of-line blocking during packet loss; LiveKit uses WebRTC over UDP with dedicated SFUs for sub-300ms audio delivery and instant interruption handling.',
    detailedAnswer:
      'When building conversational voice AI, latency greater than 500ms breaks the illusion of natural human dialogue. With traditional WebSockets over TCP, any network jitter causes audio packets to wait for retransmissions (head-of-line blocking). LiveKit provides an industrial-grade WebRTC SFU that transports Opus audio packets with forward error correction. More importantly, LiveKit Agent framework manages voice activity detection (VAD) and room event synchronization natively, making barge-in (when a user speaks while the AI is talking) instantaneous.',
    keyTakeaway: 'Understands protocol-level network trade-offs (TCP vs UDP/WebRTC) and real-time audio mechanics.'
  },
  {
    id: 'orenwatches-challenges',
    category: 'System Architecture',
    question: 'What were the core architectural challenges in building OrenWatches?',
    shortAnswer:
      'Maintaining 60 FPS rendering while performing multi-attribute facet filtering, and structuring a rock-solid, decoupled cart state without external bundle bloat.',
    detailedAnswer:
      'In OrenWatches, luxury watch customers expect high-fidelity imagery alongside instantaneous search and multi-facet filtering (filtering simultaneously by automatic/quartz movement, water resistance rating, and price brackets). I decoupled the filter state computation from the component rendering pipeline using memoized predicate trees, ensuring zero re-render lag. Furthermore, I built an isolated cart reducer with localStorage synchronization to ensure zero cart drops even if a user refreshes their tab.',
    keyTakeaway: 'Cares deeply about web performance, clean state isolation, and user conversion.'
  },
  {
    id: 'resume-bot-motivation',
    category: 'Behavioral',
    question: 'What inspired the Resume Chatbot & CMD project, and what does it reveal about your engineering style?',
    shortAnswer:
      'I wanted to replace the static 1-page PDF resume with an engaging, interactive CLI tool that allows technical interviewers to query my skills in the medium they use every day.',
    detailedAnswer:
      'Every software engineer sends out a PDF resume, but software engineers live inside their terminals and developer consoles. I wanted to build something experiential that demonstrates my passion for conversational AI, CLI tooling, and prompt parsing. Building the resume bot taught me how to structure hierarchical knowledge graphs, handle edge-case inputs gracefully, and create delight in everyday software interactions.',
    keyTakeaway: 'Demonstrates initiative, user-centric creativity, and passion for developer experience.'
  },
  {
    id: 'learning-methodology',
    category: 'Behavioral',
    question: 'AI and Data Science move at breakneck speed. How do you stay current and pick what to learn?',
    shortAnswer:
      'I learn by building working prototypes rather than just reading tutorials, focusing on enduring fundamentals (algorithms, networking, system design) alongside new models.',
    detailedAnswer:
      'While model architectures like Transformers or diffusion models evolve weekly, the fundamentals—vector mathematics, computational complexity, networking protocols like WebRTC, and clean API design—remain consistent. My approach is to take every new tool or paper (like LiveKit agents or structured outputs) and build a self-contained product with it. That turns theoretical hype into practical debugging intuition.',
    keyTakeaway: 'Principled learner with strong first-principles grounding and high execution velocity.'
  }
];

export const TERMINAL_COMMANDS: Record<string, { desc: string; output: string | string[] }> = {
  help: {
    desc: 'Lists all available commands in the MKP terminal',
    output: [
      'Available Commands:',
      '  bio            - Display Mathew\'s professional summary & engineering focus',
      '  education      - View B.Tech degree, current institution, and coursework',
      '  skills         - List AI, ML, Data Science, Web & Real-Time technical skills',
      '  projects       - Overview of flagship projects (Mark, OrenWatches, Resume-Bot)',
      '  mark           - Deep-dive into the LiveKit voice assistant architecture',
      '  orenwatches    - Deep-dive into the luxury e-commerce watch store',
      '  resume-bot     - Information about this conversational terminal project',
      '  interview      - View frequently asked technical & behavioral interview answers',
      '  contact        - Get Mathew\'s direct email and contact details',
      '  status         - Current availability for internships and full-time hiring',
      '  download       - Open the ATS resume modal and export options',
      '  clear          - Clear the terminal console output'
    ]
  },
  bio: {
    desc: 'Mathew\'s professional biography',
    output: [
      'Name: Mathew Kurian Panjikaran',
      'Discipline: B.Tech in Artificial Intelligence & Data Science',
      'Focus: Applied ML, Real-Time Audio Infrastructure (LiveKit/WebRTC), Full-Stack Web',
      'Mission: Engineering responsive software products that make machine intelligence tactile, useful, and delightful.'
    ]
  },
  education: {
    desc: 'B.Tech academic background and curriculum',
    output: [
      'Degree: Bachelor of Technology (B.Tech)',
      'Specialization: Artificial Intelligence & Data Science',
      'Location: Kerala, India',
      'Core Subjects:',
      '  • Machine Learning & Deep Learning Architectures',
      '  • Natural Language Processing & Speech Processing',
      '  • Data Structures & Algorithms (DSA)',
      '  • Database Management Systems (SQL / Relational Design)',
      '  • Linear Algebra, Probability & Statistical Inference',
      '  • Operating Systems & Distributed Networking'
    ]
  },
  skills: {
    desc: 'Technical competency breakdown',
    output: [
      '[AI & Machine Learning]',
      '  Python, PyTorch, Scikit-Learn, Pandas, NumPy, Data Pipeline Engineering, Silero VAD, Whisper STT',
      '',
      '[Real-Time & Audio Streaming]',
      '  LiveKit Agents, WebRTC Media Tracks, Sub-300ms Audio Buffers, Turn Detection',
      '',
      '[Web & Systems]',
      '  TypeScript, JavaScript (ESNext), React 19, Tailwind CSS, Node.js, Express, REST APIs, Git'
    ]
  },
  projects: {
    desc: 'Summary of flagship projects',
    output: [
      '1. MARK (LiveKit Voice Assistant)',
      '   Status: Active Development | Tech: LiveKit, WebRTC, Python, VAD, Whisper',
      '   Description: Sub-400ms speech-to-speech AI agent with real-time barge-in.',
      '',
      '2. ORENWATCHES (Luxury E-Commerce Store)',
      '   Status: Completed | Tech: React, TypeScript, Tailwind CSS, Local Storage',
      '   Description: Fast, responsive horology boutique with multi-facet filtering and cart.',
      '',
      '3. RESUME CHATBOT & CLI (Command-Line Interface)',
      '   Status: Active Development | Tech: Node.js, TypeScript, Conversational Parser',
      '   Description: Interactive terminal tool allowing recruiters to query credentials in CMD.'
    ]
  },
  mark: {
    desc: 'Details on Mark Voice Assistant',
    output: [
      'Project: Mark — Real-Time Voice Assistant',
      'Protocol: WebRTC OPUS bi-directional audio stream',
      'Framework: LiveKit Agent Framework with Python worker daemon',
      'VAD: Silero VAD for low-latency user speech turn detection (<250ms threshold)',
      'Key Metric: Under 380ms end-to-end speech-to-speech conversational turnaround'
    ]
  },
  orenwatches: {
    desc: 'Details on OrenWatches Store',
    output: [
      'Project: OrenWatches — Online Luxury Watch Storefront',
      'Tech: React, TypeScript, Tailwind CSS, Vite',
      'Features: Real-time search, multi-facet filtering (Automatic/Quartz/Water-Resistance)',
      'Design: Dark minimalist luxury horology aesthetic with 98+ Lighthouse score'
    ]
  },
  'resume-bot': {
    desc: 'Details on this Resume Chatbot',
    output: [
      'Project: Resume Chatbot & CMD Assistant',
      'Goal: Empower clients and interviewers to run a single CMD command and interactively',
      'query Mathew\'s background, project architecture, and technical qualifications.',
      'CLI Run Command: npx mathew-resume (or interactive web shell below)'
    ]
  },
  status: {
    desc: 'Current hiring availability',
    output: [
      'Hiring Status: ACTIVELY INTERVIEWING',
      'Target Roles: AI/ML Engineering Intern, Full-Stack Developer, Software Engineer',
      'Target Period: Summer / Fall 2026 Internships & Graduate Full-Time Roles',
      'Notice: Immediate availability for technical interviews'
    ]
  },
  contact: {
    desc: 'Direct contact information',
    output: [
      'Email: mathewkurianpanjikaran@gmail.com',
      'Location: Kerala, India',
      'LinkedIn: https://linkedin.com',
      'GitHub: https://github.com'
    ]
  }
};
