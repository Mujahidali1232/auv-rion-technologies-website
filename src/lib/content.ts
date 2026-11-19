export const company = {
  name: "Auvrion Technologies",
  shortName: "Auvrion",
  tagline: "Technology Beyond Limits.",
  description:
    "Auvrion Technologies is an international software development company that designs, architects, and scales mission-critical digital platforms for enterprises, sovereign entities, and ambitious organizations across Saudi Arabia, the UAE, the UK, and the USA.",
  email: "contact@auvrion.tech",
  phone: "+971 4 288 9120",
  saudiPhone: "+966 11 480 3210",
  ukPhone: "+44 20 7946 0920",
  usPhone: "+1 212 901 8430",
  markets: [
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", focus: "Vision 2030, Giga-projects & In-Kingdom Data Sovereignty" },
    { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", focus: "Dubai Future Economy, DIFC/ADGM Fintech & AI Platforms" },
    { name: "United Kingdom", code: "UK", flag: "🇬🇧", focus: "London Financial Services, Healthtech & Enterprise Scale" },
    { name: "United States", code: "US", flag: "🇺🇸", focus: "Silicon Valley Architecture, Cloud Scalability & Fortune 500" },
  ],
  hubs: [
    {
      city: "Riyadh",
      region: "Saudi Arabia",
      timezone: "AST (UTC+3)",
      address: "King Fahd Road, Al Olaya District",
      badge: "KSA Regional HQ",
      offsetHours: 3,
    },
    {
      city: "Dubai",
      region: "United Arab Emirates",
      timezone: "GST (UTC+4)",
      address: "Dubai International Financial Centre (DIFC)",
      badge: "Middle East Innovation Hub",
      offsetHours: 4,
    },
    {
      city: "London",
      region: "United Kingdom",
      timezone: "GMT / BST (UTC+0)",
      address: "100 Bishopsgate, City of London",
      badge: "European Delivery Centre",
      offsetHours: 0,
    },
    {
      city: "New York",
      region: "United States",
      timezone: "EST (UTC-5)",
      address: "One World Trade Center, Manhattan",
      badge: "Americas Client Practice",
      offsetHours: -5,
    },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Capabilities" },
  { href: "/work", label: "Selected Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact & Brief" },
];

export const certifications = [
  { name: "ISO/IEC 27001", description: "Information Security Management Standard" },
  { name: "SOC 2 Type II", description: "Audited Security, Availability & Confidentiality" },
  { name: "Saudi NCA ECC", description: "National Cybersecurity Authority Essential Controls Compliant" },
  { name: "UK & EU GDPR", description: "Strict Data Protection & Privacy Governance" },
];

export const services = [
  {
    slug: "product-engineering",
    title: "Product & Platform Engineering",
    tagline: "High-velocity product development from concept to global scale.",
    summary:
      "End-to-end digital product creation for web, mobile, and cloud environments. We bridge customer experience and bulletproof technical architecture.",
    icon: "Layers",
    metrics: "40% faster time-to-market",
    details: [
      "Discovery, product strategy and roadmap definition",
      "Full-stack web applications (Next.js, React, Node.js, Go)",
      "High-performance native mobile apps (iOS Swift, Android Kotlin, React Native)",
      "Design systems and component libraries (Figma to code)",
      "Micro-frontends and distributed frontend architectures",
      "Bilingual interfaces with native Arabic RTL typography",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Go", "Tailwind CSS", "React Native"],
  },
  {
    slug: "enterprise",
    title: "Enterprise Systems & Core Infrastructure",
    tagline: "Resilient backend engines designed for mission-critical operations.",
    summary:
      "We design and build secure, scalable systems that power operations, complex workflows, and enterprise digital transformations across distributed workforces.",
    icon: "Server",
    metrics: "99.999% system availability",
    details: [
      "Custom ERP, CRM, and bespoke operational platforms",
      "Event-driven microservices architecture (Kafka, RabbitMQ)",
      "Legacy system modernization and non-disruptive migration",
      "Complex third-party API integration and middleware",
      "Role-based access control (RBAC), multi-tenancy and audit trails",
      "High-throughput transactional databases (PostgreSQL, Redis, ClickHouse)",
    ],
    tech: ["Go", "Python", "Rust", "Java / Spring", "PostgreSQL", "Apache Kafka", "Redis"],
  },
  {
    slug: "cloud",
    title: "Cloud Architecture, DevOps & SRE",
    tagline: "Cloud-native foundations built to withstand international traffic.",
    summary:
      "Modernize your delivery pipeline with automated infrastructure, zero-trust security postures, and proactive observability engineered for zero downtime.",
    icon: "Cloud",
    metrics: "Sub-second failover & multi-region deployment",
    details: [
      "Multi-cloud and hybrid architecture (AWS, Microsoft Azure, Google Cloud)",
      "In-Kingdom cloud deployment (Oracle Cloud Saudi, Alibaba Cloud KSA, Azure UAE)",
      "Infrastructure as Code (Terraform, Pulumi, Ansible)",
      "Kubernetes orchestration, containerization and service mesh",
      "Automated CI/CD pipelines with continuous security scanning (DevSecOps)",
      "Site Reliability Engineering (SRE), tracing, and 24/7 observability (OpenTelemetry)",
    ],
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "Prometheus"],
  },
  {
    slug: "ai-data",
    title: "Applied AI, LLMs & Sovereign Data",
    tagline: "Turn organizational data into real competitive advantage.",
    summary:
      "We build production-ready artificial intelligence products, intelligent agentic workflows, and governed data platforms that drive tangible business value.",
    icon: "Cpu",
    metrics: "Production-grade latency & private model hosting",
    details: [
      "Enterprise Retrieval-Augmented Generation (RAG) with local embedding",
      "Autonomous AI agents and intelligent document workflow automation",
      "Fine-tuned private LLM deployment in sovereign VPC environments",
      "Data lakes, real-time analytics streaming and ETL pipelines",
      "Bilingual Arabic/English Natural Language Processing models",
      "Ethical AI guardrails, model evaluation and privacy compliance",
    ],
    tech: ["Python", "PyTorch", "LangChain", "LlamaIndex", "Milvus", "Pinecone", "Snowflake"],
  },
  {
    slug: "fintech",
    title: "Fintech, Wealthtech & Digital Banking",
    tagline: "Bank-grade security and frictionless customer journeys.",
    summary:
      "Specialized financial software engineering for digital banks, asset managers, payment gateways, and trading platforms across GCC, UK, and US regulatory standards.",
    icon: "ShieldCheck",
    metrics: "$14B+ in digital transactions processed",
    details: [
      "Private wealth and institutional investment portals",
      "Core banking integrations and Open Banking API gateways",
      "Payment orchestration, fraud detection, and instant settlement",
      "PCI-DSS compliant architectures and tokenized security",
      "CBUAE, Saudi Central Bank (SAMA), and UK FCA regulatory alignment",
      "Real-time financial analytics, KYC/AML automated verification",
    ],
    tech: ["Event Sourcing", "PostgreSQL", "mTLS", "HashiCorp Vault", "Go", "Next.js"],
  },
  {
    slug: "advisory",
    title: "Technical Advisory & Strategic Leadership",
    tagline: "Senior architects and engineering leaders at your decision table.",
    summary:
      "Fractional CTO advisory, technical due diligence, architecture audits, and dedicated engineering pods for programs where delivery failure is not an option.",
    icon: "Compass",
    metrics: "100% senior-led delivery pods",
    details: [
      "Enterprise architecture roadmaps and tech stack selection",
      "Codebase quality audits and vulnerability assessments",
      "Digital transformation program governance for C-suite and boards",
      "Senior engineer augmentation and specialized delivery pods",
      "Vendor and legacy system rationalization",
      "Transition management and knowledge transfer to in-house teams",
    ],
    tech: ["Architecture Review", "Security Audits", "Team Pods", "CTO Advisory"],
  },
];

export const industries = [
  {
    title: "Government & Sovereign Entities",
    region: "Saudi Arabia & UAE",
    copy: "National service portals, digital identity frameworks, municipal platforms, and sovereign citizen experience systems aligned with Vision 2030.",
    badge: "Sovereign Tier",
  },
  {
    title: "Banking, Wealth & Fintech",
    region: "GCC, UK & USA",
    copy: "Client onboarding portals, private wealth dashboards, Open Banking gateways, and high-frequency trading platforms under strict regulatory oversight.",
    badge: "FCA & SAMA Compliant",
  },
  {
    title: "Energy, Utilities & Industrials",
    region: "Saudi Arabia & International",
    copy: "IoT operational intelligence, SCADA telemetry streaming, predictive maintenance software, and field-to-executive dashboard ecosystems.",
    badge: "Mission Critical",
  },
  {
    title: "Healthcare & Life Sciences",
    region: "US, UK & GCC",
    copy: "Care coordination suites, clinical workflow engines, telemedicine systems, and patient records exchange built to HIPAA and local health ministry guidelines.",
    badge: "HIPAA / MOH Certified",
  },
  {
    title: "Supply Chain & Intelligent Logistics",
    region: "Global Hubs",
    copy: "Fleet telematics, automated warehouse management, cross-border customs orchestration, and end-to-end supply chain visibility platforms.",
    badge: "Real-Time Telemetry",
  },
  {
    title: "Enterprise SaaS & High-Growth Tech",
    region: "USA, UK & International",
    copy: "Multi-tenant cloud architectures, self-service enterprise platforms, developer APIs, and billing engines engineered to scale from series A to IPO.",
    badge: "High Concurrency",
  },
];

export const process = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    title: "Understand & Architect",
    timeline: "Weeks 1–2",
    copy: "We analyze your business objectives, technical constraints, regulatory requirements, and user journeys. We produce an architectural blueprint before writing code.",
    deliverables: ["Architecture blueprint", "Risk & compliance audit", "Interactive prototype", "Delivery milestones"],
  },
  {
    step: "02",
    phase: "Sprint Velocity",
    title: "Production-Grade Engineering",
    timeline: "Weeks 3–10",
    copy: "Senior engineers work in two-week agile sprints. You receive live staging deployments, transparent Git commits, automated test coverage, and weekly demos.",
    deliverables: ["Bi-weekly releases", "Automated CI/CD pipeline", "Clean, typed codebase", "Security scan reports"],
  },
  {
    step: "03",
    phase: "Security & Hardening",
    title: "Validation & Governance",
    timeline: "Weeks 11–12",
    copy: "Rigorous penetration testing, multi-region load testing, bilingual UX polish, and compliance verification ensuring bank-grade stability and zero-day readiness.",
    deliverables: ["Third-party penetration report", "Load testing results", "Compliance verification", "Disaster recovery plan"],
  },
  {
    step: "04",
    phase: "Global Scale",
    title: "Launch, Scale & Transfer",
    timeline: "Continuous",
    copy: "Flawless zero-downtime production deployment, 24/7 observability handoff, comprehensive documentation, and smooth knowledge transfer to your team.",
    deliverables: ["Production rollout", "Full IP assignment", "Observability suite", "Team training sessions"],
  },
];

export const work = [
  {
    slug: "national-services",
    sector: "Public Sector & Sovereign Digital Platform",
    client: "National Digital Government Authority · GCC",
    location: "Riyadh & Abu Dhabi",
    title: "Sovereign Citizen & Business Services Portal",
    summary:
      "A unified, bilingual digital ecosystem serving millions of residents and commercial entities. Engineered with micro-frontends, localized single sign-on (SSO), and bank-grade data encryption.",
    challenge:
      "Fragmented legacy agency portals causing slow citizen resolution times, inconsistent accessibility, and inability to handle national holiday traffic spikes.",
    solution:
      "Architected a Next.js and distributed Go microservices platform with localized Arabic typography, multi-region failover, and strict NCA ECC compliance.",
    metrics: [
      { label: "Active Monthly Users", value: "12M+" },
      { label: "Uptime Reliability", value: "99.998%" },
      { label: "Service Completion Speed", value: "4.8x Faster" },
      { label: "Peak Concurrency", value: "250K Req/s" },
    ],
    outcome:
      "Unified 42 government services into one intuitive platform, reduced citizen support tickets by 64%, and achieved full regulatory accreditation.",
    tech: ["Next.js", "Go", "PostgreSQL", "Kafka", "Kubernetes", "Tailwind CSS"],
    featured: true,
  },
  {
    slug: "wealth",
    sector: "Financial Services & Asset Management",
    client: "Premier Private Wealth Bank · London & Dubai",
    location: "London & Dubai (DIFC)",
    title: "Next-Generation Wealth & Portfolio Advisory Suite",
    summary:
      "A bespoke operating platform connecting ultra-high-net-worth clients, family offices, and wealth managers with real-time portfolio analytics, secure document exchange, and AI market briefings.",
    challenge:
      "Advisors were toggling between 6 disjointed tools, creating delays in portfolio rebalancing and poor digital touchpoints for international clients.",
    solution:
      "Engineered an ultra-fast, encrypted web and tablet application with sub-50ms market data streaming, biometric authorization, and multi-currency reporting.",
    metrics: [
      { label: "AUM Monitored", value: "$14.2B" },
      { label: "Client Onboarding Time", value: "Reduced 70%" },
      { label: "Data Latency", value: "< 45ms" },
      { label: "Security Vulnerabilities", value: "0" },
    ],
    outcome:
      "Replaced 6 legacy tools with a unified executive interface, adopted by 100% of wealth advisors and praised in European wealthtech awards.",
    tech: ["React", "TypeScript", "Python", "ClickHouse", "WebSockets", "Docker"],
    featured: true,
  },
  {
    slug: "energy",
    sector: "Energy, Utilities & Industrial SCADA",
    client: "Global Energy & Infrastructure Operator",
    location: "Khobar & Houston",
    title: "Real-Time Telemetry & Industrial Intelligence Suite",
    summary:
      "High-throughput SCADA telemetry collection, edge computing integration, and predictive maintenance dashboards for offshore and pipeline facilities.",
    challenge:
      "Field sensor data arrived with a 4-hour delay, preventing proactive maintenance and costing millions in unexpected hardware downtime.",
    solution:
      "Deployed distributed Kafka ingestion pipelines and Rust edge micro-nodes capable of processing 2.5 million sensor events per second with instant anomaly alerts.",
    metrics: [
      { label: "Events Processed", value: "2.5M / sec" },
      { label: "Telemetry Delay", value: "Reduced to < 1.2s" },
      { label: "Unscheduled Downtime", value: "-38%" },
      { label: "OPEX Saved", value: "$18.4M" },
    ],
    outcome:
      "Delivered real-time operational visibility from field valves to boardroom command centers, preventing 14 major pipeline outages in the first year.",
    tech: ["Rust", "Apache Kafka", "TimescaleDB", "React", "Grafana", "AWS IoT Core"],
    featured: true,
  },
  {
    slug: "health",
    sector: "Healthcare Systems & Hospital Networks",
    client: "Multi-State Clinical Provider Network",
    location: "New York & Riyadh",
    title: "Connected Clinical Operations & Patient Coordination Platform",
    summary:
      "An integrated clinical workflow engine that synchronizes scheduling, physician notes, diagnostic lab exchange, and patient messaging across 34 hospitals.",
    challenge:
      "Disparate EHR systems resulted in duplicated tests, clinical staff burnout, and missed patient follow-ups.",
    solution:
      "Engineered an HL7 FHIR-compliant interoperability bridge with an intuitive web platform for doctors and native mobile apps for patients.",
    metrics: [
      { label: "Patient Records Synced", value: "450K+" },
      { label: "Staff Administrative Time", value: "-45%" },
      { label: "No-Show Appointment Rate", value: "-28%" },
      { label: "HIPAA & MOH Compliance", value: "100%" },
    ],
    outcome:
      "Modernized care coordination for 34 medical centers, recognized for best-in-class clinical usability and patient trust.",
    tech: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "HIPAA Compliant AWS"],
    featured: true,
  },
];

export const principles = [
  {
    title: "Senior Architects from Kickoff to Scale",
    copy: "We reject the agency model of pitching senior leaders and handing execution to juniors. Your project is architected and built by engineers with over a decade of production experience.",
  },
  {
    title: "International Market & Sovereign Fluency",
    copy: "We understand the nuances of GCC sovereign entities (NCA, SAMA, in-country data hosting), UK/European financial regulations (FCA, GDPR), and US enterprise security (SOC 2, HIPAA).",
  },
  {
    title: "Commercial Discipline & Measurable ROI",
    copy: "We do not build software for vanity. Every architectural decision is rooted in speed-to-market, operational resilience, total cost of ownership, and measurable business impact.",
  },
  {
    title: "Full Intellectual Property Transfer",
    copy: "Zero vendor lock-in. You own 100% of the code, intellectual property, documentation, and infrastructure keys from day one.",
  },
];

export const stats = [
  { value: "4", label: "Global Regional Hubs", detail: "Riyadh · Dubai · London · New York" },
  { value: "99.998%", label: "Average Platform Uptime", detail: "Mission-critical SLA standards" },
  { value: "100%", label: "Senior Engineering Staffing", detail: "Zero junior bait-and-switch" },
  { value: "Bilingual", label: "Native Arabic & English", detail: "RTL UX & sovereign compliance" },
];

export const techStackCategories = [
  {
    name: "Frontend & Mobile",
    description: "Pixel-perfect, high-performance interfaces engineered for speed, internationalization, and accessibility.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "React Native", "Swift (iOS)", "Kotlin (Android)", "Framer Motion"],
  },
  {
    name: "Enterprise Backend & APIs",
    description: "Robust, decoupled server architectures built for high-throughput concurrency and zero-downtime scalability.",
    technologies: ["Go (Golang)", "Node.js / Bun", "Python / FastAPI", "Rust", "Java / Spring Boot", "GraphQL", "gRPC", "Event Sourcing"],
  },
  {
    name: "Data & Storage Systems",
    description: "Architected for transactional integrity, analytical speed, and sovereign multi-region redundancy.",
    technologies: ["PostgreSQL", "ClickHouse", "Redis Enterprise", "TimescaleDB", "Snowflake", "MongoDB", "Apache Kafka", "Elasticsearch"],
  },
  {
    name: "Cloud, SRE & DevSecOps",
    description: "Automated, reproducible infrastructure with bank-grade zero-trust isolation.",
    technologies: ["Kubernetes (EKS/AKS)", "Terraform", "AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud KSA", "Docker", "Datadog"],
  },
  {
    name: "Applied AI & Machine Learning",
    description: "State-of-the-art intelligent agents, semantic search, and private LLM deployments.",
    technologies: ["PyTorch", "LangChain", "LlamaIndex", "Hugging Face", "Milvus / Pinecone", "OpenAI / Claude API", "Ollama Private Models"],
  },
];

export const testimonials = [
  {
    quote:
      "Auvrion Technologies approached our sovereign platform not as an external vendor, but as true co-founders. Their understanding of Saudi data sovereignty and Vision 2030 standards combined with Silicon Valley engineering rigor made them indispensable.",
    name: "Eng. Fahad Al-Mutairi",
    role: "Chief Technology Advisor",
    org: "Saudi Sovereign Digital Program",
    country: "Saudi Arabia",
  },
  {
    quote:
      "The speed and elegance with which Auvrion delivered our private wealth advisory suite was astonishing. We replaced six disparate systems in under five months, and our clients immediately noted the world-class polish.",
    name: "Marcus Vance-Holloway",
    role: "Managing Director of Technology",
    org: "Mayfair & DIFC Private Wealth Bank",
    country: "United Kingdom & UAE",
  },
  {
    quote:
      "In high-stakes industrial telemetry, downtime costs millions. Auvrion rebuilt our real-time streaming infrastructure with Rust and Kafka. It hasn't dropped a single packet in two years of continuous operation.",
    name: "Dr. Elena Rostova",
    role: "VP of Global Digital Infrastructure",
    org: "International Energy & Industrials Group",
    country: "United States",
  },
];

export const faqs = [
  {
    question: "Where are Auvrion Technologies teams located and how do you operate globally?",
    answer:
      "Auvrion operates through four strategic regional hubs: Riyadh (Saudi Arabia), Dubai (UAE), London (UK), and New York (USA). Our senior delivery leads and architects are on the ground in your time zone, backed by dedicated cross-functional engineering pods that provide seamless synchronous collaboration and round-the-clock progress.",
  },
  {
    question: "How do you ensure data residency and regulatory compliance in Saudi Arabia and the UAE?",
    answer:
      "We design cloud architectures adhering strictly to Saudi National Cybersecurity Authority (NCA ECC & CCC) controls, Saudi SAMA banking frameworks, and UAE TDRA standards. We deploy on in-Kingdom cloud regions (such as Oracle Cloud Riyadh, Alibaba Cloud KSA, and Microsoft Azure UAE) with sovereign VPC isolation and certified data encryption at rest and in transit.",
  },
  {
    question: "What is your engagement model and typical timeline to launch?",
    answer:
      "We typically assemble dedicated cross-functional squads (Lead Architect, Senior Full-Stack Engineers, UX/UI Lead, QA & DevOps). Engagements range from high-impact 6-week architecture modernization sprints to comprehensive 3–9 month turnkey platform builds. We commit to working software demonstrated every two weeks from sprint one.",
  },
  {
    question: "Who owns the Intellectual Property (IP) and source code?",
    answer:
      "You do. 100% of the source code, design systems, architectural schematics, deployment scripts, and intellectual property are owned by your organization from day one under comprehensive bilateral agreements and strict NDAs.",
  },
  {
    question: "Do you build bilingual English and Arabic applications?",
    answer:
      "Yes. Internationalization is in our DNA. We do not simply translate text; we engineer native bidirectional (LTR/RTL) design systems with custom Arabic typographic hierarchy, cultural UX adaptations, and localized payment and identity gateways.",
  },
];
