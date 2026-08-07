# Tabflux AI Academy — Product Blueprint

## Product model

Tabflux is a career university, not a course catalog. Every experience uses one hierarchy:

**Academy → School → Career Track → Skill Courses → Projects → Certification → Career Outcome**

Technologies are never top-level categories. They appear only as tools inside skill courses.

## Information architecture

- Home
  - Why careers are changing
  - Why career-first learning works
  - Schools
  - Career Tracks
  - Projects
  - Certifications
  - Career outcomes and hiring companies
  - Student stories
  - Pricing
- Schools
  - Software Engineering
  - AI Engineering
  - Automation
  - Business & Automation with AI
  - Productivity with AI
- Career Tracks
  - Track overview
  - Audience, difficulty, duration, and outcomes
  - Learning roadmap
  - Projects and certification
  - Mentors, hiring companies, FAQs, related tracks
- Skill Course
  - Overview, objectives, topics, prerequisites
  - Projects, certificate, duration
  - Related and next recommended course
- Projects
- Certifications
- Pricing
- Mentors
- Student Stories
- Career Center
- About
- FAQs
- Contact

## Navigation model

Primary navigation exposes `Schools`, `Career Tracks`, and `How it works`. Secondary destinations live in the footer. The primary CTA is `Explore career tracks`; sign-in is visually quiet. On mobile, the same choices collapse into one menu without introducing a new hierarchy.

## Page hierarchy

1. Orientation: explain the career shift before presenting products.
2. Discovery: select a School by desired field, then a Career Track by desired role.
3. Evaluation: understand outcome, effort, duration, roadmap, projects, and proof.
4. Conversion: enroll in a full Track or buy an individual Skill Course.
5. Learning: show current position, completed work, next action, and end career.
6. Outcome: complete projects, earn certification, prepare with the Career Center.

## Component hierarchy

- App shell
  - Announcement bar
  - Header / mobile menu
  - Breadcrumbs
  - Footer
- Discovery
  - School card
  - Career track card
  - Filter chips
  - Outcome badge
- Learning
  - Roadmap timeline
  - Skill course step
  - Project card
  - Certification card
  - Progress state
- Trust
  - Hiring company strip
  - Metric card
  - Student story
  - Mentor card
- Conversion
  - Pricing card
  - Comparison row
  - Primary and secondary CTA

## Core user flows

### New learner
Home → understand career-first model → browse Schools → compare Tracks → inspect roadmap and outcome → enroll.

### Goal-aware learner
Career Tracks → filter by role/outcome → Track detail → review roadmap/projects → enroll.

### Skill-only learner
Track detail → select Skill Course → review prerequisites and next course → buy course → later upgrade to Track.

### Active learner
Dashboard → resume current Skill Course → complete project → unlock certification → Career Center.

## Design recommendations

- Use editorial scale and generous whitespace to signal a university, with operational clarity borrowed from modern software products.
- Use warm white surfaces, near-black typography, and a single cobalt accent. Avoid gradients and decorative imagery.
- Pair a high-character serif display face with a highly legible sans-serif UI face.
- Make roadmap position explicit through numbered steps, status labels, and a persistent visual path.
- Use motion only for orientation: menu transitions, card lift, progress movement, and scroll reveal. Respect reduced-motion settings.
- Keep card borders visible and shadows restrained. Color communicates action and progress, not decoration.
- Meet WCAG AA contrast, preserve keyboard focus, and keep touch targets at least 44px.
