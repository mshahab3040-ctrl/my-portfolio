import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi";
import { SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql, SiFigma, SiGithub, SiFramer, SiRedux, SiNextdotjs } from "react-icons/si";
import { FaLaptopCode, FaPalette, FaServer, FaDatabase, FaPenFancy } from "react-icons/fa";

export const heroSocials = [
  { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com" },
  { label: "GitHub", icon: FiGithub, href: "https://github.com" },
  { label: "Email", icon: FiMail, href: "mailto:shahab@example.com" }
];

export const aboutStats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "38" },
  { label: "Happy Clients", value: "22" }
];

export const skillsData = [
  {
    title: "Frontend",
    description: "Modern interface development using React and Tailwind.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    level: 92
  },
  {
    title: "Backend",
    description: "APIs, serverless, authentication and performance tuning.",
    skills: ["Node.js", "Express", "Firebase", "REST APIs", "GraphQL"],
    level: 84
  },
  {
    title: "Database",
    description: "Fast, scalable data storage for modern web apps.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    level: 86
  },
  {
    title: "Tools & Tech",
    description: "Developer tools and collaboration platforms for delivery.",
    skills: ["Git", "Vite", "Figma", "Jest", "Docker"],
    level: 88
  }
];

export const services = [
  {
    title: "Web Development",
    description: "Full-featured web platforms built with React, modern UI and performance-first architecture.",
    icon: FaLaptopCode
  },
  {
    title: "React Development",
    description: "Reusable components, state management and polished user experiences tailored to your brand.",
    icon: SiReact
  },
  {
    title: "Full Stack Development",
    description: "Server, database and client integration for production-ready applications.",
    icon: FaServer
  },
  {
    title: "UI/UX Design",
    description: "Glassmorphism interfaces and premium visual systems for digital products.",
    icon: FaPalette
  }
];

export const projects = [
  {
    title: "SaaS Analytics Dashboard",
    category: "React",
    description: "A premium analytics experience with live charts, reporting and dark-mode theming.",
    tech: ["React", "Tailwind", "Recharts"],
    live: "https://example.com",
    github: "https://github.com",
    gradient: "from-slate-900 via-slate-800 to-slate-950"
  },
  {
    title: "E-commerce Storefront",
    category: "Full Stack",
    description: "A conversion-focused storefront with checkout flows and inventory management.",
    tech: ["Next.js", "Node.js", "Stripe"],
    live: "https://example.com",
    github: "https://github.com",
    gradient: "from-slate-900 via-slate-800 to-slate-950"
  },
  {
    title: "Portfolio Platform",
    category: "UI/UX",
    description: "A modern portfolio solution styled with gradients, glass effects, and motion.",
    tech: ["React", "Framer Motion", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com",
    gradient: "from-slate-900 via-slate-800 to-slate-950"
  }
];

export const experienceTimeline = [
  {
    company: "Edge Labs",
    role: "Lead Frontend Engineer",
    period: "2024 - Present",
    description: "Leading frontend development for enterprise-grade web products with pixel-perfect design and fast load times.",
    location: "Remote"
  },
  {
    company: "Nimbus Studio",
    role: "Full Stack Developer",
    period: "2022 - 2024",
    description: "Built scalable SaaS applications and integrated third-party services for high-traffic use cases.",
    location: "Hybrid"
  },
  {
    company: "Bright Digital",
    role: "React Developer",
    period: "2020 - 2022",
    description: "Delivered responsive websites, landing pages and internal dashboards to support growing digital brands.",
    location: "Remote"
  }
];

export const testimonials = [
  {
    name: "Amira Khan",
    role: "Founder @ Nova Studio",
    review: "Shahab transformed our product roadmap into a polished web experience with fast performance and beautiful interactions.",
    company: "Nova Studio"
  },
  {
    name: "Lucas Park",
    role: "CTO @ Grid Systems",
    review: "His attention to detail, clean code and responsiveness made our launch feel premium and professional.",
    company: "Grid Systems"
  },
  {
    name: "Nina Patel",
    role: "Product Lead @ Orion",
    review: "A talented developer who delivered the project on time and elevated the visual storytelling of our digital brand.",
    company: "Orion"
  }
];

export const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "shahabmian17@gmail.com"
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 370 4100700"
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Bahawalpur, Pakistan"
  }
];

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { icon: FiGithub, href: "https://github.com" },
  { icon: FiLinkedin, href: "https://linkedin.com" },
  { icon: FiExternalLink, href: "https://dribbble.com" }
];
