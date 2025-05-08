
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
  title: "Senior Developer (Full Stack) & Enthusiast",
  summary: "Experienced technology leader with over 15 years of expertise in building and scaling software solutions. Passionate about creating high-performance teams and driving innovation through technology. Specialized in modern web development, cloud architecture, and technical leadership. Background in Astrophysics and AI. Passionate windsurfer and surfer (involved in the Freestyle Pro Tour)",
  experience: [
    {
      title: "Chief Technology Officer",
      company: "Codeversity",
      period: "2020 - 2025",
      description: [
        "Feature development",
        "Prototyping new features and innovative technologies",
        "Project development",
        "Leading and mentoring high performance development teams",
        "Driving innovation and research of new features",
        "Manage technology budgets; Ressource allocation",
        "Aligning technology initiatives with business objectives",
        "Establishing and maintaining best practices and compliances"
      ],
      technologies: ["React", "Typescript", "Javascript", "GraphQL", "Node.js", "AWS", "DGraph", "Jira", "Bitbucket", "GitLab", "Auth0", "JoT"]
    },
    {
      title: "Founder/CEO",
      company: "Webleaders",
      period: "2012 - present",
      description: [
        "Software development",
        "Define and execute company vison",
        "Client aquisition",
        "Sustainable business development and growth"
      ],
      technologies: ["PHP", "Wordpress", "React", "Next.js", "Docker", "Typescript", "Javascript", "Python", "Rust", "Go", "Github", "Bitbucket", "AWS", "Vercel", "SQL", "GraphQL", "REST", "TRPC", "JoT", "Bun", "Vite"]
    },
    {
      title: "Technical Lead/Judge",
      company: "Freestyle Pro Tour",
      period: "2017 - present",
      description: [
        "Led development of the company's livescoring application",
        "Improved application performance through optimization initiatives",
        "Mentored junior developers and established coding standards",
        "Implemented reliable CI/CD strategy",
        "Manage sporting events in a competitive and professional format"
      ],
      technologies: ["PHP", "Wordpress", "Preact", "React", "Docker", "Typescript", "Javascript", "Github", "GraphQL", "REST", "JoT", "Bun"]
    },
    {
      title: "Senior Developer (Fullstack)/Subcontractor",
      company: "Kalbeck Digital",
      period: "2020 - 2022",
      description: [
        "Develop and integrate code for web projects",
        "Code reviews",
        "IT consulting (architecture, software design and standards)"
      ],
      technologies: ["Typescript", "Javascript", "Node.js", "PHP", "Wordpress", "GraphQL"]
    },
    {
      title: "Researcher/Lecturer",
      company: "University of Vienna",
      period: "2013 - 2020",
      description: [
        "Lecturing various classes (Theoretical Astrophysics, Mathematical & Physical Methods in Astrophysics, Numerical Models, etc.)",
        "Research activity (mainly Primordial Atmospheres and Protostellar Disks)",
        "Develop, improve and maintain research specific computer models",
        "Publish research findings",
        "Assisting BSc and MSc students with their thesis"
      ],
      technologies: ["Fortran", "Python", "Node.js", "PHP", "LateX", "Mathematica", "Bash"]
    },
    {
      title: "Centre Manager & Head of IT",
      company: "Kefalos Windsurfing & Sailing",
      period: "2005 - 2019",
      description: [
        "Oversaw core management functions, including team organization, staff motivation, and operational planning.",
        "Manage budgets and business expenses",
        "Building and maintaining customer base and customer-business relationships",
        "Develop and maintain business web presence and online bokking tool"
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
