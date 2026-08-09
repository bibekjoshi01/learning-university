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
    slug: "ai-backend-engineer",
    schoolSlug: "software-engineering-ai",
    name: "Backend AI Engineer",
    summary:
      "Build secure APIs, databases, asynchronous services, integrations, and AI-ready backend systems.",
    duration: "28 weeks",
    difficulty: "Beginner to intermediate",
    projectCount: 7,
    outcomes: [
      "Backend Engineer",
      "Backend AI Engineer",
      "Python Backend Developer",
      "API Engineer",
      "AI Integration Engineer",
    ],
    courseSlugs: [
      "python-software-foundations",
      "database-sql-engineering",
      "backend-api-engineering",
      "scalable-backend-systems",
      "production-software-cloud",
    ],
  },
  {
    slug: "ai-full-stack-engineer",
    schoolSlug: "software-engineering-ai",
    name: "FullStack AI Engineer",
    summary:
      "Build complete modern products across frontend, backend, data, deployment, and AI-powered features.",
    duration: "32 weeks",
    difficulty: "Beginner to intermediate",
    projectCount: 8,
    outcomes: [
      "FullStack Engineer",
      "FullStack AI Engineer",
      "Software Engineer",
      "Product Engineer",
      "AI Product Engineer",
    ],
    courseSlugs: [
      "web-javascript-foundations",
      "frontend-react-engineering",
      "database-sql-engineering",
      "backend-api-engineering",
      "fullstack-product-engineering",
      "production-software-cloud",
    ],
  },
  {
    slug: "ai-integration-engineer",
    schoolSlug: "software-engineering-ai",
    name: "AI Integration Engineer",
    summary:
      "Engineer production AI features using model APIs, structured outputs, retrieval, tools, agents, evaluation, and guardrails.",
    duration: "24 weeks",
    difficulty: "Intermediate",
    projectCount: 6,
    outcomes: [
      "AI Integration Engineer",
      "Applied AI Engineer",
      "AI Solutions Engineer",
      "AI Product Engineer",
    ],
    courseSlugs: [
      "backend-api-engineering",
      "llm-application-engineering",
      "rag-agentic-systems",
      "production-ai-systems",
    ],
  },
  {
    slug: "data-engineer",
    schoolSlug: "software-engineering-ai",
    name: "Data Engineer",
    summary:
      "Build trustworthy data models, ETL/ELT pipelines, orchestration, streaming workflows, and cloud data platforms.",
    duration: "28 weeks",
    difficulty: "Intermediate",
    projectCount: 7,
    outcomes: [
      "Data Engineer",
      "Analytics Engineer",
      "Data Platform Engineer",
      "ETL/ELT Developer",
    ],
    courseSlugs: [
      "python-software-foundations",
      "database-sql-engineering",
      "analytics-data-modeling",
      "data-pipelines-engineering",
      "cloud-data-systems",
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
  {
    slug: "machine-learning-engineer",
    schoolSlug: "software-engineering-ai",
    name: "ML Engineer",
    summary:
      "Build reproducible machine-learning systems from data preparation and modeling through deep learning, serving, and MLOps.",
    duration: "36 weeks",
    difficulty: "Advanced",
    projectCount: 8,
    outcomes: [
      "Machine Learning Engineer",
      "Applied ML Engineer",
      "Junior ML Engineer",
      "MLOps Engineer",
    ],
    courseSlugs: [
      "python-software-foundations",
      "database-sql-engineering",
      "math-statistics-ml",
      "machine-learning-engineering",
      "deep-learning-engineering",
      "mlops-production-ml",
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
  {
    slug: "python-software-foundations",
    name: "Python & Software Development Foundations",
    tagline:
      "Learn Python as an engineering tool, not just a programming language.",
    description:
      "A practical programming foundation for backend, data, and ML careers. Students learn Python, problem solving, Git, project structure, debugging, files, APIs, testing fundamentals, and professional development workflow.",
    duration: "6 weeks",
    level: "Beginner",
    prerequisites: [
      "No professional programming experience required",
      "Basic computer literacy",
      "Ability to install development tools",
    ],
    learningOutcomes: [
      "Write clear Python programs using functions, modules, classes, and standard data structures",
      "Break larger problems into testable units",
      "Work with files, JSON, CSV, packages, virtual environments, and external libraries",
      "Consume HTTP APIs from Python",
      "Debug exceptions and use basic logging and tests",
      "Use Git and GitHub in a professional development workflow",
    ],
    syllabus: [
      "Python execution, syntax, variables, types, operators, input/output",
      "Conditionals, loops, functions, scope, decomposition, and clean-code habits",
      "Lists, dictionaries, sets, tuples, iteration, comprehensions, and common algorithms",
      "Modules, packages, pip, virtual environments, requirements, and project structure",
      "Object-oriented programming essentials and when composition is preferable",
      "Exceptions, debugging, logging, type hints, linting, and testing fundamentals",
      "Files, JSON, CSV, environment variables, and configuration",
      "HTTP fundamentals, requests, REST APIs, JSON responses, authentication basics",
      "Git, GitHub, branching, merging, pull requests, README and issue-based workflow",
    ],
    tools: [
      "Python",
      "VS Code",
      "Git",
      "GitHub",
      "venv",
      "pip",
      "requests/httpx",
      "pytest",
    ],
    projects: [
      "CLI personal finance or inventory application with persistent data",
      "API-powered Python application with tests and professional repository structure",
    ],
    careerRelevance: [
      "Backend engineering",
      "Data engineering",
      "Machine learning",
      "Automation",
      "DevOps scripting",
    ],
    recommendedNext: [
      "database-sql-engineering",
      "backend-api-engineering",
      "math-statistics-ml",
    ],
  },

  {
    slug: "web-javascript-foundations",
    name: "Web & JavaScript Foundations",
    tagline:
      "Understand how the browser, internet, JavaScript, and web applications actually work.",
    description:
      "A framework-independent foundation for full-stack engineering. Students learn HTML, CSS, JavaScript, the browser, HTTP, REST APIs, asynchronous programming, Git, accessibility, and basic web security before moving to React.",
    duration: "6 weeks",
    level: "Beginner",
    prerequisites: [
      "No professional web-development experience required",
      "Basic computer literacy",
    ],
    learningOutcomes: [
      "Explain the browser-to-server request lifecycle",
      "Build semantic, responsive, accessible interfaces",
      "Write modern JavaScript using modules and asynchronous code",
      "Consume REST APIs and diagnose HTTP/network failures",
      "Use browser developer tools effectively",
      "Recognize common client-side security mistakes",
    ],
    syllabus: [
      "Internet fundamentals: clients, servers, DNS, IP, ports, TCP intuition, HTTP and HTTPS",
      "URLs, methods, headers, status codes, cookies, caching, CORS and request/response lifecycle",
      "Semantic HTML, forms, accessibility and document structure",
      "CSS cascade, box model, Flexbox, Grid, responsive design and reusable styling",
      "JavaScript values, functions, arrays, objects, scope, modules and modern syntax",
      "DOM, events, forms, browser storage and rendering",
      "Promises, async/await, fetch, API consumption and error handling",
      "Git/GitHub workflow and npm/package-management fundamentals",
      "Frontend security basics: XSS, credentials, browser storage and safe rendering",
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Browser DevTools",
      "Git",
      "GitHub",
      "npm",
      "Postman",
    ],
    projects: [
      "Responsive multi-page website built from a product specification",
      "Vanilla JavaScript application consuming a REST API",
    ],
    careerRelevance: [
      "Full-stack engineering",
      "Frontend development",
      "QA automation",
      "Backend web fundamentals",
    ],
    recommendedNext: ["frontend-react-engineering", "backend-api-engineering"],
  },

  {
    slug: "database-sql-engineering",
    name: "SQL & Database Engineering",
    tagline:
      "Design correct data models and write SQL that survives production.",
    description:
      "A reusable database course for backend, full-stack, data, and ML students. It covers relational modeling, PostgreSQL, SQL, constraints, transactions, indexes, query plans, migrations, security, and application access patterns.",
    duration: "5 weeks",
    level: "Beginner to intermediate",
    prerequisites: [
      "Basic programming familiarity",
      "No previous database course required",
    ],
    learningOutcomes: [
      "Design normalized relational schemas from real requirements",
      "Write production-level SQL queries",
      "Use transactions and constraints to preserve correctness",
      "Choose and evaluate indexes",
      "Read query plans and diagnose common performance problems",
      "Manage migrations, permissions, backups, and safe schema evolution",
    ],
    syllabus: [
      "Relational concepts, entities, relationships, keys, cardinality and normalization",
      "PostgreSQL types, constraints, primary/foreign keys and schema design",
      "SELECT, INSERT, UPDATE, DELETE, joins, aggregations and grouping",
      "Subqueries, CTEs, window functions and analytical SQL",
      "Transactions, ACID, isolation, locking and concurrency fundamentals",
      "Indexes, B-tree intuition, EXPLAIN/EXPLAIN ANALYZE and query optimization",
      "Pagination, connection pooling, ORM behavior and N+1 problems",
      "Migrations, backups, restore, roles, privileges and database security",
      "Relational vs document/key-value databases and when Redis/Mongo-style systems fit",
    ],
    tools: [
      "PostgreSQL",
      "SQL",
      "DBeaver or pgAdmin",
      "EXPLAIN ANALYZE",
      "ORM examples",
    ],
    projects: [
      "Production-style database for commerce, booking, healthcare, or learning platform",
      "SQL reporting and query-optimization challenge on realistic data",
    ],
    careerRelevance: [
      "Backend engineering",
      "Full-stack engineering",
      "Data engineering",
      "Machine learning",
    ],
    recommendedNext: [
      "backend-api-engineering",
      "analytics-data-modeling",
      "data-pipelines-engineering",
    ],
  },

  {
    slug: "backend-api-engineering",
    name: "Backend & API Engineering",
    tagline: "Build secure, maintainable APIs and services with Python.",
    description:
      "The core application-backend course shared by Backend AI, FullStack AI, and AI Integration tracks. Students build real services using Python, FastAPI/Django concepts, PostgreSQL, authentication, authorization, caching, background work, integrations, testing, and API documentation.",
    duration: "8 weeks",
    level: "Intermediate",
    prerequisites: [
      "Comfort writing Python",
      "HTTP fundamentals",
      "Basic SQL recommended",
    ],
    learningOutcomes: [
      "Design stable REST API contracts",
      "Implement authentication, authorization, validation, pagination and error handling",
      "Build transactional database-backed services",
      "Use Redis and asynchronous/background work appropriately",
      "Integrate external APIs and webhooks safely",
      "Write unit, integration and API tests",
      "Document APIs with OpenAPI",
    ],
    syllabus: [
      "Backend architecture, request lifecycle and separation of concerns",
      "FastAPI and Django/DRF architectural patterns",
      "REST design, resources, status codes, filtering, pagination, versioning and OpenAPI",
      "Validation, serialization, configuration, dependency injection and structured errors",
      "Database access, ORM patterns, transactions, migrations and query efficiency",
      "Authentication: passwords, sessions, JWT concepts, OAuth concepts and token lifecycle",
      "Authorization: RBAC, permissions, ownership and multi-tenant boundaries",
      "Redis caching, expiration, invalidation and rate-limiting concepts",
      "Background jobs, queues, retries, idempotency and scheduled tasks",
      "Third-party APIs, webhook verification, files/object storage and email",
      "Unit, integration, API and contract testing",
      "Security fundamentals: input handling, secrets, dependencies and OWASP awareness",
    ],
    tools: [
      "Python",
      "FastAPI",
      "Django/DRF concepts",
      "PostgreSQL",
      "Redis",
      "Celery/RQ concepts",
      "Pytest",
      "Postman",
      "OpenAPI",
      "Docker basics",
    ],
    projects: [
      "Multi-role SaaS API with authentication, RBAC, PostgreSQL and tests",
      "Order/booking service with Redis, background jobs and webhook integration",
    ],
    careerRelevance: [
      "Backend Engineer",
      "Backend AI Engineer",
      "FullStack Engineer",
      "AI Integration Engineer",
      "API Engineer",
    ],
    recommendedNext: [
      "scalable-backend-systems",
      "fullstack-product-engineering",
      "llm-application-engineering",
      "production-software-cloud",
    ],
  },

  {
    slug: "scalable-backend-systems",
    name: "Scalable Backend Systems",
    tagline:
      "Move from CRUD APIs to reliable distributed application backends.",
    description:
      "An advanced backend specialization covering concurrency, asynchronous processing, queues, caching, consistency, realtime communication, service boundaries, resilience, performance, and system-design fundamentals.",
    duration: "6 weeks",
    level: "Intermediate",
    prerequisites: [
      "Backend & API Engineering or equivalent experience",
      "SQL/database fundamentals",
    ],
    learningOutcomes: [
      "Design resilient asynchronous workflows",
      "Choose caching and messaging patterns deliberately",
      "Reason about consistency, idempotency and distributed failure",
      "Build realtime service features",
      "Profile and improve backend performance",
      "Explain architecture tradeoffs in system-design interviews",
    ],
    syllabus: [
      "Concurrency, asynchronous I/O, workers and application throughput",
      "Queues, pub/sub, event-driven architecture and delivery semantics",
      "Redis patterns, caching strategies, invalidation, locks and rate limiting",
      "Idempotency, retries, timeouts, circuit-breaker concepts and failure recovery",
      "WebSockets, Server-Sent Events and realtime architecture",
      "Transactions across boundaries, eventual consistency and saga/outbox concepts",
      "Monoliths, modular monoliths, microservices and service boundaries",
      "Load balancing, horizontal scaling, stateless services and session/state design",
      "Performance profiling, query optimization and capacity reasoning",
      "System-design exercises: feeds, notifications, file processing and API platforms",
    ],
    tools: [
      "Python",
      "FastAPI/Django",
      "Redis",
      "Celery",
      "RabbitMQ/Kafka concepts",
      "WebSockets/SSE",
      "Docker",
    ],
    projects: [
      "Event-driven notification or processing platform with retries and idempotency",
      "Realtime service with documented system-design decisions and load test",
    ],
    careerRelevance: [
      "Backend Engineer",
      "Backend AI Engineer",
      "Software Engineer",
    ],
    recommendedNext: [
      "production-software-cloud",
      "llm-application-engineering",
    ],
  },

  {
    slug: "frontend-react-engineering",
    name: "Frontend Engineering with React & TypeScript",
    tagline:
      "Engineer maintainable interfaces instead of assembling React demos.",
    description:
      "A production-oriented frontend course covering TypeScript, React, Next.js concepts, component architecture, state, forms, APIs, authentication UI, accessibility, testing, rendering and performance.",
    duration: "8 weeks",
    level: "Intermediate",
    prerequisites: [
      "Web & JavaScript Foundations",
      "Comfort with modern JavaScript and asynchronous programming",
    ],
    learningOutcomes: [
      "Build typed React applications",
      "Design reusable component and feature boundaries",
      "Manage client and server state appropriately",
      "Implement forms, authentication flows, routing and protected UI",
      "Test components and user flows",
      "Improve accessibility and frontend performance",
    ],
    syllabus: [
      "TypeScript for web applications: types, interfaces, generics and narrowing",
      "React rendering model, components, props, state, hooks and composition",
      "Routing, layouts, Next.js/application-framework concepts and rendering strategies",
      "Forms, validation, reusable UI, accessibility and design-system thinking",
      "Server state, caching, loading/error states and API client architecture",
      "Authentication UI, token/session boundaries and role-aware interfaces",
      "State-management tradeoffs and feature-oriented architecture",
      "Testing components, integration behavior and browser flows",
      "Performance: rendering, bundles, images, caching and Core Web Vitals concepts",
      "Frontend security, environment configuration and deployment",
    ],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query concepts",
      "React Hook Form concepts",
      "Testing Library",
      "Vitest/Jest",
      "Playwright basics",
    ],
    projects: [
      "Authenticated admin/product dashboard connected to a real API",
      "Multi-role frontend with forms, validation, tests and deployment",
    ],
    careerRelevance: [
      "FullStack Engineer",
      "Frontend-capable Product Engineer",
      "AI Product Engineer",
    ],
    recommendedNext: [
      "fullstack-product-engineering",
      "production-software-cloud",
    ],
  },

  {
    slug: "fullstack-product-engineering",
    name: "FullStack Product Engineering",
    tagline:
      "Integrate frontend, backend, data and product behavior into one coherent system.",
    description:
      "This course does not repeat frontend or backend syntax. It teaches end-to-end architecture, authentication across boundaries, realtime features, files, background work, testing, integration contracts and product delivery.",
    duration: "5 weeks",
    level: "Intermediate",
    prerequisites: [
      "Frontend Engineering",
      "Backend & API Engineering",
      "Database fundamentals",
    ],
    learningOutcomes: [
      "Design an end-to-end application architecture",
      "Coordinate frontend/backend contracts and authentication",
      "Implement realtime, file and notification workflows",
      "Protect integration boundaries with automated tests",
      "Make pragmatic architecture decisions for startup/product environments",
    ],
    syllabus: [
      "Product decomposition, domain boundaries and frontend/backend contracts",
      "Authentication, authorization and role permissions across the full stack",
      "Uploads, object storage, background jobs, email and notification systems",
      "WebSockets/SSE and realtime product features",
      "Caching, pagination, optimistic UI and failure recovery",
      "API contract testing, end-to-end testing and staging environments",
      "Monorepo vs separated repositories, configuration and environment strategy",
      "Release workflows, migrations, feature flags and operational handoff",
    ],
    tools: [
      "React/Next.js",
      "FastAPI/Django",
      "PostgreSQL",
      "Redis",
      "WebSockets/SSE",
      "Playwright",
      "Docker",
    ],
    projects: [
      "Team-built production SaaS capstone with architecture document, tests and deployment",
    ],
    careerRelevance: [
      "FullStack AI Engineer",
      "FullStack Engineer",
      "Product Engineer",
      "Startup Software Engineer",
    ],
    recommendedNext: [
      "production-software-cloud",
      "llm-application-engineering",
    ],
  },

  {
    slug: "production-software-cloud",
    name: "Production Software & Cloud Delivery",
    tagline:
      "Turn a working application into software that can actually be operated.",
    description:
      "A shared finishing course for Backend AI and FullStack AI. Students learn Linux deployment fundamentals, Docker, CI/CD, reverse proxies, cloud primitives, secrets, observability, performance, backups and safe release practices.",
    duration: "5 weeks",
    level: "Intermediate",
    prerequisites: [
      "Ability to build a functional backend or full-stack application",
      "Git fundamentals",
    ],
    learningOutcomes: [
      "Containerize an application correctly",
      "Create CI pipelines for tests and builds",
      "Deploy application services with secure configuration",
      "Instrument logs, metrics and health checks",
      "Plan migrations, rollback, backups and basic incident response",
    ],
    syllabus: [
      "Linux server/application runtime fundamentals",
      "Docker images, containers, volumes, networks and Compose",
      "Reverse proxy, DNS, TLS and application-server concepts",
      "Configuration, secrets and environment management",
      "CI/CD pipelines, automated tests, artifacts, migrations and deployment gates",
      "Cloud compute, managed databases, object storage and networking fundamentals",
      "Structured logging, health checks, metrics, tracing concepts and alerts",
      "Backups, restore, rollback, release safety and incident fundamentals",
      "Performance baselines, dependency security and production-readiness review",
    ],
    tools: [
      "Linux",
      "Docker",
      "Docker Compose",
      "Nginx concepts",
      "GitHub Actions",
      "AWS/Azure/GCP concepts",
      "OpenTelemetry concepts",
    ],
    projects: [
      "Production deployment of an existing capstone with CI/CD, TLS, monitoring and recovery documentation",
    ],
    careerRelevance: [
      "Backend AI Engineer",
      "FullStack AI Engineer",
      "Software Engineer",
    ],
    recommendedNext: [
      "llm-application-engineering",
      "cloud-infrastructure-iac",
    ],
  },

  {
    slug: "llm-application-engineering",
    name: "LLM & AI Application Engineering",
    tagline:
      "Build model-powered features as engineered software, not prompt demos.",
    description:
      "The foundation of the AI Integration track. Students learn how modern model APIs behave, prompting, structured outputs, streaming, tool calling, embeddings, multimodality, model selection, provider abstraction, token/cost reasoning and evaluation basics.",
    duration: "6 weeks",
    level: "Intermediate",
    prerequisites: [
      "Comfort with Python",
      "Ability to consume APIs",
      "Backend/API development strongly recommended",
    ],
    learningOutcomes: [
      "Integrate major LLM APIs through clean application boundaries",
      "Design robust prompts and structured outputs",
      "Implement streaming and tool/function calling",
      "Use embeddings and semantic search fundamentals",
      "Measure quality, latency, tokens and cost",
      "Recognize hallucination, injection, privacy and reliability risks",
    ],
    syllabus: [
      "AI application architecture: models, inference APIs, embeddings, speech and multimodality",
      "Tokens, context windows, sampling, model behavior and limitations",
      "System/user/tool messages and prompt design principles",
      "Structured outputs, JSON schemas, validation and constrained generation",
      "Streaming responses, tool/function calling and deterministic application control",
      "Embeddings, semantic similarity and vector-search intuition",
      "Multimodal input/output patterns and model capability selection",
      "Provider abstraction, model routing, fallbacks and API-version change",
      "Latency, tokens, cost, caching and basic throughput reasoning",
      "Evaluation fundamentals, safety, privacy, prompt injection and responsible use",
    ],
    tools: [
      "Python",
      "FastAPI",
      "OpenAI-compatible APIs",
      "Anthropic/Gemini concepts",
      "Pydantic",
      "Embeddings APIs/models",
    ],
    projects: [
      "Structured document extraction API with validation and evaluation cases",
      "Streaming multi-model AI service with tool calling and cost/latency reporting",
    ],
    careerRelevance: [
      "AI Integration Engineer",
      "Applied AI Engineer",
      "AI Solutions Engineer",
      "Backend AI Engineer",
    ],
    recommendedNext: ["rag-agentic-systems", "production-ai-systems"],
  },

  {
    slug: "rag-agentic-systems",
    name: "RAG, Agents & Context Engineering",
    tagline:
      "Build AI systems that retrieve evidence, use tools and act within controlled boundaries.",
    description:
      "A specialization in retrieval-augmented generation and agentic systems. It covers ingestion, chunking, embeddings, hybrid retrieval, reranking, citations, tool orchestration, state, memory, human approval, MCP concepts, agent failure modes and evaluation.",
    duration: "7 weeks",
    level: "Intermediate",
    prerequisites: [
      "LLM & AI Application Engineering",
      "Backend/API fundamentals",
    ],
    learningOutcomes: [
      "Design complete RAG pipelines",
      "Evaluate retrieval independently from generation",
      "Build tool-using and stateful AI workflows",
      "Design safe human-in-the-loop actions",
      "Diagnose context, retrieval, reasoning and tool failures separately",
      "Apply permission boundaries and prompt-injection defenses",
    ],
    syllabus: [
      "RAG architecture and when retrieval is preferable to fine-tuning",
      "Document ingestion, parsing, cleaning, chunking and metadata design",
      "Embeddings, vector databases, similarity search and filtering",
      "Hybrid lexical/semantic retrieval, reranking, query transformation and citations",
      "Retrieval evaluation: recall, ranking, groundedness and test-set construction",
      "Tool schemas, function calling, deterministic workflows and agent loops",
      "State machines, memory, planning, checkpoints and human approval",
      "Agent framework patterns and when not to use an agent",
      "MCP/tool-server concepts and external system integration",
      "Context engineering, permissions, prompt injection, data boundaries and tool security",
      "Agent/RAG observability and failure analysis",
    ],
    tools: [
      "Python",
      "pgvector/Qdrant concepts",
      "LangChain/LangGraph concepts",
      "Rerankers",
      "FastAPI",
      "MCP concepts",
    ],
    projects: [
      "Citation-grounded document intelligence/RAG system with retrieval evaluation",
      "Tool-using operational agent with state, approval gates and failure recovery",
    ],
    careerRelevance: [
      "AI Integration Engineer",
      "Applied AI Engineer",
      "AI Solutions Engineer",
    ],
    recommendedNext: ["production-ai-systems"],
  },

  {
    slug: "production-ai-systems",
    name: "Production AI Systems & LLMOps",
    tagline: "Evaluate, secure, observe and scale probabilistic AI systems.",
    description:
      "The production course for AI Integration Engineers. Students learn evaluation datasets, regression testing, tracing, AI observability, model/prompt versioning, guardrails, routing, caching, fallbacks, security, privacy, cost control and scalable service architecture.",
    duration: "6 weeks",
    level: "Advanced",
    prerequisites: [
      "At least one working LLM or RAG application",
      "Backend/API and Docker fundamentals",
    ],
    learningOutcomes: [
      "Create repeatable evaluation suites for AI behavior",
      "Trace prompts, retrieval, tools, latency, tokens and cost",
      "Design fallbacks, caching, routing and rate-control strategies",
      "Apply AI-specific security and privacy controls",
      "Deploy and monitor scalable AI services",
      "Investigate AI failures using evidence rather than intuition",
    ],
    syllabus: [
      "Production AI architecture, gateways, queues, streaming and asynchronous workloads",
      "Evaluation datasets, golden cases, model graders, human review and regression tests",
      "Prompt/model/version management and experiment discipline",
      "Tracing, token/cost monitoring, latency, quality metrics and user feedback",
      "Caching, batching, routing, fallbacks, retries, timeouts and rate limits",
      "Prompt injection, data leakage, access control, tool permissions and guardrails",
      "Privacy, PII handling, model-provider boundaries and responsible deployment",
      "Scaling inference/application services and capacity/cost reasoning",
      "AI release strategy, incident playbooks and continuous improvement",
    ],
    tools: [
      "FastAPI",
      "Docker",
      "Redis",
      "OpenTelemetry concepts",
      "LLM evaluation/tracing platforms",
      "CI/CD",
    ],
    projects: [
      "Production hardening of a RAG/agent product with evaluation suite, traces, security tests and cost budget",
    ],
    careerRelevance: [
      "AI Integration Engineer",
      "Applied AI Engineer",
      "AI Platform Engineer",
    ],
    recommendedNext: [],
  },

  {
    slug: "analytics-data-modeling",
    name: "Analytics Engineering & Data Modeling",
    tagline: "Turn operational data into trustworthy analytical datasets.",
    description:
      "A data-engineering specialization after SQL fundamentals. Students learn OLTP vs OLAP, dimensional modeling, warehouses, transformations, data quality, lineage, documentation and metric consistency.",
    duration: "5 weeks",
    level: "Intermediate",
    prerequisites: ["Strong SQL fundamentals"],
    learningOutcomes: [
      "Design analytical fact and dimension models",
      "Build reusable SQL transformation layers",
      "Define and test trustworthy business metrics",
      "Reason about warehouse/lakehouse tradeoffs",
      "Document lineage and data contracts",
    ],
    syllabus: [
      "OLTP vs OLAP and analytical architecture",
      "Grain, facts, dimensions, star schemas and slowly changing dimensions",
      "Transformation layers and modular SQL patterns",
      "Incremental models, snapshots and historical data",
      "Data tests, contracts, freshness, lineage and documentation",
      "Semantic metrics and avoiding conflicting business definitions",
      "Columnar storage, partitioning and warehouse/lakehouse concepts",
    ],
    tools: [
      "SQL",
      "PostgreSQL",
      "dbt concepts",
      "DuckDB",
      "Warehouse concepts",
    ],
    projects: [
      "Analytics warehouse for a realistic business domain with documented KPIs and tested transformations",
    ],
    careerRelevance: [
      "Data Engineer",
      "Analytics Engineer",
      "Data Platform Engineer",
    ],
    recommendedNext: ["data-pipelines-engineering", "cloud-data-systems"],
  },

  {
    slug: "data-pipelines-engineering",
    name: "Data Pipelines & Orchestration",
    tagline:
      "Build restartable, observable data pipelines instead of fragile scripts.",
    description:
      "The core data-engineering course. Students ingest data from databases, APIs and files; implement ETL/ELT; orchestrate dependencies; handle retries and backfills; validate quality; and understand streaming and distributed processing.",
    duration: "7 weeks",
    level: "Intermediate",
    prerequisites: ["Python", "SQL", "Database fundamentals"],
    learningOutcomes: [
      "Build batch and incremental data pipelines",
      "Create idempotent and restartable workflows",
      "Orchestrate jobs, dependencies and backfills",
      "Implement data quality and schema controls",
      "Explain CDC, messaging and streaming fundamentals",
      "Use columnar formats and partitioning appropriately",
    ],
    syllabus: [
      "Data sources, ingestion, ETL vs ELT and pipeline architecture",
      "Python for data engineering, database/API ingestion and file processing",
      "CSV/JSON limitations, Parquet and columnar-storage fundamentals",
      "Batch loads, incremental processing, checkpoints and CDC concepts",
      "DAG orchestration, scheduling, dependencies, retries and backfills",
      "Idempotency, schema evolution, data contracts and quality validation",
      "Observability, lineage, failure handling and operational runbooks",
      "Kafka/event-streaming concepts, partitions and delivery semantics",
      "Distributed-processing and Spark fundamentals",
    ],
    tools: [
      "Python",
      "SQL",
      "Airflow/Dagster concepts",
      "Parquet",
      "Kafka concepts",
      "Spark concepts",
      "Docker",
    ],
    projects: [
      "Multi-source ETL/ELT pipeline with orchestration, data tests, retries and observability",
    ],
    careerRelevance: [
      "Data Engineer",
      "Data Platform Engineer",
      "ML Data Engineer",
    ],
    recommendedNext: ["cloud-data-systems"],
  },

  {
    slug: "cloud-data-systems",
    name: "Cloud Data Systems",
    tagline:
      "Operate data workloads across storage, warehouses, distributed compute and cloud services.",
    description:
      "A cloud specialization for data engineers. It covers object storage, warehouses/lakehouses, IAM, Spark-style distributed processing, managed orchestration, event systems, governance, observability and cost optimization.",
    duration: "6 weeks",
    level: "Intermediate",
    prerequisites: ["Data Pipelines & Orchestration", "SQL"],
    learningOutcomes: [
      "Design a cloud data-platform architecture",
      "Use object storage and analytical databases appropriately",
      "Secure data workloads with IAM and least privilege",
      "Reason about partitioning and distributed execution",
      "Monitor performance, reliability and cloud cost",
    ],
    syllabus: [
      "Cloud primitives, regions, IAM, networking boundaries and shared responsibility",
      "Object storage, lifecycle policies, encryption and data layout",
      "Cloud warehouses, lakehouses and analytical compute",
      "Distributed processing and Spark execution concepts",
      "Managed orchestration, ingestion and event-streaming services",
      "Catalogs, governance, access policies, lineage and data security",
      "Monitoring, disaster recovery and pipeline/platform reliability",
      "Performance, partitioning, workload isolation and FinOps fundamentals",
    ],
    tools: [
      "AWS/Azure/GCP concepts",
      "S3-compatible object storage",
      "Spark concepts",
      "Cloud warehouse concepts",
      "Terraform concepts",
    ],
    projects: [
      "Cloud data-platform reference implementation with architecture, security, reliability and cost documentation",
    ],
    careerRelevance: [
      "Data Engineer",
      "Cloud Data Engineer",
      "Data Platform Engineer",
    ],
    recommendedNext: [],
  },

  {
    slug: "linux-networking-systems",
    name: "Linux, Networking & Systems",
    tagline: "Learn the runtime fundamentals beneath cloud and DevOps tooling.",
    description:
      "The systems foundation for DevOps. Students learn Linux administration, Bash, processes, permissions, services, storage, networking, DNS, HTTP/TLS, SSH, proxies, firewalls, troubleshooting and automation.",
    duration: "7 weeks",
    level: "Beginner to intermediate",
    prerequisites: [
      "Basic programming or scripting familiarity is helpful",
      "Comfort using a computer from the command line",
    ],
    learningOutcomes: [
      "Operate Linux confidently from the terminal",
      "Manage users, permissions, services, processes and storage",
      "Explain TCP/IP, DNS, HTTP/TLS, routing and ports",
      "Diagnose host and network failures methodically",
      "Automate administration tasks using shell scripts",
    ],
    syllabus: [
      "Linux filesystem, shell, pipes, text processing and packages",
      "Users, groups, permissions, sudo and process isolation concepts",
      "Processes, signals, services, systemd concepts and logs",
      "Filesystems, mounts, CPU, memory, storage and resource inspection",
      "IP addressing, subnetting, TCP/UDP, ports, sockets and routing",
      "DNS, HTTP/HTTPS, TLS, SSH and certificates",
      "Firewalls, NAT, reverse proxies and load-balancer concepts",
      "curl, dig, ss, traceroute and packet-level troubleshooting concepts",
      "Bash scripting, scheduled tasks, configuration and backups",
      "System hardening and troubleshooting methodology",
    ],
    tools: [
      "Linux",
      "Bash",
      "SSH",
      "curl",
      "dig",
      "ss",
      "systemd concepts",
      "tcpdump concepts",
    ],
    projects: [
      "Configure and harden a Linux application server with troubleshooting runbook",
    ],
    careerRelevance: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Platform Engineer",
      "SRE",
    ],
    recommendedNext: ["containers-ci-cd", "cloud-infrastructure-iac"],
  },

  {
    slug: "containers-ci-cd",
    name: "Containers, CI/CD & Release Engineering",
    tagline: "Make builds and releases reproducible, automated and safe.",
    description:
      "Students learn Docker deeply enough for production use, multi-service environments, registries, CI pipelines, artifact flow, security scans, deployment gates, migrations and release strategies.",
    duration: "6 weeks",
    level: "Intermediate",
    prerequisites: [
      "Linux fundamentals",
      "Git fundamentals",
      "Experience running at least one application",
    ],
    learningOutcomes: [
      "Build efficient and secure container images",
      "Run multi-service development environments",
      "Create automated CI workflows",
      "Manage build artifacts and deployment environments",
      "Apply rollback and progressive-release concepts",
    ],
    syllabus: [
      "Containers, images, layers, registries and runtime isolation",
      "Dockerfiles, build context, multi-stage builds and image optimization",
      "Volumes, networks, Compose and multi-service applications",
      "Non-root containers, secrets and image/dependency scanning",
      "CI concepts, runners, caching, linting, testing and artifacts",
      "CD pipelines, environment promotion and deployment gates",
      "Database migrations, configuration and secrets during releases",
      "Rolling, blue-green, canary, rollback and feature-flag concepts",
      "Release metrics and feedback loops",
    ],
    tools: [
      "Docker",
      "Docker Compose",
      "GitHub Actions/GitLab CI concepts",
      "Container registries",
      "Security scanning concepts",
    ],
    projects: [
      "Containerize a multi-service application and implement a complete CI/CD pipeline",
    ],
    careerRelevance: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Platform Engineer",
      "MLOps Engineer",
    ],
    recommendedNext: [
      "cloud-infrastructure-iac",
      "kubernetes-observability-sre",
    ],
  },

  {
    slug: "cloud-infrastructure-iac",
    name: "Cloud Infrastructure & Infrastructure as Code",
    tagline: "Design secure cloud architecture and provision it reproducibly.",
    description:
      "A vendor-aware but concept-driven cloud course. Students learn IAM, networking, compute, storage, managed databases, load balancing, DNS, certificates, autoscaling, backup/recovery, cost and Terraform-style IaC.",
    duration: "7 weeks",
    level: "Intermediate",
    prerequisites: [
      "Linux and networking fundamentals",
      "Containers recommended",
    ],
    learningOutcomes: [
      "Design secure cloud network and application architectures",
      "Provision infrastructure declaratively",
      "Apply least-privilege IAM",
      "Build highly available application infrastructure",
      "Plan backup, recovery and scaling",
      "Reason about cloud cost and operational tradeoffs",
    ],
    syllabus: [
      "Cloud service models, regions/zones and shared responsibility",
      "IAM users/roles/policies, least privilege and secret management",
      "VPCs, subnets, routes, NAT, security groups and network boundaries",
      "Compute, managed containers, object/block storage and databases",
      "DNS, TLS certificates, reverse proxies and load balancers",
      "Terraform state, providers, resources, variables, modules and outputs",
      "Environment separation, remote state, plans, drift and CI integration",
      "Autoscaling, high availability, backups and disaster recovery",
      "Audit logging, security posture and cloud cost/FinOps fundamentals",
    ],
    tools: ["AWS concepts", "Terraform", "Cloud CLI", "Linux", "Docker"],
    projects: [
      "Terraform-provisioned cloud architecture with network, app, database, TLS, backup and cost estimate",
    ],
    careerRelevance: ["DevOps Engineer", "Cloud Engineer", "Platform Engineer"],
    recommendedNext: ["kubernetes-observability-sre"],
  },

  {
    slug: "kubernetes-observability-sre",
    name: "Kubernetes, Observability & SRE Foundations",
    tagline:
      "Operate distributed workloads against measurable reliability targets.",
    description:
      "The advanced DevOps course. Kubernetes is taught as an orchestration system together with logs, metrics, traces, alerting, SLI/SLO thinking, capacity, incidents and reliability engineering.",
    duration: "8 weeks",
    level: "Advanced",
    prerequisites: ["Containers & CI/CD", "Cloud infrastructure fundamentals"],
    learningOutcomes: [
      "Deploy and operate applications on Kubernetes",
      "Manage configuration, storage, services and ingress",
      "Implement useful telemetry and alerts",
      "Define SLIs and SLOs",
      "Troubleshoot incidents using system evidence",
      "Perform post-incident analysis and reliability improvement",
    ],
    syllabus: [
      "Kubernetes architecture, control plane and worker concepts",
      "Pods, ReplicaSets, Deployments, Services and namespaces",
      "ConfigMaps, Secrets, volumes, persistent storage and Jobs/CronJobs",
      "Ingress, service discovery, probes and rolling deployments",
      "Requests/limits, scheduling, autoscaling and capacity",
      "Helm and GitOps concepts",
      "Metrics, logs, traces, OpenTelemetry concepts and telemetry pipelines",
      "Prometheus/Grafana concepts, dashboards and actionable alerting",
      "SLIs, SLOs, error budgets and reliability tradeoffs",
      "Load testing, resilience, failure modes and incident response",
      "Runbooks, on-call concepts, postmortems and continuous reliability work",
    ],
    tools: [
      "Kubernetes",
      "kubectl",
      "Helm concepts",
      "Prometheus",
      "Grafana",
      "OpenTelemetry concepts",
    ],
    projects: [
      "Deploy and operate a service on Kubernetes with dashboards, alerts and documented SLOs",
    ],
    careerRelevance: [
      "DevOps Engineer",
      "Platform Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
    ],
    recommendedNext: [],
  },

  {
    slug: "software-testing-foundations",
    name: "Software Testing Foundations",
    tagline:
      "Learn to discover risk systematically before learning automation tools.",
    description:
      "The foundation of the QA track. Students learn testing principles, SDLC/STLC, requirements analysis, risk, test levels, black-box design techniques, exploratory testing, web/API/database testing, defect reporting and Agile quality practices.",
    duration: "6 weeks",
    level: "Beginner",
    prerequisites: [
      "Basic understanding of how software applications are used",
      "No previous testing job required",
    ],
    learningOutcomes: [
      "Translate requirements into test scenarios",
      "Design tests using established test techniques",
      "Perform exploratory web, API and database testing",
      "Report reproducible defects",
      "Create risk-based regression suites",
      "Participate effectively in Agile development teams",
    ],
    syllabus: [
      "Software quality, testing principles, SDLC, STLC and quality responsibilities",
      "Requirements analysis, acceptance criteria, risk and traceability",
      "Unit, integration, system, acceptance and regression testing",
      "Functional vs non-functional testing",
      "Equivalence partitioning, boundary values and decision tables",
      "State-transition, use-case, pairwise and exploratory testing",
      "Web/browser testing and developer-tool fundamentals",
      "API testing with HTTP, REST, JSON and Postman",
      "Database validation and SQL for testers",
      "Defect lifecycle, severity, priority, evidence and communication",
      "Test plans, test reports and Agile/shift-left quality",
    ],
    tools: [
      "Postman",
      "Browser DevTools",
      "SQL",
      "Jira-style issue tracking",
      "Git basics",
    ],
    projects: [
      "Complete manual QA engagement for a realistic web application",
      "API/database test suite and professional defect report portfolio",
    ],
    careerRelevance: [
      "QA Engineer",
      "Software Test Engineer",
      "Junior Quality Engineer",
    ],
    recommendedNext: ["api-web-test-automation"],
  },

  {
    slug: "api-web-test-automation",
    name: "API & Web Test Automation",
    tagline:
      "Engineer maintainable automated tests for the interfaces teams release every day.",
    description:
      "Students learn automation programming, API tests, Playwright-style browser automation, fixtures, selectors, test architecture, mocking, data management, parallel execution and CI integration.",
    duration: "7 weeks",
    level: "Intermediate",
    prerequisites: [
      "Software Testing Foundations",
      "Basic programming logic",
      "HTTP/API fundamentals",
    ],
    learningOutcomes: [
      "Write maintainable API automation",
      "Automate realistic browser workflows",
      "Design stable selectors, fixtures and test data",
      "Structure automation code for maintainability",
      "Run automated suites in CI",
      "Diagnose flaky tests instead of hiding them",
    ],
    syllabus: [
      "Programming for test automation: functions, modules, classes and assertions",
      "Test architecture, fixtures, setup/teardown and reusable helpers",
      "API automation, schemas, authentication, chaining and negative cases",
      "Browser automation, locators, waits, forms, uploads and downloads",
      "Page-object/component-object patterns and alternatives",
      "Test data, databases, isolation and environment management",
      "Mocking, network interception and deterministic external dependencies",
      "Parallel execution, retries, screenshots, traces and reports",
      "CI integration, headless execution and test-result artifacts",
      "Flaky-test causes, debugging and automation maintenance",
    ],
    tools: [
      "Playwright",
      "Pytest or TypeScript test runner concepts",
      "Postman",
      "Git",
      "GitHub Actions",
      "SQL",
    ],
    projects: [
      "Automated API regression suite",
      "End-to-end browser automation framework running in CI",
    ],
    careerRelevance: ["QA Automation Engineer", "SDET", "Quality Engineer"],
    recommendedNext: ["quality-engineering-production"],
  },

  {
    slug: "quality-engineering-production",
    name: "Quality Engineering in Production",
    tagline:
      "Move beyond test scripts into release quality, performance, observability and engineering risk.",
    description:
      "The advanced QA course connects testing to software delivery. Students learn test pyramids, contract tests, performance testing, security awareness, CI quality gates, observability, production validation, testability and AI-assisted testing.",
    duration: "6 weeks",
    level: "Intermediate",
    prerequisites: [
      "Software Testing Foundations",
      "Test Automation experience",
    ],
    learningOutcomes: [
      "Design a balanced automation strategy",
      "Integrate quality gates into CI/CD",
      "Run baseline performance and reliability tests",
      "Use logs and traces during defect investigation",
      "Test distributed/API integration boundaries",
      "Use AI-assisted testing while preserving verification",
    ],
    syllabus: [
      "Quality engineering vs traditional QA and whole-team quality ownership",
      "Test pyramid/trophy concepts and choosing the right test level",
      "Contract testing and service-integration testing",
      "Performance fundamentals: load, stress, endurance and bottleneck analysis",
      "Basic security testing and OWASP-oriented test thinking",
      "CI/CD quality gates, branch protection and release confidence",
      "Logs, metrics, traces and production defect investigation",
      "Feature flags, canary validation, synthetic checks and shift-right testing",
      "Testability, observability and quality architecture",
      "AI-assisted test generation, review and maintenance",
      "Testing AI features: nondeterminism, evaluation cases and guardrails fundamentals",
    ],
    tools: [
      "Playwright",
      "k6/JMeter concepts",
      "GitHub Actions",
      "OpenAPI",
      "Observability tools concepts",
    ],
    projects: [
      "Production-quality strategy combining API/UI automation, performance checks and CI gates",
    ],
    careerRelevance: ["QA Automation Engineer", "Quality Engineer", "SDET"],
    recommendedNext: [],
  },

  {
    slug: "math-statistics-ml",
    name: "Mathematics & Statistics for Machine Learning",
    tagline:
      "Build enough mathematical depth to understand why ML models behave the way they do.",
    description:
      "A practical ML mathematics course covering linear algebra, calculus, probability, statistics and optimization through implementation and model-oriented examples.",
    duration: "7 weeks",
    level: "Intermediate",
    prerequisites: [
      "Python fundamentals",
      "High-school algebra",
      "Willingness to practice mathematics consistently",
    ],
    learningOutcomes: [
      "Use vectors and matrices in ML contexts",
      "Understand derivatives, gradients and optimization",
      "Reason with probability and common distributions",
      "Interpret statistical estimates and uncertainty",
      "Connect loss, likelihood, regularization and model evaluation",
    ],
    syllabus: [
      "Vectors, matrices, dot products, norms and linear transformations",
      "Matrix multiplication, rank and eigendecomposition intuition",
      "Functions, derivatives, partial derivatives, gradients and chain rule",
      "Gradient descent and numerical optimization intuition",
      "Probability rules, conditional probability and Bayes rule",
      "Random variables, distributions, expectation, variance and covariance",
      "Sampling, confidence intervals and hypothesis-testing fundamentals",
      "Maximum likelihood, loss functions and regularization",
      "Bias-variance, overfitting and statistical interpretation of evaluation",
    ],
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy"],
    projects: [
      "Implement and visualize key mathematical ML concepts from scratch",
    ],
    careerRelevance: ["Machine Learning Engineer", "Applied ML Engineer"],
    recommendedNext: ["machine-learning-engineering"],
  },

  {
    slug: "machine-learning-engineering",
    name: "Machine Learning Engineering",
    tagline: "Build reproducible ML pipelines and evaluate models correctly.",
    description:
      "A rigorous applied ML course covering problem framing, preprocessing, supervised and unsupervised learning, feature engineering, validation, metrics, imbalance, calibration, tuning, explainability, experiment tracking and inference packaging.",
    duration: "9 weeks",
    level: "Intermediate",
    prerequisites: [
      "Python",
      "SQL/data handling",
      "Mathematics & Statistics for ML",
    ],
    learningOutcomes: [
      "Frame business/engineering problems as ML tasks",
      "Build reproducible preprocessing and training pipelines",
      "Select appropriate validation and metrics",
      "Prevent leakage and diagnose under/overfitting",
      "Tune and compare models systematically",
      "Package trained models behind stable inference interfaces",
    ],
    syllabus: [
      "ML problem framing, baselines, datasets, splits and reproducibility",
      "Data cleaning, missing values, encoding, scaling and feature pipelines",
      "Linear/logistic models and regularization",
      "Decision trees, random forests and gradient-boosting concepts",
      "Nearest-neighbor and support-vector concepts",
      "Clustering, dimensionality reduction and anomaly detection",
      "Feature engineering and feature-selection fundamentals",
      "Cross-validation, leakage, imbalance, calibration and threshold selection",
      "Metrics for regression/classification and error analysis",
      "Hyperparameter optimization and experiment tracking",
      "Interpretability and responsible model analysis",
      "Serialization, batch inference and inference APIs",
    ],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "MLflow concepts",
      "FastAPI",
    ],
    projects: [
      "End-to-end predictive ML system with reproducible experiments and inference API",
    ],
    careerRelevance: [
      "Machine Learning Engineer",
      "Applied ML Engineer",
      "Junior Data Scientist",
    ],
    recommendedNext: ["deep-learning-engineering", "mlops-production-ml"],
  },

  {
    slug: "deep-learning-engineering",
    name: "Deep Learning Engineering",
    tagline: "Train, debug and evaluate neural networks with PyTorch.",
    description:
      "A practical deep-learning course covering tensors, autograd, training loops, optimization, CNNs, sequence/attention concepts, transformers, transfer learning, pretrained models, GPU workflows and reproducibility.",
    duration: "8 weeks",
    level: "Advanced",
    prerequisites: [
      "Machine Learning Engineering",
      "Linear algebra and calculus fundamentals",
    ],
    learningOutcomes: [
      "Implement robust PyTorch training and validation loops",
      "Diagnose optimization and generalization problems",
      "Use pretrained neural models effectively",
      "Understand CNN and transformer architecture fundamentals",
      "Fine-tune models and measure error rigorously",
      "Profile compute and memory constraints",
    ],
    syllabus: [
      "Tensors, autograd, modules, datasets, dataloaders and training loops",
      "Loss functions, initialization, optimizers and learning-rate schedules",
      "Normalization, regularization, augmentation and training diagnostics",
      "CNNs and computer-vision transfer learning",
      "Sequence representations, embeddings and attention",
      "Transformer architecture and pretrained model ecosystems",
      "Fine-tuning, freezing, feature extraction and parameter-efficient concepts",
      "Evaluation, error analysis and dataset-shift awareness",
      "GPU training, mixed precision, checkpointing and reproducibility",
      "Inference optimization and deployment-oriented model packaging",
    ],
    tools: [
      "PyTorch",
      "Hugging Face concepts",
      "GPU notebooks",
      "MLflow/W&B concepts",
    ],
    projects: [
      "Fine-tuned deep-learning model with experiment tracking and rigorous error analysis",
    ],
    careerRelevance: [
      "Machine Learning Engineer",
      "Applied ML Engineer",
      "Deep Learning Engineer",
    ],
    recommendedNext: ["mlops-production-ml"],
  },

  {
    slug: "mlops-production-ml",
    name: "MLOps & Production Machine Learning",
    tagline:
      "Version, deploy, monitor and improve ML systems after training ends.",
    description:
      "The production layer of the ML track. Students learn experiment/model registries, data/model versioning, training pipelines, deployment, batch/online inference, monitoring, drift, retraining, CI/CD/CT, scaling and governance.",
    duration: "7 weeks",
    level: "Advanced",
    prerequisites: [
      "Machine Learning Engineering",
      "Docker and API fundamentals",
    ],
    learningOutcomes: [
      "Version code, data, experiments and models coherently",
      "Automate training and validation workflows",
      "Deploy batch and online inference",
      "Monitor data quality, latency and model behavior",
      "Design retraining, promotion and rollback workflows",
      "Apply production governance and documentation",
    ],
    syllabus: [
      "ML lifecycle architecture and reproducibility",
      "Experiment tracking, artifacts, metadata and model registries",
      "Data/model versioning and feature-pipeline concepts",
      "Training pipelines and validation gates",
      "CI/CD/CT patterns for ML systems",
      "Batch inference vs online serving and API inference",
      "Docker, scalable serving and Kubernetes concepts",
      "Model/data monitoring, drift and data-quality checks",
      "Feedback loops, retraining, promotion and rollback",
      "Performance optimization, latency and resource utilization",
      "Responsible ML, governance, documentation and incident response",
    ],
    tools: [
      "MLflow",
      "Docker",
      "FastAPI",
      "GitHub Actions",
      "Cloud storage concepts",
      "Kubernetes concepts",
    ],
    projects: [
      "Train-to-production ML pipeline with registry, deployment, monitoring and rollback plan",
    ],
    careerRelevance: [
      "Machine Learning Engineer",
      "MLOps Engineer",
      "ML Platform Engineer",
    ],
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
  ({ slug, name, tagline }) => ({
    slug,
    name,
    summary: tagline,
  }),
);

/* -------------------------------------------------------------------------- */
/*                              TRACK INFORMATION                             */
/* -------------------------------------------------------------------------- */

export const trackDetails: Record<string, TrackDetail> = {
  "ai-backend-engineer": {
    slug: "ai-backend-engineer",
    roleDescription:
      "Backend engineers design and operate the server-side systems behind applications: APIs, domain logic, data access, authentication, integrations, asynchronous processing, caching and production reliability. The AI-ready version of the role can also expose model-powered capabilities through dependable backend services.",
    idealFor: [
      "Students who enjoy logic, APIs, databases and system behavior more than visual design",
      "Developers interested in software architecture and scalable services",
      "Students who want a strong foundation for later AI integration, cloud or system design work",
    ],
    careerPath: [
      "Backend Intern / Junior Python Developer",
      "Backend Engineer",
      "Backend AI Engineer / Software Engineer",
      "Senior Backend Engineer",
      "Tech Lead / Staff Engineer / Backend Architect",
    ],
    opportunities: [
      "Nepal software companies and outsourcing firms",
      "International remote backend roles",
      "SaaS and startup product teams",
      "Fintech, health-tech, e-commerce and platform engineering",
      "Freelance API, integration and backend projects",
    ],
    hiringSkills: [
      "Python",
      "Django/FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Authentication and authorization",
      "Git",
      "Docker",
      "Testing",
      "Queues/background jobs",
      "Cloud/deployment basics",
    ],
    portfolioStandard: [
      "At least one non-trivial authenticated API",
      "Relational database design and query evidence",
      "Automated tests",
      "Background/integration workflow",
      "Dockerized deployed project",
      "README with architecture and tradeoffs",
    ],
  },

  "ai-full-stack-engineer": {
    slug: "ai-full-stack-engineer",
    roleDescription:
      "Full-stack engineers deliver complete product features across browser interfaces, backend services, databases, authentication, integrations, testing and deployment. An AI-ready full-stack engineer can additionally integrate intelligent features without treating AI as a replacement for software fundamentals.",
    idealFor: [
      "Students who want to build complete products independently",
      "Startup-oriented engineers",
      "Students interested in both user-facing interfaces and backend systems",
    ],
    careerPath: [
      "Web Development Intern / Junior Developer",
      "FullStack Engineer",
      "FullStack AI Engineer / Product Engineer",
      "Senior FullStack Engineer",
      "Tech Lead / Product Engineering Lead",
    ],
    opportunities: [
      "Nepal software companies",
      "Remote product/startup roles",
      "Freelance application development",
      "SaaS product engineering",
      "AI-enabled product development",
    ],
    hiringSkills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "HTML/CSS",
      "HTTP/APIs",
      "Python backend framework",
      "PostgreSQL",
      "Authentication",
      "Git",
      "Testing",
      "Docker",
      "Deployment",
    ],
    portfolioStandard: [
      "One complete deployed application",
      "Responsive accessible frontend",
      "Authenticated backend and relational database",
      "Automated API/UI tests",
      "Production deployment",
      "Clear system architecture documentation",
    ],
  },

  "ai-integration-engineer": {
    slug: "ai-integration-engineer",
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

  "data-engineer": {
    slug: "data-engineer",
    roleDescription:
      "Data engineers build and operate the systems that ingest, transform, validate, store and deliver trustworthy data for analytics, reporting, machine learning and AI.",
    idealFor: [
      "Students who enjoy SQL, data structures and reliable pipelines",
      "Developers interested in infrastructure but centered on data",
      "Students who prefer building data systems over training models",
    ],
    careerPath: [
      "Data/SQL Intern or Junior ETL Developer",
      "Junior Data Engineer",
      "Data Engineer / Analytics Engineer",
      "Senior Data Engineer",
      "Data Platform Engineer / Data Architect",
    ],
    opportunities: [
      "Analytics and BI platforms",
      "Fintech and transaction systems",
      "AI/ML data infrastructure",
      "Cloud data platforms",
      "Remote data engineering teams",
      "Enterprise data modernization",
    ],
    hiringSkills: [
      "SQL",
      "Python",
      "Relational databases",
      "Data modeling",
      "ETL/ELT",
      "Orchestration",
      "Data quality",
      "Cloud storage/warehouses",
      "Airflow-style tools",
      "Spark fundamentals",
      "Kafka/streaming concepts",
      "Git/Docker",
    ],
    portfolioStandard: [
      "Multi-source data ingestion",
      "Orchestrated pipeline",
      "Analytical data model",
      "Automated data-quality checks",
      "Failure/retry handling",
      "Cloud-oriented architecture documentation",
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

  "machine-learning-engineer": {
    slug: "machine-learning-engineer",
    roleDescription:
      "Machine Learning Engineers build reproducible systems that transform data into trained models and deploy those models into production. The role combines mathematics, statistics, programming, ML algorithms, deep learning and software/MLOps practices.",
    idealFor: [
      "Students who enjoy mathematics, experimentation and programming",
      "Students targeting applied ML rather than prompt-only AI work",
      "Developers willing to build a deeper technical specialization",
    ],
    careerPath: [
      "ML/Data Intern",
      "Junior ML Engineer / Applied ML Developer",
      "Machine Learning Engineer",
      "Senior ML Engineer",
      "ML Platform / Applied AI Lead / Staff ML Engineer",
    ],
    opportunities: [
      "Applied ML product teams",
      "Computer vision, NLP, audio and recommendation systems",
      "Fintech and risk modeling",
      "AI product companies",
      "Remote ML engineering roles",
      "MLOps and ML-platform work",
    ],
    hiringSkills: [
      "Python",
      "NumPy/Pandas",
      "SQL",
      "Linear algebra",
      "Probability/statistics",
      "scikit-learn",
      "PyTorch",
      "Model evaluation",
      "Experiment tracking",
      "Inference APIs",
      "Docker",
      "MLOps fundamentals",
    ],
    portfolioStandard: [
      "Reproducible ML project with baseline and evaluation",
      "Deep-learning project with error analysis",
      "Experiment tracking",
      "Inference service",
      "Dockerized deployment",
      "Monitoring/retraining design",
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
  "ai-backend-engineer": {
    prerequisites: [
      "No professional backend experience required",
      "Basic programming familiarity is helpful; the track includes Python foundations",
      "10–12 focused hours each week",
      "A laptop capable of running Python, PostgreSQL, Redis and Docker",
    ],
    academics: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },

  "ai-full-stack-engineer": {
    prerequisites: [
      "No professional web-development experience required",
      "Basic programming familiarity is helpful",
      "10–12 focused hours each week",
      "A laptop capable of running modern web-development tools and Docker",
    ],
    academics: [
      "Web Technologies",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Human–Computer Interaction",
      "Software Engineering",
    ],
  },

  "ai-integration-engineer": {
    prerequisites: [
      "Comfort with Python and programming logic",
      "HTTP/API fundamentals",
      "Backend development fundamentals strongly recommended",
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

  "data-engineer": {
    prerequisites: [
      "Basic programming and structured problem solving",
      "Comfort learning SQL",
      "10–12 focused hours each week",
      "Interest in data correctness and system reliability",
    ],
    academics: [
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Distributed Systems",
      "Computer Networks",
      "Statistics",
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

  "machine-learning-engineer": {
    prerequisites: [
      "Programming fundamentals",
      "High-school algebra and willingness to practice mathematics",
      "12–15 focused hours each week",
      "A laptop suitable for Python and data analysis; GPU access is useful later",
    ],
    academics: [
      "Probability & Statistics",
      "Linear Algebra",
      "Calculus",
      "Machine Learning",
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
