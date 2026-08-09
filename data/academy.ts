import type { CareerRole, RoleGuidance, School, SkillCourse } from './types';

export const schools: School[] = [
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
    roleSlugs: [
      "ai-backend-engineer",
      "ai-full-stack-engineer",
      "ai-integration-engineer",
      "data-engineer",
      "devops-engineer",
      "qa-test-automation-engineer",
      "machine-learning-engineer",
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
    roleSlugs: [
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
    roleSlugs: [
      "ai-essentials",
      "ai-for-students",
      "ai-office-professional",
      "ai-career-accelerator",
    ],
  },
];

export const tracks: CareerRole[] = [
  {
    slug: "ai-backend-engineer",
    schoolSlug: "software-engineering-ai",
    name: "Backend AI Engineer",
    summary:
      "Build the fast, secure APIs and backend systems that power intelligent products.",
    duration: "24 weeks",
    difficulty: "Intermediate",
    projectCount: 6,
    outcomes: [
      "Backend AI Engineer",
      "Backend Engineer",
      "AI Integration Engineer",
    ],
    courseSlugs: [
      "backend-foundations",
      "building-ai-apis",
      "production-ai-systems",
    ],
  },
  {
    slug: "ai-full-stack-engineer",
    schoolSlug: "software-engineering-ai",
    name: "FullStack AI Engineer",
    summary:
      "Turn AI ideas into polished, production-ready products from interface to infrastructure.",
    duration: "28 weeks",
    difficulty: "Beginner to intermediate",
    projectCount: 7,
    outcomes: ["FullStack AI Engineer", "AI Product Engineer", "Software Engineer"],
    courseSlugs: [
      "product-engineering-foundations",
      "building-ai-apis",
      "production-ai-systems",
    ],
  },
  {
    slug: "ai-integration-engineer",
    schoolSlug: "software-engineering-ai",
    name: "AI Integration Engineer",
    summary:
      "Connect models, APIs, and business tools to make AI useful in real-world systems.",
    duration: "22 weeks",
    difficulty: "Intermediate",
    projectCount: 6,
    outcomes: ["Applied AI Engineer", "AI Integration Engineer", "AI Solutions Engineer"],
    courseSlugs: [
      "language-model-foundations",
      "agentic-workflows",
      "production-ai-systems",
    ],
  },
  {
    slug: "machine-learning-engineer",
    schoolSlug: "software-engineering-ai",
    name: "ML Engineer",
    summary:
      "Transform data into dependable machine learning models that perform in production.",
    duration: "32 weeks",
    difficulty: "Advanced",
    projectCount: 8,
    outcomes: [
      "ML Engineer",
      "Applied ML Engineer",
      "MLOps Engineer",
    ],
    courseSlugs: [
      "data-foundations",
      "machine-learning-systems",
      "production-ai-systems",
    ],
  },
  {
    slug: "data-engineer",
    schoolSlug: "software-engineering-ai",
    name: "Data Engineer",
    summary:
      "Create reliable data pipelines and platforms that keep analytics and AI moving.",
    duration: "26 weeks",
    difficulty: "Intermediate",
    projectCount: 6,
    outcomes: ["Data Engineer", "Analytics Engineer", "Data Platform Engineer"],
    courseSlugs: ["data-foundations", "data-pipelines", "cloud-data-systems"],
  },
  {
    slug: "devops-engineer",
    schoolSlug: "software-engineering-ai",
    name: "DevOps/Cloud Engineer",
    summary:
      "Automate delivery and run secure, scalable cloud systems built to stay online.",
    duration: "24 weeks",
    difficulty: "Intermediate",
    projectCount: 6,
    outcomes: ["DevOps/Cloud Engineer", "Platform Engineer", "Cloud Engineer"],
    courseSlugs: ["systems-foundations", "delivery-automation", "cloud-operations"],
  },
  {
    slug: "qa-test-automation-engineer",
    schoolSlug: "software-engineering-ai",
    name: "QA / Test Automation Engineer",
    summary:
      "Catch problems early with smart testing and automation that keeps every release reliable.",
    duration: "20 weeks",
    difficulty: "Beginner to intermediate",
    projectCount: 5,
    outcomes: ["QA / Test Automation Engineer", "Quality Engineer", "SDET"],
    courseSlugs: [
      "testing-foundations",
      "test-automation",
      "quality-engineering",
    ],
  },
  {
    slug: "ai-automation-engineer",
    schoolSlug: "business-ai-automation",
    name: "AI Automation Engineer",
    summary:
      "Design AI-powered workflows that transform how modern teams operate.",
    duration: "16 weeks",
    difficulty: "Beginner friendly",
    projectCount: 5,
    outcomes: [
      "AI Automation Engineer",
      "Automation Consultant",
      "Solutions Specialist",
    ],
    courseSlugs: [
      "automation-foundations",
      "agentic-workflows",
      "automation-operations",
    ],
  },
  {
    slug: "business-automation-specialist",
    schoolSlug: "business-ai-automation",
    name: "Business Automation Specialist",
    summary: "Map, redesign, and automate high-value business processes.",
    duration: "14 weeks",
    difficulty: "Beginner friendly",
    projectCount: 4,
    outcomes: [
      "Business Automation Specialist",
      "Process Analyst",
      "Automation Consultant",
    ],
    courseSlugs: [
      "automation-foundations",
      "workflow-design",
      "automation-operations",
    ],
  },
  {
    slug: "ai-operations-specialist",
    schoolSlug: "business-ai-automation",
    name: "AI Operations Specialist",
    summary: "Implement, govern, and improve AI systems across business teams.",
    duration: "15 weeks",
    difficulty: "Beginner friendly",
    projectCount: 4,
    outcomes: [
      "AI Operations Specialist",
      "AI Program Coordinator",
      "Operations Analyst",
    ],
    courseSlugs: ["ai-business-foundations", "workflow-design", "ai-governance"],
  },
  {
    slug: "no-code-ai-builder",
    schoolSlug: "business-ai-automation",
    name: "No-Code AI Builder",
    summary:
      "Launch useful AI tools and internal products without traditional coding.",
    duration: "12 weeks",
    difficulty: "No-code friendly",
    projectCount: 5,
    outcomes: [
      "No-Code AI Builder",
      "Automation Builder",
      "AI Solutions Freelancer",
    ],
    courseSlugs: [
      "ai-business-foundations",
      "no-code-building",
      "automation-operations",
    ],
  },
  {
    slug: "ai-essentials",
    schoolSlug: "productivity",
    name: "AI Essentials",
    summary:
      "Use AI confidently, critically, and responsibly in everyday work.",
    duration: "6 weeks",
    difficulty: "Beginner",
    projectCount: 3,
    outcomes: ["AI-Enabled Professional", "Knowledge Worker", "Team Contributor"],
    courseSlugs: ["ai-literacy", "prompting-for-work", "responsible-ai-use"],
  },
  {
    slug: "ai-for-students",
    schoolSlug: "productivity",
    name: "AI for Students",
    summary: "Research, learn, write, and prepare for the future with AI.",
    duration: "6 weeks",
    difficulty: "Beginner",
    projectCount: 3,
    outcomes: ["AI-Ready Graduate", "Research Assistant", "Student Creator"],
    courseSlugs: ["ai-literacy", "ai-research-learning", "responsible-ai-use"],
  },
  {
    slug: "ai-office-professional",
    schoolSlug: "productivity",
    name: "AI Office Professional",
    summary:
      "Work faster and communicate better across modern office workflows.",
    duration: "8 weeks",
    difficulty: "Beginner",
    projectCount: 4,
    outcomes: [
      "AI Office Professional",
      "Executive Assistant",
      "Operations Coordinator",
    ],
    courseSlugs: ["ai-literacy", "prompting-for-work", "office-automation"],
  },
  {
    slug: "ai-career-accelerator",
    schoolSlug: "productivity",
    name: "AI Career Accelerator",
    summary:
      "Build an AI-forward portfolio, professional presence, and job-search system.",
    duration: "8 weeks",
    difficulty: "Beginner",
    projectCount: 4,
    outcomes: ["Career Switcher", "AI-Enabled Professional", "Freelancer"],
    courseSlugs: ["ai-literacy", "career-positioning", "portfolio-building"],
  },
];

const courseDefinitions: Record<string, readonly [string, string]> = {
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
  "testing-foundations": [
    "Software Testing Foundations",
    "Plan effective tests and evaluate software quality across the development lifecycle.",
  ],
  "test-automation": [
    "Test Automation",
    "Build maintainable automated tests for web applications, APIs, and services.",
  ],
  "quality-engineering": [
    "Quality Engineering in Production",
    "Integrate testing, observability, and quality controls into delivery workflows.",
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

export const skillCourses: SkillCourse[] = Object.entries(courseDefinitions).map(
  ([slug, [name, summary]]) => ({ slug, name, summary }),
);

export const trackGuidance: Record<string, RoleGuidance> = {
  'ai-backend-engineer': {
    prerequisites: ['Interest in building reliable technical systems','8–10 focused hours each week','A working laptop with a stable internet connection','Basic programming and command-line familiarity'],
    academics: ['Data Structures & Algorithms','Database Management Systems','Operating Systems','Computer Networks','Software Engineering'],
  },
  'ai-full-stack-engineer': {
    prerequisites: ['Curiosity about how complete digital products work','10–12 focused hours each week','A laptop capable of running modern development tools','Basic programming fundamentals are helpful'],
    academics: ['Web Technologies','Data Structures & Algorithms','Database Management Systems','Human–Computer Interaction','Software Engineering'],
  },
  'ai-integration-engineer': {
    prerequisites: ['Comfort with programming logic and APIs','10 focused hours each week','A working laptop and reliable internet','Patience for testing non-deterministic systems'],
    academics: ['Artificial Intelligence','Software Engineering','Algorithms','Computer Networks','Distributed Systems'],
  },
  'machine-learning-engineer': {
    prerequisites: ['Programming fundamentals and comfort with data','12–15 focused hours each week','A laptop suitable for coding and data analysis','Willingness to practice mathematics consistently'],
    academics: ['Probability & Statistics','Linear Algebra','Calculus','Machine Learning Theory','Data Structures & Algorithms'],
  },
  'data-engineer': {
    prerequisites: ['Basic programming and structured problem-solving','10–12 focused hours each week','A laptop with database development tools','Interest in data quality and system reliability'],
    academics: ['Database Management Systems','Data Structures','Distributed Systems','Computer Networks','Statistics'],
  },
  'devops-engineer': {
    prerequisites: ['Basic command-line and programming familiarity','10 focused hours each week','A laptop that supports virtualization or containers','Interest in troubleshooting and system reliability'],
    academics: ['Operating Systems','Computer Networks','Distributed Systems','Information Security','Software Engineering'],
  },
  'qa-test-automation-engineer': {
    prerequisites: ['Interest in software quality and systematic problem-solving','8–10 focused hours each week','A laptop capable of running development and browser tools','Basic programming fundamentals are helpful'],
    academics: ['Software Engineering','Software Testing & Quality Assurance','Data Structures & Algorithms','Database Management Systems','Computer Networks'],
  },
  'ai-automation-engineer': {
    prerequisites: ['Interest in improving how businesses work','7–9 focused hours each week','A working laptop and stable internet','Logical thinking; prior coding is not required'],
    academics: ['Management Information Systems','Business Process Management','Systems Analysis & Design','Artificial Intelligence Fundamentals','Project Management'],
  },
  'business-automation-specialist': {
    prerequisites: ['Curiosity about workflows and operational problems','6–8 focused hours each week','A working laptop and stable internet','Clear written communication and consistent practice'],
    academics: ['Business Process Management','Operations Management','Management Information Systems','Systems Analysis','Project Management'],
  },
  'ai-operations-specialist': {
    prerequisites: ['Interest in operations, governance, and measurement','7–9 focused hours each week','A working laptop and spreadsheet confidence','Comfort collaborating across business teams'],
    academics: ['Operations Management','Management Information Systems','Data Analytics','Risk Management','AI Ethics & Governance'],
  },
  'no-code-ai-builder': {
    prerequisites: ['A product idea or real workflow you want to improve','6–8 focused hours each week','A modern laptop and reliable browser','No programming experience required'],
    academics: ['Systems Analysis & Design','Human–Computer Interaction','Business Process Management','Entrepreneurship','Artificial Intelligence Fundamentals'],
  },
  'ai-essentials': {
    prerequisites: ['Curiosity and willingness to experiment','4–6 focused hours each week','Any modern laptop with internet access','No technical background required'],
    academics: ['Critical Thinking','Information Literacy','Research Methods','Digital Ethics','Communication'],
  },
  'ai-for-students': {
    prerequisites: ['An active academic subject or research interest','4–6 focused hours each week','A laptop with reliable internet access','Commitment to responsible academic use'],
    academics: ['Research Methodology','Academic Writing','Critical Thinking','Information Literacy','Digital Ethics'],
  },
  'ai-office-professional': {
    prerequisites: ['Basic familiarity with office applications','5–7 focused hours each week','A working laptop with office software','Interest in improving everyday professional work'],
    academics: ['Business Communication','Office Information Systems','Data Literacy','Organizational Behavior','Records Management'],
  },
  'ai-career-accelerator': {
    prerequisites: ['A target career direction or willingness to define one','5–7 focused hours each week','A working laptop and professional email account','Commitment to building and sharing portfolio work'],
    academics: ['Professional Communication','Career Development','Project Management','Critical Thinking','Personal Branding'],
  },
};
