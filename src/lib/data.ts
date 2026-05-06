// ============================================================
// data.ts — Single source of truth for all portfolio content.
// Update content here without touching any component files.
// ============================================================

// ---- Navigation ----
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Exploring", href: "#exploring" },
  { label: "Contact", href: "#contact" },
] as const;

// ---- Hero ----
export const hero = {
  greeting: "Hi, I'm Berk.",
  subtitle: "Management Information Systems Student & Tech Enthusiast",
  valueProp:
    "Bridging the gap between technical execution and business logic, with a passion for continuous learning.",
  cta: {
    primary: { label: "Explore My Work", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
} as const;

// ---- About ----
export const about = {
  paragraphs: [
    "I'm a 24-year-old Management Information Systems student at Dokuz Eylül University. I've never been a fan of boxing myself into a single title. I like exploring how technology and business intersect—whether that means working with data, trying my hand at web development, or organizing community events. I prefer learning by doing and keeping things practical.",
  ],
  traits: [
    {
      label: "Analytical Thinking",
      description: "Breaking complex problems into data-driven decisions.",
    },
    {
      label: "Adaptability",
      description: "Comfortable jumping between tech stacks and roles.",
    },
    {
      label: "Technical Foundation",
      description: "From databases to deployment, full-cycle understanding.",
    },
  ],
} as const;

// ---- Bento Grid Items ----
export type BentoItem = {
  id: string;
  title: string;
  description?: string;
  items?: string[];
  span: "normal" | "wide" | "tall" | "large";
  variant: "tech" | "data" | "leadership" | "life";
  icon?: string; // emoji fallback
};

export const bentoItems: BentoItem[] = [
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "Technologies I've worked with.",
    items: ["Next.js", "React", "Node.js", "JavaScript", "Supabase", "PostgreSQL"],
    span: "wide",
    variant: "tech",
    icon: "⚡",
  },
  {
    id: "data-logic",
    title: "Data & Logic",
    description: "Structured thinking, queried results.",
    items: ["Python", "SQL", "MySQL"],
    span: "normal",
    variant: "data",
    icon: "📊",
  },
  {
    id: "leadership",
    title: "Community Leadership",
    description: "President of Data Community — organizing events, mentoring peers, and building a culture of continuous learning.",
    span: "normal",
    variant: "leadership",
    icon: "🎯",
  },
];

// ---- Projects & Experience ----
export type ProjectItem = {
  id: string;
  title: string;
  type: "project" | "experience";
  tags: string[];
  goal: string;
  achievement: string;
  image?: string; // path in /public/images
};

export const projects: ProjectItem[] = [
  {
    id: "decision-support",
    title: "FinTrack (Decision Support System)",
    type: "project",
    tags: ["MySQL", "JavaScript", "Node.js"],
    goal: "Build a platform for businesses to effectively track their corporate loans.",
    achievement: "Co-developed a full-stack dashboard with 2 teammates to manage and report multi-source loan tracking.",
    image: "/images/fintrack-dashboard.png",
  },
  {
    id: "smart-awning",
    title: "Smart Awning Automation (IoT Prototype)",
    type: "project",
    tags: ["Raspberry Pi", "Python", "Hardware Prototyping", "IoT"],
    goal: "Build an automated, weather-responsive awning system that protects spaces from rain while prioritizing fire safety.",
    achievement: "Developed a physical Raspberry Pi-controlled prototype using Python. The system processes data from rain and smoke sensors to drive a DC motor. I faced hardware limitations with perfect PWM speed control, so I adapted the logic to use a reliable fixed-speed approach to ensure system stability.",
    image: "/images/smart-awning.png",
  },
  {
    id: "iskur-youth",
    title: "Archive and Operations Team Leader @ İŞKUR Youth Program",
    type: "experience",
    tags: ["Team Leadership", "Digital Transformation", "Operations"],
    goal: "Lead the digital transformation of physical archives and oversee daily team operations.",
    achievement: "Led an operations team to digitize legacy documents and newspapers, actively contributing to the institution's digital transformation process.",
  },
  {
    id: "ai-academy",
    title: "AI and Technology Academy Scholar",
    type: "experience",
    tags: ["AI/ML", "Python", "Data Science"],
    goal: "Deepen understanding of artificial intelligence, machine learning fundamentals, and their practical applications.",
    achievement: "Completed an intensive curriculum covering supervised learning, neural networks, and real-world AI project workflows.",
  },
  {
    id: "gdg-core",
    title: "Core Team Member @ GDG on Campus DEU",
    type: "experience",
    tags: ["Community Leadership", "Event Organization"],
    goal: "Support the local student developer community and help organize tech events.",
    achievement: "Served on the Core Team for a year, coordinating community activities and fostering a collaborative environment for peers.",
  },
  {
    id: "aspire-leaders",
    title: "Leaders Program @ Aspire Institute",
    type: "experience",
    tags: ["Leadership", "Professional Development"],
    goal: "Participate in a global leadership development program supported by Harvard University.",
    achievement: "Completed comprehensive training and mentorship focusing on social impact, professional development, and leadership skills alongside a global cohort of high-potential students.",
  },
  {
    id: "data-community",
    title: "President @ Data Community Campus (Veri Topluluğu Kampüs)",
    type: "experience",
    tags: ["Community Leadership", "Event Organization"],
    goal: "Build an active, hands-on community for students interested in data and technology.",
    achievement: "Currently leading the student club (which is active in both Izmir and Istanbul). I organize events, bring tech enthusiasts together, and try to create a practical learning environment for my peers outside of regular classes.",
  },
];

// ---- Currently Exploring ----
export type ExploringItem = {
  id: string;
  label: string;
  description: string;
  icon: string; // emoji
};

export const exploringItems: ExploringItem[] = [
  {
    id: "ai-dev",
    label: "AI-Assisted Development",
    description: "Cursor & prompt engineering",
    icon: "🤖",
  },
  {
    id: "analog-audio",
    label: "Analog Audio",
    description: "Building a vinyl record collection",
    icon: "🎵",
  },
  {
    id: "rock-climbing",
    label: "Mountaineering & Climbing",
    description: "Spending time outdoors and climbing",
    icon: "🧗",
  },
  {
    id: "basketball",
    label: "Basketball",
    description: "Playing actively on the court",
    icon: "🏀",
  },
  {
    id: "guitar",
    label: "Electric Guitar",
    description: "Playing my Ibanez and practicing rock tones",
    icon: "🎸",
  },
];

// ---- Social / Contact ----
export const contact = {
  email: "satakreb@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/berkatas/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Satakreb",
      icon: "github",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/satakreb",
      icon: "instagram",
    },
  ],
  terminal: {
    prompt: "berk@portfolio:~$",
    helpText: 'Type "contact" to reach me, or "help" for commands.',
    commands: {
      contact: "Opening email client → satakreb@gmail.com",
      help: 'Available commands: contact, about, socials, clear',
      about: "Berk Atas — MIS Student & Tech Enthusiast. Building at the intersection of code and business.",
      socials: "LinkedIn: linkedin.com/in/berkatas/ | GitHub: github.com/Satakreb | Instagram: @satakreb",
      clear: "",
    } as Record<string, string>,
  },
} as const;

// ---- Metadata ----
export const siteMetadata = {
  title: "Berk Atas — Portfolio",
  description:
    "Management Information Systems student & tech enthusiast. Bridging the gap between technical execution and business logic.",
  url: "https://berkatas.dev",
  ogImage: "/og-image.png",
} as const;
