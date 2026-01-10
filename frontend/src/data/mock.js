// Portfolio Mock Data — Yashvi Rajpal (Resume Accurate)

export const personalInfo = {
  name: "Yashvi Rajpal",
  role: "Software Engineer | Full-Stack & ML Developer",
  summary:
    "Computer Science undergraduate with hands-on experience in full-stack development and machine learning. Passionate about building scalable web applications, clean APIs, and applying AI techniques to solve real-world problems.",
  email: "yashvirajpal0@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashvi-rajpal",
  github: "https://github.com/yashvirajpal",
  location: "Greater Noida, Uttar Pradesh, India",
  resumeLink: "/resume.pdf",
};

export const skills = [
  { name: "React.js", icon: "Code2" },
  { name: "Node.js", icon: "Server" },
  { name: "Express.js", icon: "Server" },
  { name: "JavaScript (ES6+)", icon: "FileCode" },
  { name: "Python", icon: "FileCode" },
  { name: "FastAPI", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "PostgreSQL", icon: "HardDrive" },
  { name: "MySQL", icon: "HardDrive" },
  { name: "Machine Learning", icon: "Brain" },
  { name: "OpenCV", icon: "Brain" },
  { name: "Git & GitHub", icon: "Code2" },
];

export const projects = [
  {
    id: 1,
    title: "Dois Bros Web Application",
    description:
      "Full-stack food ordering platform with real-time order management and admin dashboard.",
    longDescription:
      "Built a complete food ordering web application allowing users to browse menus, place orders, and track order status. Developed an admin dashboard to manage menus and orders in real time, reducing manual coordination by 40%.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "REST APIs",
    ],
    category: "Full-Stack Web Application",
    link: "https://dois-bros-frontend.vercel.app/",
    github: null,
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Sign Language Recognition System",
    description:
      "Deep learning-based system for recognizing sign language gestures from video frames.",
    longDescription:
      "Built and evaluated deep learning models on 5,000+ image frames for sign language recognition. Improved model accuracy by 15% through preprocessing and architectural optimizations, and proposed OpenCV-based enhancements for real-time usage.",
    techStack: [
      "Python",
      "Deep Learning",
      "OpenCV",
      "NumPy",
      "Keras",
    ],
    category: "Machine Learning / Computer Vision",
    link: "#",
    github: null,
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: "RADARSAT-1 SAR Image Despeckling",
    description:
      "Deep learning techniques to improve SAR image quality for remote sensing.",
    longDescription:
      "Designed and applied deep learning methods for despeckling 10,000+ SAR images from RADARSAT-1 Standard Beam data. Improved image clarity and demonstrated applications in remote sensing and Earth observation.",
    techStack: [
      "Python",
      "Deep Learning",
      "Image Processing",
      "Remote Sensing",
    ],
    category: "Research / Deep Learning",
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
