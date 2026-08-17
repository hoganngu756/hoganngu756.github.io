// Single source of truth for site content.
// Update this file to refresh the site — components read from here.

export const profile = {
  name: 'Hogan Nguyen',
  role: 'Incoming Infrastructure Engineer Intern',
  company: 'American Heart Association',
  email: 'hoganngu756@gmail.com',
  github: 'https://github.com/hoganngu756',
  linkedin: 'https://www.linkedin.com/in/hogan-nguyen/',
  resume: '/resume.pdf',
  location: 'Dallas, TX',
  // Rotated through by the typing effect in the hero.
  taglines: [
    'building AI agents with LangChain & LangGraph',
    'shipping full-stack apps in React & Next.js',
    'provisioning cloud infra with Terraform',
    'wrangling Kubernetes cost telemetry',
    'MS CS @ UT Dallas',
  ],
  bio:
    'Building AI agents using LangChain & Python, full-stack applications with React & Next.js, and cloud-native infrastructure with Terraform and Kubernetes. Pursuing my MS in Computer Science at UT Dallas.',
};

export const experiences = [
  {
    title: 'Infrastructure Engineer Intern',
    company: 'American Heart Association',
    location: 'Dallas, TX',
    period: 'Incoming September 2026',
    bullets: [
      'Joining the infrastructure engineering team to support cloud and platform infrastructure',
    ],
  },
  {
    title: 'AI Consultant Intern',
    company: 'IBM',
    location: 'Austin, TX',
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Built the document-analysis module for a due diligence agent in Python, pairing LangChain deepagents with Azure OpenAI and Foundry vector search to extract deal terms, replacing a multi-hour manual review per deal',
      'Created a reporting dashboard using React, Next.js, TypeScript, and PostgreSQL to automate weekly client deliverables, eliminating manual PowerPoint workflows and reducing prep time by 40%',
      "Deployed the team's first internal AI agent to IBM Cloud using Terraform, authoring IaC modules for provisioning and environment configuration",
      'Translated client business requirements into technical specs during sprint planning and stand-ups, tracking deliverables in monday.com for real-time engagement visibility',
    ],
  },
  {
    title: 'Problem Design Engineer',
    company: 'Idler (YC25)',
    location: 'Remote (Part-time)',
    period: 'Jan 2026 – Present',
    bullets: [
      'Authoring edge-case test suites and complex coding problems in Python and Java to benchmark LLM code-generation accuracy and identify subtle logic vulnerabilities',
      'Reviewed 50+ code submissions across OOP and scripting stacks to maintain quality standards and test coverage prior to benchmark deployment',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Blackhawk Network',
    location: 'Coppell, TX',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Automated incident ticket escalation workflows in Python on ServiceNow, reducing manual intervention and cutting average response time by 20%',
      'Constructed custom Splunk and New Relic dashboards correlating application logs with system metrics into a single view of service health, surfacing infrastructure bottlenecks previously caught only after tickets were filed',
      'Authored runbooks and standardized resolution procedures across 100+ incident tickets in ServiceNow, giving the on-call rotation consistent first-response triage steps',
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
      'Engineered a computer vision pipeline to track tennis players and ball movement with a 95% detection rate across 10,000+ video frames. Optimized dataset preprocessing and keypoint extraction for real-time movement analysis.',
    bullets: [
      'Engineered a computer vision pipeline to track tennis players and ball movement with a 95% detection rate across 10,000+ video frames',
      'Optimized dataset preprocessing and keypoint extraction to enable real-time movement analysis, including player and ball speed calculations',
      'Built on OpenCV, PyTorch, and YOLOv8 keypoint detection, performing multi-object tracking and court line detection to translate pixel coordinates into real-world court distance',
    ],
    tech: ['Python', 'PyTorch', 'YOLOv8', 'Pandas', 'OpenCV'],
    github: 'https://github.com/hoganngu756/tennis_analysis',
  },
  {
    id: 'pdf-security-scanner',
    title: 'Document Security and Prompt Scanner',
    category: 'Full-Stack',
    description:
      'Architected a four-layer security engine using regex heuristics, PDF structure analysis, visual-obfuscation auditing, and the Gemini LLM API to detect hidden prompt injections and jailbreaks across PDF text and embedded images.',
    bullets: [
      'Architected a four-layer security engine using regex heuristics, PDF structure analysis, visual-obfuscation auditing, and the Gemini LLM API to detect hidden prompt injections and jailbreaks across PDF text and embedded images, covering 25+ distinct injection patterns',
      'Achieved a 90% detection rate with under 8% false positives against a 150-document adversarial test corpus, surfacing flagged results through a full-stack upload and scanning interface',
      'Hardened the architecture against denial-of-service (DoS) attacks by implementing strict file-type validation and upload payload limits',
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
      'Pipeline that cross-references Prometheus container metrics against pricing models and visualizes request-versus-usage deltas, exposed as an MCP server so LLM agents can query live cluster utilization and cost data.',
    bullets: [
      'Developed a pipeline that cross-references Prometheus container metrics against pricing models and visualizes request-versus-usage deltas, flagging 30% of workloads in a 40-pod cluster as over-provisioned',
      'Exposed the pipeline as an MCP server, letting LLM agents query live cluster utilization and cost data through structured tool calls for rightsizing analysis',
      'Integrated Prometheus metric collection with custom cost estimation formulas based on cloud instance pricing models',
    ],
    tech: ['Python', 'Kubernetes', 'Prometheus', 'OpenCost', 'Docker', 'MCP'],
    github: 'https://github.com/hoganngu756/kubernetes-cost',
  },
];

export const projectCategories = ['All', 'AI & ML', 'Full-Stack', 'Cloud & DevOps'];

export const skillCategories = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C#', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Spring Boot', '.NET', 'REST APIs', 'PyTorch'],
  },
  {
    label: 'AI & Agentic Systems',
    items: [
      'LangChain',
      'LangGraph',
      'MCP',
      'RAG',
      'Prompt Engineering',
      'Context Engineering',
    ],
  },
  {
    label: 'Developer Tools & Infra',
    items: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'AWS',
      'Azure',
      'IBM Cloud',
      'CI/CD',
      'GitHub Actions',
      'Git',
      'Prometheus',
      'Splunk',
      'New Relic',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'Claude Code',
      'Copilot',
    ],
  },
];
