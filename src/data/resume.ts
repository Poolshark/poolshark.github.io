
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level?: number; // 1-10
  category: 'frontend' | 'backend' | 'devops' | 'management' | 'other';
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
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
    bluesky?: string;
  };
}

export const resume: Resume = {
  name: "Flo Ragossnig",
  title: "Full-Stack Engineer | CTO | Entrepreneur",
  summary: "Full-stack engineer, former CTO and entrepreneur with 15+ years of experience in software architecture, technical leadership and product development. Founder of Heatscoring PRO and Axiom Labs, combining hands-on engineering, SaaS development and practical AI consulting. Academic background in Astrophysics and Artificial Intelligence.",
  experience: [
    {
      title: "Founder & AI Consultant",
      company: "Axiom Labs",
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
        "Founded a white-label competition SaaS used by the PWA World Tour and Freestyle Pro Tour",
        "Secured a paying tour customer; led commercial negotiations, pricing, onboarding and client relationships",
        "Designed a revenue model combining event licensing, registration fees, maintenance and custom development",
        "Built real-time scoring and broadcast feeds, load-tested for ~500 concurrent subscribers",
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
      description: [
        "Led engineering teams, mentoring developers and establishing technical standards",
        "Defined technology strategy, architecture and product development priorities",
        "Managed engineering budgets, resources and project delivery",
        "Drove technical innovation and aligned development with business objectives"
      ],
      technologies: ["React", "Typescript", "Javascript", "GraphQL", "Node.js", "AWS", "DGraph", "Jira", "Bitbucket", "GitLab", "Auth0", "JoT"]
    },
    {
      title: "Founder/CEO",
      company: "Webleaders",
      period: "2012 - present",
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
      technologies: ["PHP", "Wordpress", "Preact", "React", "Docker", "Typescript", "Javascript", "Github", "GraphQL", "REST", "JoT", "Bun"]
    },
    {
      title: "Senior Full-Stack Developer (Contract)",
      company: "Kalbeck Digital",
      period: "2020 - 2022",
      description: [
        "Developed and integrated full-stack web applications",
        "Provided architecture consulting, code reviews and technical guidance"
      ],
      technologies: ["Typescript", "Javascript", "Node.js", "PHP", "Wordpress", "GraphQL"]
    },
    {
      title: "Researcher/Lecturer",
      company: "University of Vienna",
      period: "2013 - 2020",
      description: [
        "Conducted computational astrophysics research on primordial atmospheres and protostellar disks",
        "Developed numerical simulations and scientific software",
        "Lectured in astrophysics and supervised undergraduate and graduate students",
        "Published scientific research findings"
      ],
      technologies: ["Fortran", "Python", "Node.js", "PHP", "LateX", "Mathematica", "Bash"]
    },
    {
      title: "Centre Manager & Head of IT",
      company: "Kefalos Windsurfing & Sailing",
      period: "2005 - 2019",
      description: [
        "Managed centre operations, staffing and financial planning",
        "Developed customer relationships and drove business development",
        "Built and maintained the company website and online booking system"
      ],
      technologies: ["PHP", "Wordpress", "Google Ads", "SEO"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "IU International University of Applied Sciences, Munich, Germany",
      period: "2024 - 2025",
      description: "Focus on NLP and Computer Vision. Special focus on Vusual Question Answering Systems."
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
      description: "Computional Science. Focus on Celestial Mechanics."
    }
  ],
  skills: [
    { name: "React", level: 9, category: "frontend" },
    { name: "Next.js", level: 9, category: "frontend" },
    { name: "TypeScript", level: 9, category: "frontend" },
    { name: "Javascript", level: 8, category: "frontend" },
    { name: "Node.js", level: 8, category: "backend" },
    { name: "Python", level: 7, category: "backend" },
    { name: "Fortran", level: 8, category: "backend" },
    { name: "GraphQL", level: 8, category: "backend" },
    { name: "REST", level: 9, category: "backend" },
    { name: "AWS", level: 8, category: "devops" },
    { name: "TRPC", level: 7, category: "backend" },
    { name: "Docker", level: 8, category: "devops" },
    { name: "Vercel", level: 7, category: "devops" },
    { name: "CI/CD", level: 9, category: "devops" },
    { name: "System Architecture", level: 9, category: "management" },
    { name: "Team Leadership", level: 8, category: "management" },
    { name: "Agile Methodologies", level: 8, category: "management" },
    { name: "Product Strategy", level: 8, category: "management" }
  ],
  contact: {
    email: "flo.ragossnig@icloud.com",
    linkedin: "linkedin.com/in/flo-ragossnig-44b74aa3/",
    github: "github.com/Poolshark",
    bluesky: "bsky.app/profile/florag.bsky.social"
  }
};
