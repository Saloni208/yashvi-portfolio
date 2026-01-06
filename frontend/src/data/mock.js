// Portfolio Mock Data - Real content (Gauransh Jaroli)

export const personalInfo = {
  name: "Gauransh Jaroli",
  role: "Software Engineer | Full-Stack Developer",
  summary:
    "Software Engineer focused on building production-grade web applications with real-world business use cases. Experienced in frontend systems, authentication flows, admin dashboards, and debugging complex integration issues across modern tech stacks.",
  email: "gauranshjaroli@gmail.com", // change if needed
  linkedin: "https://www.linkedin.com/in/gauransh-jaroli",
  github: "https://github.com/gauranshjaroli", // change if private
  location: "Udaipur, Rajasthan, India",
  resumeLink: "/resume.pdf",
};

export const skills = [
  { name: "React", icon: "Code2" },
  { name: "Next.js", icon: "Layers" },
  { name: "JavaScript (ES6+)", icon: "FileCode" },
  { name: "Node.js", icon: "Server" },
  { name: "FastAPI", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "PostgreSQL", icon: "HardDrive" },
  { name: "Supabase", icon: "Database" },
  { name: "Tailwind CSS", icon: "Palette" },
];

export const projects = [
  {
    id: 1,
    title: "ParshWebCraft – Web Agency Platform",
    description:
      "Production-ready SaaS-focused web agency platform designed to generate real client enquiries and showcase service offerings.",
    longDescription:
      "Designed and developed a live web agency platform from scratch with a strong focus on SEO, performance, and conversion-driven UI. Implemented secure authentication, admin-protected routes, and production deployment using modern web infrastructure.",
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    category: "Production Web Platform",
    link: "https://www.parshwebcraft.in",
    github: null,
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Jayesh Sir E-Learning Platform (PWA)",
    description:
      "PWA-first e-learning platform with secure login, course access control, and admin-managed content delivery.",
    longDescription:
      "Built a scalable online learning system focused on real student usage. Implemented authentication, protected routes, enrollment logic, and session handling. Designed the system for future Android Play Store deployment using PWA + Capacitor.",
    techStack: ["Next.js", "Supabase", "PWA", "TypeScript"],
    category: "EdTech Platform",
    link: "#",
    github: null,
    featured: true,
    image: null,
  },
  {
    id: 3,
    title: "FreshMart – Grocery Delivery & Admin System",
    description:
      "Blinkit-style grocery delivery MVP with admin dashboard, product management, and order flow.",
    longDescription:
      "Developed a quick-commerce grocery platform including frontend, backend APIs, and admin panel. Solved real-world issues such as MongoDB Atlas TLS setup, CORS, auth-token mismatches, and dependency conflicts while stabilizing the application.",
    techStack: ["React", "FastAPI", "MongoDB", "Python"],
    category: "E-commerce / Quick Commerce",
    link: "#",
    github: null,
    featured: true,
    image: null,
  },
  {
    id: 4,
    title: "EasyMed – Pharmacy Inventory System (Concept)",
    description:
      "Pharmacy inventory system focused on batch-wise stock tracking and expiry visibility.",
    longDescription:
      "Designed a pharmacy inventory solution after observing real medical store workflows. Focused on batch-level stock, expiry tracking, and low-stock alerts while avoiding heavy ERP complexity to improve daily usability for shop owners.",
    techStack: ["System Design", "Inventory Logic", "Database Modeling"],
    category: "Healthcare / Inventory",
    link: "#",
    github: null,
    featured: false,
    image: null,
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];
