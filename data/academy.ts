import type { CareerRole, RoleGuidance, School, SkillCourse } from "./types";

/**
 * CURRICULUM DESIGN PRINCIPLES
 *
 * - Courses are independent, sellable entities.
 * - Tracks are curated combinations of courses.
 * - Shared courses are intentionally reused across compatible tracks.
 * - A student who completes a shared course should not repeat it when moving tracks.
 * - Specialization begins only after the shared foundation needed by that role.
 * - Every technical course should end with portfolio evidence, not only lectures.
 */

export type CourseLevel =
  | "Beginner"
  | "Beginner to intermediate"
  | "Intermediate"
  | "Advanced";

export interface CourseDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  level: CourseLevel;
  prerequisites: string[];
  learningOutcomes: string[];
  syllabus: string[];
  tools: string[];
  projects: string[];
  careerRelevance: string[];
  recommendedNext: string[];
}

export interface TrackDetail {
  slug: string;
  roleDescription: string;
  idealFor: string[];
  careerPath: string[];
  opportunities: string[];
  hiringSkills: string[];
  portfolioStandard: string[];
}

/* -------------------------------------------------------------------------- */
/*                                   SCHOOLS                                  */
/* -------------------------------------------------------------------------- */

export const schools: School[] = [
  {
    slug: "software-engineering-ai",
    index: "01",
    icon: "⌘",
    name: "Software Engineering & AI",
    shortName: "Engineering & AI",
    purpose:
      "Prepare students to build, deploy, test, operate, and improve production software and AI systems.",
    audience:
      "CS, IT, software, computer and electronics engineering students, early-career developers, and technical career switchers.",
    opportunities:
      "Backend, full-stack, applied AI, machine learning, data engineering, cloud/DevOps, and software quality roles.",
    philosophy:
      "Learn durable engineering foundations, specialize through role-aligned courses, and prove capability through production-style projects.",
    roleSlugs: [
      "ai-engineer",
      "devops-engineer",
      "qa-test-automation-engineer",
    ],
  },
  {
    slug: "business-ai-automation",
    index: "02",
    icon: "✦",
    name: "Business & Automation with AI",
    shortName: "Business & Automation",
    purpose:
      "Design reliable AI-enabled workflows that reduce repetitive work and improve business operations.",
    audience:
      "Operators, founders, consultants, business professionals, and technically curious professionals.",
    opportunities:
      "AI workflow automation, internal tooling, operations automation, AI implementation, and consulting.",
    philosophy:
      "Start from a measurable business problem, map the workflow, automate carefully, and monitor the result.",
    roleSlugs: ["ai-automation-engineer"],
  },
  {
    slug: "productivity",
    index: "03",
    icon: "✓",
    name: "Productivity with AI",
    shortName: "Productivity with AI",
    purpose:
      "Help students and professionals research, communicate, analyze, and execute everyday knowledge work better with AI.",
    audience:
      "Students, researchers, office professionals, freelancers, and career switchers.",
    opportunities:
      "AI-enabled study, research, communication, office work, freelancing, and professional productivity.",
    philosophy:
      "Use AI as a practical work partner while preserving verification, judgment, privacy, and responsible use.",
    roleSlugs: ["ai-essentials"],
  },
];

/* -------------------------------------------------------------------------- */
/*                                   TRACKS                                   */
/* -------------------------------------------------------------------------- */

export const tracks: CareerRole[] = [
  {
    slug: "ai-engineer",
    schoolSlug: "software-engineering-ai",
    name: "AI Integration Engineer",
    summary:
      "Build the connective layer between modern AI models, existing software systems, organizational data, tools, and end users.",
    duration: "24–28 weeks",
    difficulty: "Intermediate to Advanced",
    projectCount: 8,
    outcomes: [
      "AI Engineer",
      "AI Integration Engineer",
      "Applied AI Engineer",
      "AI Solutions Engineer",
      "AI Product Engineer",
    ],
    courseSlugs: [
      "software-engineering-fundamentals",
      "python-foundations-software-ai-engineering",
      "advanced-python-for-ai",
      "backend-api-engineering",
      "llm-multimodal-generative-ai-foundations",
      "prompt-engineering-fundamentals",
      "rag-agentic-ai-context-engineering",
      "production-ai-engineering-llmops",
    ],
  },
  {
    slug: "devops-engineer",
    schoolSlug: "software-engineering-ai",
    name: "DevOps/Cloud Engineer",
    summary:
      "Automate software delivery and operate secure, observable, scalable cloud infrastructure.",
    duration: "28 weeks",
    difficulty: "Intermediate",
    projectCount: 7,
    outcomes: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Platform Engineer",
      "Junior Site Reliability Engineer",
    ],
    courseSlugs: [
      "linux-networking-systems",
      "containers-ci-cd",
      "cloud-infrastructure-iac",
      "kubernetes-observability-sre",
    ],
  },
  {
    slug: "qa-test-automation-engineer",
    schoolSlug: "software-engineering-ai",
    name: "QA / Test Automation Engineer",
    summary:
      "Engineer software quality through systematic testing, API/UI automation, CI integration, performance checks, and production feedback.",
    duration: "20 weeks",
    difficulty: "Beginner to intermediate",
    projectCount: 6,
    outcomes: [
      "QA Engineer",
      "Test Automation Engineer",
      "Quality Engineer",
      "SDET",
    ],
    courseSlugs: [
      "software-testing-foundations",
      "api-web-test-automation",
      "quality-engineering-production",
    ],
  },

  // Intentionally only one Business & Automation track for now.
  {
    slug: "ai-automation-engineer",
    schoolSlug: "business-ai-automation",
    name: "AI Automation Engineer",
    summary:
      "Design AI-powered workflows that connect business processes, models, APIs, tools, and human approvals.",
    duration: "14 weeks",
    difficulty: "Beginner friendly",
    projectCount: 4,
    outcomes: [
      "AI Automation Engineer",
      "Automation Specialist",
      "AI Workflow Builder",
      "Automation Consultant",
    ],
    courseSlugs: [
      "automation-workflow-foundations",
      "ai-automation-building",
      "automation-operations",
    ],
  },

  // Intentionally only one Productivity track for now.
  {
    slug: "ai-essentials",
    schoolSlug: "productivity",
    name: "AI Productivity Essentials",
    summary:
      "Use AI effectively for research, learning, writing, analysis, documents, communication, and everyday professional work.",
    duration: "6 weeks",
    difficulty: "Beginner",
    projectCount: 3,
    outcomes: [
      "AI-Enabled Student",
      "AI-Enabled Professional",
      "AI-Enabled Knowledge Worker",
    ],
    courseSlugs: ["ai-literacy-productivity"],
  },
];

/* -------------------------------------------------------------------------- */
/*                               COURSE CATALOG                               */
/* -------------------------------------------------------------------------- */

export const courseDetails: CourseDetail[] = [
  /* ---------------------- AI INTEGRATION ENGINEERING ---------------------- */

  {
    slug: "software-engineering-fundamentals",
    name: "Software Engineering Fundamentals",
    tagline:
      "Build maintainable software with the engineering practices production AI systems depend on.",
    description:
      "A practical foundation in software design, Git, testing, debugging, data structures, clean code, security, and collaborative delivery.",
    duration: "14 Hours",
    level: "Beginner to intermediate",
    prerequisites: [
      "Basic computer and internet skills",
      "Interest in software development and AI",
      "No previous programming experience required",
    ],
    learningOutcomes: [
      "Use Git and a professional development workflow",
      "Apply modular design and clean-code principles",
      "Write unit and integration tests",
      "Debug failures systematically",
      "Document and review software changes",
    ],
    syllabus: [
      "Computer systems, operating systems, processes, files, memory and the command line",
      "Internet fundamentals, networking basics, DNS, TCP/IP and HTTP/HTTPS",
      "How modern software works: client-server architecture, frontend, backend, databases and APIs",
      "Git, GitHub, version control, branching, pull requests and collaborative development",
      "Software engineering principles: modularity, abstraction, clean code, SOLID and design-pattern overview",
      "Software development lifecycle, Agile development, testing, debugging, logging and documentation",
      "Security fundamentals: authentication, authorization, secrets and common application risks",
    ],
    tools: ["Git", "GitHub", "VS Code", "Testing frameworks"],
    projects: [
      "Design, test and document a small production-style software service",
    ],
    careerRelevance: ["Software Engineer", "AI Integration Engineer"],
    recommendedNext: ["python-foundations-software-ai-engineering"],
  },

  {
    slug: "python-foundations-software-ai-engineering",
    name: "Python Foundations for Software & AI Engineering",
    tagline: "Develop reliable Python programs for backend services and AI applications.",
    description:
      "A hands-on introduction to Python syntax, data structures, functions, modules, files, exceptions, typing, testing, and package management through software and AI-oriented exercises.",
    duration: "15 Hours",
    level: "Beginner to intermediate",
    prerequisites: [
      "Basic computer and internet skills",
      "Software Engineering Fundamentals or equivalent introductory knowledge",
      "No previous Python experience required",
    ],
    learningOutcomes: [
      "Write clear, idiomatic Python",
      "Model and transform structured data",
      "Organize code into reusable modules",
      "Handle errors and files safely",
      "Test and package a Python application",
    ],
    syllabus: [
      "Python syntax, variables, data types, operators and input/output",
      "Control flow, loops, functions, scope and comprehensions",
      "Lists, tuples, dictionaries, sets and common data operations",
      "Modules, packages, pip, virtual environments and project structure",
      "Object-oriented programming: classes, inheritance and composition",
      "Files, JSON, CSV, exceptions, debugging and logging",
      "HTTP requests, external libraries and API consumption",
      "Testing fundamentals, Pytest and a Git-based Python workflow",
    ],
    tools: ["Python", "uv/pip", "Pytest", "VS Code", "Git"],
    projects: ["Build a tested command-line data processing application"],
    careerRelevance: ["Python Developer", "Backend Engineer", "AI Integration Engineer"],
    recommendedNext: ["advanced-python-for-ai"],
  },

  {
    slug: "advanced-python-for-ai",
    name: "Advanced Python For AI",
    tagline: "Use production-grade Python patterns for concurrent, data-intensive AI workloads.",
    description:
      "Deepen Python skills with advanced typing, object design, generators, concurrency, asynchronous I/O, performance, testing, and reusable AI application architecture.",
    duration: "10 Hours",
    level: "Intermediate",
    prerequisites: ["Python Foundations for Software & AI Engineering"],
    learningOutcomes: [
      "Design typed, maintainable Python components",
      "Use asynchronous programming for API workloads",
      "Build robust data and model pipelines",
      "Profile and improve application performance",
      "Test external integrations with mocks and fixtures",
    ],
    syllabus: [
      "Advanced functions, decorators, generators, iterators and context managers",
      "Type hints, dataclasses, Pydantic, validation and serialization",
      "Advanced OOP, abstractions, interfaces, protocols and dependency patterns",
      "Asynchronous programming, async/await, the event loop and concurrency fundamentals",
      "HTTP clients, asynchronous API consumption, retries and timeouts",
      "Testing, mocking, fixtures, logging and configuration management",
      "Python packaging, dependency management and environment management",
      "Performance, profiling, memory considerations and production Python practices",
    ],
    tools: ["Python", "Pytest", "Pydantic", "asyncio", "Ruff/mypy"],
    projects: ["Build a concurrent, typed client for multiple external APIs"],
    careerRelevance: ["Python Engineer", "Applied AI Engineer", "AI Integration Engineer"],
    recommendedNext: ["backend-api-engineering"],
  },

  {
    slug: "backend-api-engineering",
    name: "Backend & API Engineering",
    tagline: "Create secure APIs and backend services that connect AI to real products.",
    description:
      "Build and deploy production-style backend services covering HTTP, REST, databases, authentication, background jobs, caching, webhooks, testing, and API integrations.",
    duration: "25 Hours + 6 Hours",
    level: "Intermediate",
    prerequisites: ["Advanced Python For AI", "Basic web and database concepts are helpful"],
    learningOutcomes: [
      "Design and implement validated REST APIs",
      "Persist application data with relational databases",
      "Implement authentication and authorization",
      "Integrate third-party APIs and webhooks reliably",
      "Test, containerize and deploy a backend service",
    ],
    syllabus: [
      "Backend architecture, REST APIs, FastAPI and the request/response lifecycle",
      "PostgreSQL, database modeling, ORM, migrations and transactions",
      "Authentication, authorization, JWT and OAuth concepts, and role-based access control",
      "API validation, pagination, filtering, versioning and documentation",
      "Redis, caching, rate limiting, background tasks and queues",
      "External API integrations, webhooks, files and asynchronous workflows",
      "API security, error handling, testing, OpenAPI and Postman",
      "Docker, configuration and deployment fundamentals",
    ],
    tools: ["FastAPI", "Pydantic", "PostgreSQL", "SQLAlchemy", "Postman", "Docker"],
    projects: ["Build a secure, database-backed API with a third-party integration"],
    careerRelevance: ["Backend Engineer", "API Engineer", "AI Integration Engineer"],
    recommendedNext: ["llm-multimodal-generative-ai-foundations"],
  },

  {
    slug: "llm-multimodal-generative-ai-foundations",
    name: "LLM, Multimodal & Generative AI Foundations",
    tagline: "Understand and integrate the model capabilities behind modern generative AI products.",
    description:
      "Learn how language and multimodal models work at an application level, then use model APIs for text, image, audio, structured output, embeddings, and responsible generative AI features.",
    duration: "15 Hours + 6 Hours",
    level: "Intermediate",
    prerequisites: ["Backend & API Engineering", "Python proficiency"],
    learningOutcomes: [
      "Explain key LLM and multimodal concepts",
      "Select models based on capability, cost and latency",
      "Integrate text and multimodal model APIs",
      "Generate validated structured outputs",
      "Recognize model risks and responsible-use constraints",
    ],
    syllabus: [
      "Generative AI, foundation models, LLMs, transformers and inference fundamentals",
      "Tokens, embeddings, context windows, sampling, temperature and model behavior",
      "Major AI providers and APIs: OpenAI, Anthropic, Gemini, Bedrock and open-source models",
      "Chat and completion APIs, streaming, structured outputs and function/tool calling",
      "Embeddings, semantic similarity and vector-representation fundamentals",
      "Multimodal AI: text, vision, audio, speech and document understanding",
      "Model selection, capabilities, limitations, hallucinations and reliability",
      "Token usage, latency, model pricing, cost and provider tradeoffs",
    ],
    tools: ["LLM APIs", "Multimodal APIs", "Python SDKs", "Pydantic", "Jupyter"],
    projects: ["Build a multimodal document-understanding API with structured output"],
    careerRelevance: ["Generative AI Developer", "Applied AI Engineer", "AI Integration Engineer"],
    recommendedNext: ["prompt-engineering-fundamentals"],
  },

  {
    slug: "prompt-engineering-fundamentals",
    name: "Prompt Engineering Fundamentals",
    tagline: "Design reliable instructions, context, examples, and outputs for model-powered software.",
    description:
      "A focused course on prompt design for production tasks, including decomposition, few-shot examples, structured outputs, tool instructions, evaluation, security, and prompt lifecycle management.",
    duration: "6 Hours",
    level: "Intermediate",
    prerequisites: ["LLM, Multimodal & Generative AI Foundations"],
    learningOutcomes: [
      "Write clear prompts with explicit constraints",
      "Use examples and output schemas effectively",
      "Develop prompts through repeatable evaluation",
      "Reduce common hallucination and instruction failures",
      "Defend against basic prompt-injection risks",
    ],
    syllabus: [
      "Prompt anatomy: instructions, context, constraints and output formats",
      "System prompts, user prompts, few-shot examples, and role and task specification",
      "Structured prompting, JSON and schema outputs, extraction, classification and transformation",
      "Reasoning-oriented prompting patterns, decomposition, reflection and critique patterns",
      "Prompt templates, variables, reusable prompts and prompt versioning",
      "Prompt evaluation, testing, hallucination reduction and failure analysis",
      "Prompt-injection awareness, safety and responsible prompting",
    ],
    tools: ["LLM playgrounds", "Python SDKs", "JSON Schema", "Evaluation datasets"],
    projects: ["Create and evaluate a versioned prompt suite for a business workflow"],
    careerRelevance: ["AI Integration Engineer", "AI Product Engineer", "Prompt Engineer"],
    recommendedNext: ["rag-agentic-ai-context-engineering"],
  },

  {
    slug: "rag-agentic-ai-context-engineering",
    name: "RAG, Agentic AI & Context Engineering",
    tagline: "Ground models in organizational knowledge and connect them safely to tools and workflows.",
    description:
      "Design advanced AI applications using retrieval-augmented generation, vector and hybrid search, tool calling, stateful workflows, agents, memory, context management, and systematic evaluation.",
    duration: "30 Hours + 12 Hours",
    level: "Advanced",
    prerequisites: [
      "Prompt Engineering Fundamentals",
      "Backend & API Engineering",
      "LLM API experience",
    ],
    learningOutcomes: [
      "Build and evaluate a production-style RAG pipeline",
      "Choose chunking, indexing and retrieval strategies",
      "Design reliable tool-calling workflows",
      "Use agents only when the task benefits from autonomy",
      "Manage context, state, memory and human approval",
    ],
    syllabus: [
      "RAG architecture, document ingestion, parsing, cleaning, chunking and metadata",
      "Embeddings, vector databases, similarity search, filtering, hybrid search and reranking",
      "Retrieval strategies, query transformation, context construction, citations and grounded generation",
      "RAG evaluation, retrieval quality, answer quality, failure analysis and optimization",
      "Function and tool calling, tool design, external APIs, databases and application actions",
      "Agentic workflows: planning, routing, state, memory, checkpoints and human-in-the-loop controls",
      "LangChain, LangGraph, LlamaIndex and custom orchestration patterns",
      "Model Context Protocol concepts, tools, resources and AI-to-system integration patterns",
      "Context engineering: selection, compression, memory, permissions and context management",
      "Multi-agent concepts, deterministic workflows versus agents, and failure recovery",
      "Agent and RAG security, prompt injection, tool permissions and data boundaries",
      "Building production-style RAG and agentic applications",
    ],
    tools: [
      "Vector databases",
      "PostgreSQL/pgvector",
      "LLM SDKs",
      "Agent orchestration frameworks",
      "RAG evaluation tools",
    ],
    projects: [
      "Build an evaluated RAG assistant over organizational documents",
      "Build a tool-using agentic workflow with approval and recovery paths",
    ],
    careerRelevance: ["RAG Engineer", "Agentic AI Engineer", "AI Integration Engineer"],
    recommendedNext: ["production-ai-engineering-llmops"],
  },

  {
    slug: "production-ai-engineering-llmops",
    name: "Production AI Engineering & LLMOps",
    tagline: "Deploy, evaluate, observe, secure, and improve AI systems in production.",
    description:
      "Take AI applications from prototype to production with evaluation pipelines, tracing, observability, guardrails, security, CI/CD, deployment, cost controls, incident response, and continuous improvement.",
    duration: "12 Hours + 5 Hours",
    level: "Advanced",
    prerequisites: ["RAG, Agentic AI & Context Engineering", "Docker and deployment fundamentals"],
    learningOutcomes: [
      "Create offline and online AI evaluation systems",
      "Trace model, retrieval and tool behavior",
      "Deploy scalable and resilient AI services",
      "Apply security, privacy and guardrail controls",
      "Monitor quality, latency, cost and operational risk",
    ],
    syllabus: [
      "Production AI architecture, AI gateways and services, and synchronous versus asynchronous workloads",
      "AI evaluation, golden datasets, regression testing, quality metrics and human evaluation",
      "Prompt and model versioning, experimentation, release management and AI CI/CD",
      "Guardrails, structured validation, content filtering, fallbacks and failure handling",
      "AI security, prompt-injection defense, PII and privacy, secrets and access control",
      "Observability, tracing, logs, token usage, latency, cost per query and quality monitoring",
      "Caching, retries, timeouts, rate limiting, model routing and fallback strategies",
      "Docker, cloud deployment, managed AI services and production configuration",
      "Scaling, queues, concurrency, streaming, performance and cost optimization",
      "Production incidents, monitoring, feedback loops and continuous AI-system improvement",
    ],
    tools: ["Docker", "CI/CD", "Cloud platforms", "Tracing tools", "Evaluation frameworks"],
    projects: ["Productionize an AI application with evaluations, tracing, guardrails and an operations runbook"],
    careerRelevance: ["AI Integration Engineer", "LLMOps Engineer", "AI Platform Engineer"],
    recommendedNext: [],
  },

  /* -------------------------- BUSINESS / AUTOMATION ------------------------- */

  {
    slug: "automation-workflow-foundations",
    name: "Business Workflow & Automation Foundations",
    tagline:
      "Find the right process to automate before choosing an automation tool.",
    description:
      "Students learn process mapping, triggers, actions, conditions, data flow, APIs, webhooks, human approvals, error handling and ROI thinking.",
    duration: "4 weeks",
    level: "Beginner",
    prerequisites: [
      "No programming experience required",
      "Comfort using web applications",
    ],
    learningOutcomes: [
      "Map an existing business workflow",
      "Identify valuable and safe automation opportunities",
      "Design triggers, actions, branches and human approvals",
      "Understand API/webhook integration fundamentals",
      "Define success metrics and failure handling",
    ],
    syllabus: [
      "Process discovery and workflow mapping",
      "Automation suitability, risk and expected value",
      "Triggers, actions, conditions, loops and state",
      "Data mapping, transformation and validation",
      "APIs, JSON and webhook fundamentals",
      "Human-in-the-loop approvals and exception paths",
      "Credentials, privacy, permissions and auditability",
      "Automation measurement and ROI",
    ],
    tools: [
      "n8n/Make/Zapier concepts",
      "Postman basics",
      "Spreadsheets",
      "Webhook tools",
    ],
    projects: [
      "Map and redesign a real business process as an automation specification",
    ],
    careerRelevance: [
      "AI Automation Engineer",
      "Automation Specialist",
      "Operations Automation",
    ],
    recommendedNext: ["ai-automation-building"],
  },

  {
    slug: "ai-automation-building",
    name: "Building AI Automations",
    tagline:
      "Connect AI models, business tools and APIs into dependable workflows.",
    description:
      "A hands-on course in model APIs, structured AI outputs, document workflows, tool integrations, branching, agents where appropriate, databases and human approval.",
    duration: "6 weeks",
    level: "Beginner to intermediate",
    prerequisites: [
      "Workflow & Automation Foundations",
      "Basic understanding of APIs is helpful",
    ],
    learningOutcomes: [
      "Build multi-step AI workflows",
      "Connect common business applications through APIs",
      "Use structured model outputs reliably",
      "Design document and communication automations",
      "Add approval and escalation steps",
    ],
    syllabus: [
      "LLM/API basics for automation",
      "Prompting for extraction, classification, transformation and drafting",
      "Structured outputs and data validation",
      "Connecting email, spreadsheets, forms, databases and SaaS tools",
      "Document ingestion and lightweight retrieval concepts",
      "Branching, routing and multi-step workflows",
      "Agent-style workflows vs deterministic automation",
      "Human review, approval and escalation",
      "Error handling, retries and safe fallbacks",
    ],
    tools: [
      "n8n/Make/Zapier concepts",
      "LLM APIs",
      "Google Workspace concepts",
      "Webhooks",
      "REST APIs",
    ],
    projects: [
      "Lead/customer-support or document-processing AI automation with human approval",
    ],
    careerRelevance: ["AI Automation Engineer", "Automation Specialist"],
    recommendedNext: ["automation-operations"],
  },

  {
    slug: "automation-operations",
    name: "Automation Operations",
    tagline: "Make automations observable, recoverable and safe to maintain.",
    description:
      "The finishing course for automation builders: logging, monitoring, retries, credentials, permissions, versioning, cost, documentation and operational handoff.",
    duration: "4 weeks",
    level: "Intermediate",
    prerequisites: ["Experience building at least one automation"],
    learningOutcomes: [
      "Monitor automation health and failures",
      "Design retry and recovery paths",
      "Protect credentials and sensitive data",
      "Document workflows for maintainability",
      "Measure cost and operational value",
    ],
    syllabus: [
      "Workflow logs, execution history and failure taxonomy",
      "Retries, idempotency, dead-letter/manual recovery concepts",
      "Secrets, permissions and least privilege",
      "Data privacy, retention and responsible AI use",
      "Versioning, testing and change management",
      "Cost monitoring and usage controls",
      "Documentation, ownership and operational handoff",
    ],
    tools: [
      "Automation platform monitoring",
      "Secrets management concepts",
      "Spreadsheets/dashboards",
    ],
    projects: [
      "Production-readiness audit and operations playbook for an existing automation",
    ],
    careerRelevance: ["AI Automation Engineer", "Automation Consultant"],
    recommendedNext: [],
  },

  /* ------------------------------ PRODUCTIVITY ------------------------------ */

  {
    slug: "ai-literacy-productivity",
    name: "AI Productivity Essentials",
    tagline:
      "Use AI as a practical work partner without outsourcing your judgment.",
    description:
      "A compact standalone course for students and professionals covering AI literacy, prompting, verification, research, writing, documents, spreadsheets, meetings, learning, privacy and responsible use.",
    duration: "6 weeks",
    level: "Beginner",
    prerequisites: [
      "No technical background required",
      "A laptop and internet connection",
    ],
    learningOutcomes: [
      "Choose appropriate AI tools for everyday tasks",
      "Give AI useful context and constraints",
      "Verify claims and reduce hallucination risk",
      "Use AI for research, learning, writing and analysis",
      "Work with documents, tables and repetitive office tasks",
      "Protect confidential information and use AI responsibly",
    ],
    syllabus: [
      "What modern AI can and cannot do",
      "Prompt structure: task, context, constraints, examples and output format",
      "Iterative prompting, critique, comparison and verification",
      "Web research, source evaluation, synthesis and citation discipline",
      "Learning: explanations, questioning, practice and study planning",
      "Writing: ideation, editing, summarization and professional communication",
      "Documents, spreadsheets, data analysis and presentation support",
      "Meetings, notes, planning and repeatable personal workflows",
      "Hallucinations, bias, privacy, confidential data and copyright awareness",
      "Building a personal AI work system without over-automation",
    ],
    tools: [
      "ChatGPT-class assistants",
      "Search/research tools",
      "Documents",
      "Spreadsheets",
      "Presentation tools",
    ],
    projects: [
      "AI-assisted research brief with verified sources",
      "Personal study/work workflow",
      "Professional productivity portfolio task",
    ],
    careerRelevance: [
      "Students",
      "Professionals",
      "Researchers",
      "Freelancers",
      "Knowledge workers",
    ],
    recommendedNext: [],
  },
];

/**
 * Backwards-compatible lightweight course list for the existing UI.
 */
export const skillCourses: SkillCourse[] = courseDetails.map(
  ({ slug, name, tagline, duration, learningOutcomes, syllabus }) => ({
    slug,
    name,
    summary: tagline,
    duration,
    learningOutcomes,
    syllabus,
  }),
);

/* -------------------------------------------------------------------------- */
/*                              TRACK INFORMATION                             */
/* -------------------------------------------------------------------------- */

export const trackDetails: Record<string, TrackDetail> = {
  "ai-engineer": {
    slug: "ai-engineer",
    roleDescription:
      "AI Integration Engineers turn foundation-model capabilities into dependable product features. They connect models to existing applications, APIs, organizational data and tools, then evaluate, secure, observe and optimize those systems.",
    idealFor: [
      "Software developers who want to move into applied AI",
      "Students interested in LLMs without becoming model researchers first",
      "Backend-oriented engineers interested in RAG, agents and AI products",
    ],
    careerPath: [
      "Backend/Software Intern or Junior Developer",
      "Junior Applied AI Developer",
      "AI Integration Engineer / Applied AI Engineer",
      "Senior Applied AI Engineer",
      "AI Platform / AI Solutions Lead",
    ],
    opportunities: [
      "AI-enabled SaaS products",
      "Remote applied-AI engineering",
      "Enterprise AI integration",
      "RAG/document intelligence",
      "AI agents and workflow systems",
      "AI consulting and implementation",
    ],
    hiringSkills: [
      "Python",
      "Backend APIs",
      "LLM APIs",
      "Structured outputs",
      "Embeddings",
      "Vector search",
      "RAG",
      "Tool/function calling",
      "Agent workflows",
      "Evaluation",
      "Guardrails/security",
      "Observability",
      "Docker/cloud basics",
    ],
    portfolioStandard: [
      "One evaluated RAG system",
      "One tool-using workflow or agent",
      "Explicit evaluation dataset and metrics",
      "Tracing/cost/latency evidence",
      "Security and prompt-injection considerations",
      "Production-style API deployment",
    ],
  },

  "devops-engineer": {
    slug: "devops-engineer",
    roleDescription:
      "DevOps and cloud engineers automate software delivery and operate the infrastructure on which applications run. The role combines Linux, networking, CI/CD, containers, cloud, infrastructure as code, observability and reliability.",
    idealFor: [
      "Students who enjoy Linux, infrastructure and troubleshooting",
      "Developers interested in deployment and platform reliability",
      "Students who like systems more than application UI work",
    ],
    careerPath: [
      "IT/Linux/Cloud Intern or Junior Operations Engineer",
      "Junior DevOps Engineer",
      "DevOps / Cloud Engineer",
      "Senior DevOps / Platform Engineer",
      "SRE / Platform Lead / Cloud Architect",
    ],
    opportunities: [
      "Software product companies",
      "Cloud and infrastructure teams",
      "Remote DevOps/platform roles",
      "Managed services and consulting",
      "SaaS and high-availability systems",
    ],
    hiringSkills: [
      "Linux",
      "Networking",
      "Bash/scripting",
      "Git",
      "Docker",
      "CI/CD",
      "AWS/Azure/GCP",
      "Terraform",
      "Kubernetes",
      "Monitoring",
      "Security fundamentals",
      "Incident troubleshooting",
    ],
    portfolioStandard: [
      "Containerized multi-service application",
      "Automated CI/CD",
      "Infrastructure as code",
      "Cloud deployment",
      "Monitoring dashboard and alerts",
      "Operational runbook and recovery thinking",
    ],
  },

  "qa-test-automation-engineer": {
    slug: "qa-test-automation-engineer",
    roleDescription:
      "QA/Test Automation Engineers improve software reliability through risk analysis, test design, API and browser automation, CI integration, performance checks and production-quality feedback. Strong engineers understand both testing and software development.",
    idealFor: [
      "Students who enjoy systematic investigation and finding edge cases",
      "Beginners seeking an accessible software-engineering entry path",
      "Developers interested in SDET and quality engineering",
    ],
    careerPath: [
      "QA Intern / Trainee QA",
      "QA Engineer",
      "QA Automation Engineer",
      "SDET / Quality Engineer",
      "Senior SDET / QA Lead / Quality Architect",
    ],
    opportunities: [
      "Nepal software and outsourcing firms",
      "Remote QA/automation teams",
      "Fintech and regulated systems",
      "SaaS release engineering",
      "SDET and developer-productivity teams",
    ],
    hiringSkills: [
      "Testing fundamentals",
      "Test-case design",
      "API testing",
      "SQL",
      "Playwright/Selenium/Cypress",
      "Programming",
      "Git",
      "CI/CD",
      "Performance testing basics",
      "Debugging and observability",
    ],
    portfolioStandard: [
      "Professional manual test strategy",
      "API automation suite",
      "Browser automation framework",
      "CI execution",
      "Clear defect reports",
      "Performance/reliability testing evidence",
    ],
  },

  "ai-automation-engineer": {
    slug: "ai-automation-engineer",
    roleDescription:
      "AI Automation Engineers analyze business workflows and connect AI models, APIs and SaaS tools into reliable automations with appropriate human controls.",
    idealFor: [
      "Business-oriented technical learners",
      "Operators and consultants",
      "Students interested in practical AI implementation without deep software engineering",
    ],
    careerPath: [
      "Automation Builder",
      "AI Automation Specialist",
      "AI Automation Engineer",
      "Automation Consultant / Solutions Specialist",
    ],
    opportunities: [
      "Small-business automation",
      "Internal operations",
      "Freelance automation",
      "AI implementation consulting",
    ],
    hiringSkills: [
      "Process mapping",
      "Automation tools",
      "LLM APIs",
      "APIs/webhooks",
      "Structured data",
      "Error handling",
      "Human approvals",
      "Monitoring",
    ],
    portfolioStandard: [
      "A real business workflow map",
      "Multi-step AI automation",
      "Failure/approval handling",
      "Operational documentation",
    ],
  },

  "ai-essentials": {
    slug: "ai-essentials",
    roleDescription:
      "AI Productivity Essentials is not positioned as a technical job role. It is a professional capability track that helps students and knowledge workers use AI effectively and responsibly in everyday work.",
    idealFor: [
      "Students",
      "Researchers",
      "Office professionals",
      "Freelancers",
      "Career switchers",
    ],
    careerPath: [
      "AI-aware learner",
      "AI-enabled professional",
      "Role-specific AI power user",
    ],
    opportunities: [
      "Faster research and learning",
      "Better professional communication",
      "Improved document and analysis workflows",
      "AI-enabled freelancing and knowledge work",
    ],
    hiringSkills: [
      "AI literacy",
      "Prompting",
      "Research",
      "Verification",
      "Communication",
      "Data/document workflows",
      "Responsible AI use",
    ],
    portfolioStandard: [
      "Verified research output",
      "Repeatable professional workflow",
      "Demonstration of responsible AI use",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                     EXISTING ROLE-GUIDANCE UI COMPATIBILITY                */
/* -------------------------------------------------------------------------- */

export const trackGuidance: Record<string, RoleGuidance> = {
  "ai-engineer": {
    prerequisites: [
      "Interest in software development, AI and building practical applications",
      "Basic computer skills, including installing and using applications",
      "Basic internet, browser and file-management skills",
      "Comfort learning technical concepts through hands-on practice",
      "10–12 focused hours each week",
    ],
    academics: [
      "Artificial Intelligence",
      "Software Engineering",
      "Algorithms",
      "Database Management Systems",
      "Computer Networks",
    ],
  },

  "devops-engineer": {
    prerequisites: [
      "Basic programming or scripting familiarity",
      "Comfort learning through the command line",
      "10–12 focused hours each week",
      "A laptop that can run Linux environments and containers",
    ],
    academics: [
      "Operating Systems",
      "Computer Networks",
      "Distributed Systems",
      "Information Security",
      "Software Engineering",
    ],
  },

  "qa-test-automation-engineer": {
    prerequisites: [
      "No previous QA job required",
      "Basic programming logic is helpful",
      "8–10 focused hours each week",
      "Interest in systematic investigation and software quality",
    ],
    academics: [
      "Software Engineering",
      "Software Testing & Quality Assurance",
      "Database Management Systems",
      "Computer Networks",
      "Data Structures & Algorithms",
    ],
  },

  "ai-automation-engineer": {
    prerequisites: [
      "No programming experience required",
      "Interest in improving business workflows",
      "6–8 focused hours each week",
      "A working laptop and stable internet connection",
    ],
    academics: [
      "Management Information Systems",
      "Systems Analysis & Design",
      "Business Process Management",
      "Artificial Intelligence Fundamentals",
      "Project Management",
    ],
  },

  "ai-essentials": {
    prerequisites: [
      "No technical background required",
      "Curiosity and willingness to experiment",
      "4–6 focused hours each week",
      "A laptop and internet connection",
    ],
    academics: [
      "Critical Thinking",
      "Information Literacy",
      "Research Methods",
      "Communication",
      "Digital Ethics",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                         OPTIONAL CURRICULUM HELPERS                        */
/* -------------------------------------------------------------------------- */

/**
 * Find every track that includes a course.
 * Useful for displaying "Also included in..." on individual course pages.
 */
export const getTracksForCourse = (courseSlug: string) =>
  tracks.filter((track) => track.courseSlugs.includes(courseSlug));

/**
 * Find full course information for a track while preserving track order.
 */
export const getTrackCourses = (trackSlug: string) => {
  const track = tracks.find((item) => item.slug === trackSlug);
  if (!track) return [];

  return track.courseSlugs
    .map((slug) => courseDetails.find((course) => course.slug === slug))
    .filter((course): course is CourseDetail => Boolean(course));
};
