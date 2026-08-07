export const schools = [
  {
    slug: "software-engineering-ai",
    index: "01",
    icon: "⌘",
    name: "Software Engineering & AI",
    shortName: "Engineering & AI",
    purpose:
      "Build the intelligent products, platforms, and infrastructure shaping the next decade.",
    audience:
      "Aspiring developers, working engineers, and technical problem-solvers.",
    opportunities:
      "Engineering, data, infrastructure, AI systems, and technical product roles.",
    philosophy:
      "Learn engineering fundamentals in context, then apply them through increasingly complex production projects.",
    tracks: [
      "ai-backend-engineer",
      "ai-full-stack-engineer",
      "ai-agent-engineer",
      "machine-learning-engineer",
      "data-engineer",
      "devops-engineer",
    ],
  },
  {
    slug: "business-ai-automation",
    index: "02",
    icon: "✦",
    name: "Business & Automation with AI",
    shortName: "Business & Automation with AI",
    purpose:
      "Turn AI capabilities into practical systems that make organizations work better.",
    audience:
      "Operators, founders, consultants, marketers, and business professionals.",
    opportunities:
      "Automation, AI operations, functional AI, consulting, and transformation roles.",
    philosophy:
      "Start with business problems, map the workflow, and build reliable automation with measurable outcomes.",
    tracks: [
      "ai-automation-engineer",
      "business-automation-specialist",
      "ai-operations-specialist",
      "no-code-ai-builder",
    ],
  },
  {
    slug: "productivity",
    index: "03",
    icon: "✓",
    name: "Productivity with AI",
    shortName: "Productivity with AI",
    purpose:
      "Help students and professionals think, learn, and produce their best work with AI.",
    audience:
      "Students, researchers, office professionals, freelancers, and career switchers.",
    opportunities:
      "AI-enabled knowledge work, freelancing, research, and accelerated career growth.",
    philosophy:
      "Build durable working habits around practical tasks, critical thinking, and responsible AI use.",
    tracks: [
      "ai-essentials",
      "ai-for-students",
      "ai-office-professional",
      "ai-career-accelerator",
    ],
  },
];

export const tracks = [
  {
    slug: "ai-backend-engineer",
    school: "software-engineering-ai",
    name: "AI Backend Engineer",
    summary:
      "Design APIs, data systems, and reliable backends for intelligent products.",
    duration: "24 weeks",
    difficulty: "Intermediate",
    projects: 6,
    roles: [
      "AI Backend Engineer",
      "Backend Engineer",
      "AI Integration Engineer",
    ],
    skills: [
      "backend-foundations",
      "building-ai-apis",
      "production-ai-systems",
    ],
  },
  {
    slug: "ai-full-stack-engineer",
    school: "software-engineering-ai",
    name: "AI Full Stack Engineer",
    summary:
      "Build polished AI products across frontend, backend, and deployment.",
    duration: "28 weeks",
    difficulty: "Beginner to intermediate",
    projects: 7,
    roles: ["AI Full Stack Engineer", "Product Engineer", "Software Engineer"],
    skills: [
      "product-engineering-foundations",
      "building-ai-apis",
      "production-ai-systems",
    ],
  },
  {
    slug: "ai-agent-engineer",
    school: "software-engineering-ai",
    name: "AI Agent Engineer",
    summary:
      "Create dependable agentic systems that reason, use tools, and complete work.",
    duration: "22 weeks",
    difficulty: "Intermediate",
    projects: 6,
    roles: ["AI Agent Engineer", "Applied AI Engineer", "AI Systems Engineer"],
    skills: [
      "language-model-foundations",
      "agentic-workflows",
      "production-ai-systems",
    ],
  },
  {
    slug: "machine-learning-engineer",
    school: "software-engineering-ai",
    name: "Machine Learning Engineer",
    summary:
      "Develop and operate machine learning systems from data to production.",
    duration: "32 weeks",
    difficulty: "Advanced",
    projects: 8,
    roles: [
      "Machine Learning Engineer",
      "Applied ML Engineer",
      "MLOps Engineer",
    ],
    skills: [
      "data-foundations",
      "machine-learning-systems",
      "production-ai-systems",
    ],
  },
  {
    slug: "data-engineer",
    school: "software-engineering-ai",
    name: "Data Engineer",
    summary:
      "Build trusted data platforms that make analytics and AI possible.",
    duration: "26 weeks",
    difficulty: "Intermediate",
    projects: 6,
    roles: ["Data Engineer", "Analytics Engineer", "Data Platform Engineer"],
    skills: ["data-foundations", "data-pipelines", "cloud-data-systems"],
  },
  {
    slug: "devops-engineer",
    school: "software-engineering-ai",
    name: "DevOps Engineer",
    summary:
      "Automate software delivery and operate secure, resilient cloud systems.",
    duration: "24 weeks",
    difficulty: "Intermediate",
    projects: 6,
    roles: ["DevOps Engineer", "Platform Engineer", "Cloud Engineer"],
    skills: ["systems-foundations", "delivery-automation", "cloud-operations"],
  },
  {
    slug: "ai-automation-engineer",
    school: "business-ai-automation",
    name: "AI Automation Engineer",
    summary:
      "Design AI-powered workflows that transform how modern teams operate.",
    duration: "16 weeks",
    difficulty: "Beginner friendly",
    projects: 5,
    roles: [
      "AI Automation Engineer",
      "Automation Consultant",
      "Solutions Specialist",
    ],
    skills: [
      "automation-foundations",
      "agentic-workflows",
      "automation-operations",
    ],
  },
  {
    slug: "business-automation-specialist",
    school: "business-ai-automation",
    name: "Business Automation Specialist",
    summary: "Map, redesign, and automate high-value business processes.",
    duration: "14 weeks",
    difficulty: "Beginner friendly",
    projects: 4,
    roles: [
      "Business Automation Specialist",
      "Process Analyst",
      "Automation Consultant",
    ],
    skills: [
      "automation-foundations",
      "workflow-design",
      "automation-operations",
    ],
  },
  {
    slug: "ai-operations-specialist",
    school: "business-ai-automation",
    name: "AI Operations Specialist",
    summary: "Implement, govern, and improve AI systems across business teams.",
    duration: "15 weeks",
    difficulty: "Beginner friendly",
    projects: 4,
    roles: [
      "AI Operations Specialist",
      "AI Program Coordinator",
      "Operations Analyst",
    ],
    skills: ["ai-business-foundations", "workflow-design", "ai-governance"],
  },
  {
    slug: "no-code-ai-builder",
    school: "business-ai-automation",
    name: "No-Code AI Builder",
    summary:
      "Launch useful AI tools and internal products without traditional coding.",
    duration: "12 weeks",
    difficulty: "No-code friendly",
    projects: 5,
    roles: [
      "No-Code AI Builder",
      "Automation Builder",
      "AI Solutions Freelancer",
    ],
    skills: [
      "ai-business-foundations",
      "no-code-building",
      "automation-operations",
    ],
  },
  {
    slug: "ai-essentials",
    school: "productivity",
    name: "AI Essentials",
    summary:
      "Use AI confidently, critically, and responsibly in everyday work.",
    duration: "6 weeks",
    difficulty: "Beginner",
    projects: 3,
    roles: ["AI-Enabled Professional", "Knowledge Worker", "Team Contributor"],
    skills: ["ai-literacy", "prompting-for-work", "responsible-ai-use"],
  },
  {
    slug: "ai-for-students",
    school: "productivity",
    name: "AI for Students",
    summary: "Research, learn, write, and prepare for the future with AI.",
    duration: "6 weeks",
    difficulty: "Beginner",
    projects: 3,
    roles: ["AI-Ready Graduate", "Research Assistant", "Student Creator"],
    skills: ["ai-literacy", "ai-research-learning", "responsible-ai-use"],
  },
  {
    slug: "ai-office-professional",
    school: "productivity",
    name: "AI Office Professional",
    summary:
      "Work faster and communicate better across modern office workflows.",
    duration: "8 weeks",
    difficulty: "Beginner",
    projects: 4,
    roles: [
      "AI Office Professional",
      "Executive Assistant",
      "Operations Coordinator",
    ],
    skills: ["ai-literacy", "prompting-for-work", "office-automation"],
  },
  {
    slug: "ai-career-accelerator",
    school: "productivity",
    name: "AI Career Accelerator",
    summary:
      "Build an AI-forward portfolio, professional presence, and job-search system.",
    duration: "8 weeks",
    difficulty: "Beginner",
    projects: 4,
    roles: ["Career Switcher", "AI-Enabled Professional", "Freelancer"],
    skills: ["ai-literacy", "career-positioning", "portfolio-building"],
  },
];

export const skillCatalog = {
  "backend-foundations": [
    "Backend Engineering Foundations",
    "Learn how modern services, databases, and APIs work together.",
  ],
  "building-ai-apis": [
    "Building AI APIs",
    "Design reliable interfaces that connect products with AI capabilities.",
  ],
  "production-ai-systems": [
    "Production AI Systems",
    "Ship secure, observable, scalable AI applications.",
  ],
  "product-engineering-foundations": [
    "Product Engineering Foundations",
    "Turn user needs into well-structured digital product experiences.",
  ],
  "language-model-foundations": [
    "Language Model Foundations",
    "Understand how language models work and where they fail.",
  ],
  "agentic-workflows": [
    "Agentic Workflows",
    "Design systems that reason, use tools, and recover from failure.",
  ],
  "data-foundations": [
    "Data Foundations",
    "Model, query, validate, and reason about data.",
  ],
  "machine-learning-systems": [
    "Machine Learning Systems",
    "Train, evaluate, and improve practical learning systems.",
  ],
  "data-pipelines": [
    "Data Pipelines",
    "Move and transform data through dependable workflows.",
  ],
  "cloud-data-systems": [
    "Cloud Data Systems",
    "Operate scalable data platforms in the cloud.",
  ],
  "systems-foundations": [
    "Systems Foundations",
    "Understand Linux, networks, processes, and runtime environments.",
  ],
  "delivery-automation": [
    "Delivery Automation",
    "Create repeatable build, test, and release workflows.",
  ],
  "cloud-operations": [
    "Cloud Operations",
    "Operate secure and resilient production environments.",
  ],
  "automation-foundations": [
    "Automation Foundations",
    "Find, assess, and structure high-value automation opportunities.",
  ],
  "automation-operations": [
    "Automation Operations",
    "Monitor, govern, and improve automated workflows.",
  ],
  "workflow-design": [
    "Workflow Design",
    "Turn messy processes into clear, automatable systems.",
  ],
  "ai-business-foundations": [
    "AI for Business Foundations",
    "Connect AI capabilities with valuable business outcomes.",
  ],
  "ai-governance": [
    "Practical AI Governance",
    "Adopt AI with appropriate controls, measurement, and accountability.",
  ],
  "no-code-building": [
    "No-Code AI Building",
    "Create useful AI-powered tools with visual platforms.",
  ],
  "ai-literacy": [
    "AI Literacy",
    "Use AI with informed judgment, confidence, and responsibility.",
  ],
  "prompting-for-work": [
    "Prompting for Professional Work",
    "Collaborate with AI on analysis, writing, and decisions.",
  ],
  "responsible-ai-use": [
    "Responsible AI Use",
    "Recognize risk, verify outputs, and protect sensitive information.",
  ],
  "ai-research-learning": [
    "AI Research & Learning",
    "Use AI to investigate, synthesize, and learn effectively.",
  ],
  "office-automation": [
    "Office Automation",
    "Streamline documents, meetings, communication, and reporting.",
  ],
  "career-positioning": [
    "Career Positioning",
    "Communicate a clear, credible AI-enabled professional identity.",
  ],
  "portfolio-building": [
    "Portfolio Building",
    "Turn completed work into convincing evidence of capability.",
  ],
};

export const getSchool = (slug) =>
  schools.find((school) => school.slug === slug);
export const getTrack = (slug) => tracks.find((track) => track.slug === slug);
export const schoolTracks = (slug) =>
  tracks.filter((track) => track.school === slug);
