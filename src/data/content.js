// Single source of truth for site content.
// Update this file to refresh the site — components read from here.

export const profile = {
  name: 'Hogan Nguyen',
  role: 'AI Consultant Intern',
  company: 'IBM',
  email: 'hoganngu756@gmail.com',
  github: 'https://github.com/hoganngu756',
  linkedin: 'https://www.linkedin.com/in/hogan-nguyen/',
  resume: '/resume.pdf',
  location: 'Dallas, TX',
  // Rotated through by the typing effect in the hero.
  taglines: [
    'building AI agents with LangGraph',
    'shipping full-stack apps in React & Next.js',
    'wrangling Kubernetes cost telemetry',
    'MS CS @ UT Dallas',
  ],
  bio:
    'Building AI agents using LangGraph & Python, full-stack applications with React & Next.js, and cloud-native monitoring tooling. Pursuing my MS in Computer Science at UT Dallas.',
};

export const experiences = [
  {
    title: 'AI Consultant Intern',
    company: 'IBM',
    location: 'Austin, TX',
    period: 'May 2026 – Present',
    bullets: [
      'Building an AI agent using LangGraph and Python that ingests meeting transcripts to auto-generate summaries and weekly status emails for stakeholders, saving an estimated 3+ hours/week',
      'Developing a full-stack reporting dashboard using React, Next.js, and PostgreSQL to automatically compile weekly client-facing reports, replacing manual PowerPoint reporting and cutting overhead by 40%',
      'Translating business workflows into technical specifications across requirement-gathering sessions and client-facing discovery calls',
      'Managing enterprise AI consulting engagements in monday.com under senior guidance, establishing delivery roadmaps and milestone visibility for cross-functional teams',
    ],
  },
  {
    title: 'Problem Design Engineer',
    company: 'Idler (YC25)',
    location: 'Remote (Part-time)',
    period: 'Jan 2026 – Present',
    bullets: [
      'Authoring test cases and coding problems across Python, Java, and other languages, identifying logic vulnerabilities and edge cases to improve the reliability of research-grade problems used for AI evaluation',
      'Reviewing complex code changes across different OOP and scripting stacks, providing feedback to fellow problem designers to maintain quality standards before deployment',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Blackhawk Network',
    location: 'Coppell, TX',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Automated incident ticket escalation workflows in Python on the ServiceNow platform, reducing manual intervention and cutting average response time by roughly 20%',
      'Built custom Splunk and New Relic dashboards to track system health and proactively identify performance bottlenecks',
      'Documented 100+ incident tickets and resolutions, ensuring accurate, audit-ready records',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Texas at Dallas',
    location: 'Richardson, TX',
    period: 'Expected May 2027',
  },
  {
    degree: 'B.S. Software Engineering',
    school: 'University of Texas at Dallas',
    location: 'Richardson, TX',
    period: 'December 2024',
  },
];

// `github` is optional — omit it when the repo isn't public and the card will
// render a "Private repo" badge instead of linking somewhere useless.
export const projects = [
  {
    id: 'tennis-analysis',
    title: 'Tennis Analysis System',
    category: 'AI & ML',
    description:
      'Engineered a computer vision pipeline to track tennis players and ball movement with 95% accuracy across 10,000+ video frames. Optimized dataset preprocessing and keypoint extraction for real-time movement analysis.',
    bullets: [
      'Engineered a computer vision pipeline to track tennis players and ball movement with 95% accuracy across 10,000+ video frames',
      'Optimized dataset preprocessing and keypoint extraction to enable real-time movement analysis, including player and ball speed calculations',
      'Built on OpenCV, PyTorch, and YOLOv8 keypoint detection, performing multi-object tracking and court line detection to translate pixel coordinates into real-world court distance',
    ],
    tech: ['Python', 'PyTorch', 'YOLOv8', 'Pandas'],
    // TODO: add `github:` once the repo is public.
  },
  {
    id: 'pdf-security-scanner',
    title: 'Document Security and Prompt Scanner',
    category: 'Full-Stack',
    description:
      'Architected a dual-layer security engine using regex heuristics and the Gemini LLM API to detect hidden prompt injections and jailbreaks across PDF text and embedded images.',
    bullets: [
      'Architected a dual-layer security engine using regex heuristics and the Gemini LLM API to detect hidden prompt injections and jailbreaks across PDF text and embedded images',
      'Hardened the architecture against denial-of-service (DoS) attacks by implementing strict file-type validation and upload payload limits',
      'Combined deterministic heuristic filtering with async Gemini prompt auditing to flag malicious injection vectors in user-uploaded files',
    ],
    tech: ['Java', 'React', 'Spring Boot', 'Gemini API', 'SQLite'],
    github: 'https://github.com/hoganngu756/pdf-prompt-scanner',
    demo: 'https://pdf-prompt-scanner.vercel.app',
  },
  {
    id: 'k8s-resource-monitor',
    title: 'Kubernetes Resource and Cost Monitor',
    category: 'Cloud & DevOps',
    description:
      'Automated pipeline querying container metrics from Prometheus, mapping them against pricing models to flag over-provisioned workloads and surfacing an estimated 18% in cost savings.',
    bullets: [
      'Developed an automated pipeline that queries container resource metrics from Prometheus and maps them against pricing models to flag over-provisioned Kubernetes workloads',
      'Designed an interactive interface translating cluster resource deltas into efficiency reports, surfacing an estimated 18% in potential cost savings',
      'Integrated Prometheus metric collection with custom cost estimation formulas based on cloud instance pricing models',
    ],
    tech: ['Python', 'Kubernetes', 'Prometheus', 'OpenCost', 'Docker'],
    // TODO: add `github:` once the repo is public.
  },
];

export const projectCategories = ['All', 'AI & ML', 'Full-Stack', 'Cloud & DevOps'];

export const skillCategories = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C#', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Spring Boot', '.NET', 'REST APIs', 'LangGraph', 'PyTorch'],
  },
  {
    label: 'Developer Tools & Infra',
    items: [
      'PostgreSQL',
      'SQLite',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'AWS (EC2, Lambda)',
      'Git',
      'Splunk',
      'New Relic',
    ],
  },
];
