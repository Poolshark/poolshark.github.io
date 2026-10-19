
export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string; // shown in the PDF CV
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  cvOnly?: boolean; // listed in the PDF CV but hidden on the website
}

export interface Language {
  name: string;
  level: string;
}

export type SkillGroupId = 'ai' | 'frontend' | 'backend' | 'cloud' | 'leadership' | 'science';

// Skills are grouped by area and described with real context
// instead of self-rated scores.
export interface SkillGroup {
  id: SkillGroupId;
  title: string;
  summary: string;
  skills: string[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  highlights: Highlight[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  additionalSkills?: string[]; // extra tools listed in the PDF CV only
  languages: Language[];
  projects?: Project[];
  contact: {
    email: string;
    phone?: string; // only printed in the PDF CV
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    bluesky?: string;
  };
}

export const resume: Resume = {
  name: "Flo Ragossnig",
  title: "Full-Stack Engineer | CTO | Entrepreneur",
  summary: "Full-stack engineer, former CTO and entrepreneur with 15+ years of experience in software architecture, technical leadership and product development. Founder of Heatscoring PRO and Synaptra Labs, combining hands-on engineering, SaaS development and practical AI consulting. Academic background in Astrophysics and Artificial Intelligence.",
  highlights: [
    { value: "15+", label: "Years building software" },
    { value: "3", label: "Companies founded" },
    { value: "2", label: "MSc degrees" }
  ],
  experience: [
    {
      title: "Founder & AI Consultant",
      company: "Synaptra Labs",
      period: "2025 - Present",
      description: [
        "Founded an AI consultancy supporting small businesses and independent developers",
        "Analyzed business workflows to identify practical AI applications and cost-saving opportunities",
        "Designed and prototyped RAG systems, AI agents and automated business workflows",
        "Set up and optimized AI development tooling, integrations and operating costs"
      ],
      technologies: [
        "Python",
        "TypeScript",
        "React",
        "Node.js",
        "OpenAI",
        "Claude",
        "Vertex AI",
        "Vercel"
      ]
    },
    {
      title: "Founder & Lead Engineer",
      company: "Heatscoring PRO",
      period: "2025 - Present",
      description: [
        "Founded a white-label competition SaaS used by leading World and European tours",
        "Customer acquisition; led commercial negotiations, pricing, onboarding and client relationships",
        "Designed a revenue model combining event licensing, registration fees, maintenance and custom development",
        "Built real-time scoring and broadcast feeds, load-tested for large numbers of concurrent subscribers",
        "Engineered offline-first judging, concurrency-safe scoring and automated heat transitions",
        "Developed scoring for five disciplines, elimination brackets, rankings and secure tenant integrations",
        "Integrated Stripe Connect payments and automated releases across five deployment environments"
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "tRPC",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "IndexedDB",
        "Clerk",
        "Stripe Connect",
        "Vercel",
        "Playwright"
      ]
    },

    {
      title: "Chief Technology Officer",
      company: "Codeversity",
      period: "2020 - 2025",
      location: "Vienna, Austria",
      description: [
        "Led engineering teams, mentoring developers and establishing technical standards",
        "Defined technology strategy, architecture and product development priorities",
        "Managed engineering budgets, resources and project delivery",
        "Drove technical innovation and aligned development with business objectives"
      ],
      technologies: ["React", "TypeScript", "JavaScript", "GraphQL", "Node.js", "AWS", "Dgraph", "Jira", "Bitbucket", "GitLab", "Auth0", "JoT"]
    },
    {
      title: "Founder/CEO",
      company: "Webleaders",
      period: "2012 - present",
      location: "Vienna, Austria",
      description: [
        "Founded and managed a software development and consulting business",
        "Led client acquisition, commercial relationships and project delivery",
        "Developed custom web applications and scalable software solutions"
      ],
      technologies: [
        "TypeScript", "React", "Next.js", "Node.js", "PHP", "Python", "PostgreSQL", "Docker", "AWS", "Vercel"
      ],
    },
    {
      title: "Technical Lead & Competition Judge",
      company: "Freestyle Pro Tour",
      period: "2017 - present",
      description: [
        "Developed and maintained live-scoring software and competition tools",
        "Led technical operations and supported professional windsurfing events",
        "Managed judging workflows, competition formats and event operations",
        "Improved application performance and software delivery processes"
      ],
      technologies: ["PHP", "WordPress", "Preact", "React", "Docker", "TypeScript", "JavaScript", "GitHub", "GraphQL", "REST", "JoT", "Bun"]
    },
    {
      title: "Senior Full-Stack Developer (Contract)",
      company: "Kalbeck Digital",
      period: "2020 - 2022",
      location: "Vienna, Austria",
      description: [
        "Developed and integrated full-stack web applications",
        "Provided architecture consulting, code reviews and technical guidance"
      ],
      technologies: ["TypeScript", "JavaScript", "Node.js", "PHP", "WordPress", "GraphQL"]
    },
    {
      title: "Researcher/Lecturer",
      company: "University of Vienna",
      period: "2013 - 2020",
      location: "Vienna, Austria",
      description: [
        "Conducted computational astrophysics research on primordial atmospheres and protostellar disks",
        "Developed numerical simulations and scientific software",
        "Lectured Theoretical Astrophysics, Mathematical & Physical Methods in Astrophysics and Numerical Models",
        "Supervised BSc and MSc students with their theses",
        "Published scientific research findings"
      ],
      technologies: ["Fortran", "Python", "Node.js", "PHP", "LaTeX", "Mathematica", "Bash"]
    },
    {
      title: "Centre Manager & Head of IT",
      company: "Kefalos Windsurfing & Sailing",
      period: "2005 - 2019",
      location: "Kefalos, Greece",
      description: [
        "Managed centre operations, staffing and financial planning",
        "Developed customer relationships and drove business development",
        "Built and maintained the company website and online booking system"
      ],
      technologies: ["PHP", "WordPress", "Google Ads", "SEO"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "IU International University of Applied Sciences, Munich, Germany",
      period: "2024 - 2025",
      description: "Focus on NLP and Computer Vision. Special focus on Visual Question Answering Systems."
    },
    {
      degree: "Master of Science in Astronomy and Astrophysics",
      institution: "University of Vienna, Vienna, Austria",
      period: "2011 - 2013",
      description: "High Energy Astrophysics, Modeling Primordial Atmospheres & Protostellar Disks."
    },
    {
      degree: "Bachelor of Science in Astronomy and Astrophysics",
      institution: "University of Vienna, Vienna, Austria",
      period: "2008 - 2011",
      description: "Computational Science. Focus on Celestial Mechanics."
    },
    {
      degree: "Studies in Mechanical Engineering",
      institution: "Technical University of Vienna, Vienna, Austria",
      period: "2007",
      cvOnly: true
    },
    {
      degree: "Studies in Mechanical Engineering",
      institution: "Technical University of Munich, Munich, Germany",
      period: "2003",
      cvOnly: true
    }
  ],
  skills: [
    {
      id: "ai",
      title: "AI & LLMs",
      summary: "Practical AI for real businesses: retrieval, agents and workflow automation, backed by an MSc in Artificial Intelligence.",
      skills: ["OpenAI", "Claude", "Vertex AI", "RAG Systems", "AI Agents", "Workflow Automation", "NLP", "Computer Vision", "Neural Networks (CNN, RNN)"]
    },
    {
      id: "frontend",
      title: "Frontend",
      summary: "Real-time, offline-first interfaces used live by judges and broadcast feeds at international events.",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Preact", "IndexedDB"]
    },
    {
      id: "backend",
      title: "Backend & Data",
      summary: "Type-safe APIs, concurrency-safe data models and payments for multi-tenant SaaS.",
      skills: ["Node.js", "tRPC", "GraphQL", "REST", "PostgreSQL", "Prisma", "Supabase", "Stripe Connect"]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      summary: "Automated releases across multiple environments, with end-to-end tests and load testing before anything ships.",
      skills: ["AWS", "Vercel", "Docker", "CI/CD", "Playwright"]
    },
    {
      id: "leadership",
      title: "Leadership & Product",
      summary: "Five years as CTO and three companies founded: technical direction, mentoring teams and owning client relationships.",
      skills: ["System Architecture", "Team Leadership", "Mentoring", "Technology Strategy", "Product Strategy", "Agile Methodologies"]
    },
    {
      id: "science",
      title: "Scientific Computing",
      summary: "Seven years of computational astrophysics research, building numerical simulations of protostellar disks.",
      skills: ["Fortran", "Python", "Numerical Simulation", "Mathematica", "LaTeX", "Bash"]
    }
  ],
  additionalSkills: [
    "Go", "Rust", "C", "C++", "SQL", "MySQL", "HTML", "CSS", "SASS", "Relay", "Dgraph",
    "Webpack", "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Auth0", "Linux", "macOS"
  ],
  languages: [
    { name: "German", level: "Native" },
    { name: "English", level: "Fluent (academic)" },
    { name: "Spanish", level: "A2 (beginner)" }
  ],
  contact: {
    email: "flo.ragossnig@icloud.com",
    location: "Vienna, Austria",
    website: "poolshark.github.io",
    linkedin: "linkedin.com/in/flo-ragossnig-44b74aa3/",
    github: "github.com/Poolshark",
    bluesky: "bsky.app/profile/florag.bsky.social"
  }
};
