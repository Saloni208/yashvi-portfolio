// Portfolio Mock Data — Yashvi Rajpal (Resume Accurate)

export const personalInfo = {
  name: "Saloni Pokharna",
  role: "Software Engineer | Web Developer",
  summary:
    "Computer Science with specialization in Artificial Intelligence and Machine Learningundergraduate with hands-on experience in full-stack development and machine learning. Passionate about building scalable web applications, clean APIs, and applying AI techniques to solve real-world problems.",
  email: "salonipokharna20@gmail.com",
  linkedin: "https://www.linkedin.com/in/saloni-pokharna-021749289",
  github: "https://github.com/Saloni208",
  location: "Udaipur,Rajasthan,India",
  resumeLink: "https://docs.google.com/document/d/1KNft6wHS-ZF4t3SCv_6vhe7O59hN3Y5V/edit?usp=sharing&ouid=105632391214237947835&rtpof=true&sd=true",
};

export const skills = [
  { name: "JavaScript (ES6+)", icon: "FileCode" },
  { name: "Python", icon: "FileCode" },
  { name: "MySQL", icon: "HardDrive" },
  { name: "Machine Learning", icon: "Brain" },
  { name: "c++", icon: "Code2" },
  { name: "MATLAB", icon: "Code2" }
];

export const projects = [
  {
    id: 1,
    title: "Adaptive Traffic Signal",
    description:
      "The Adaptive Traffic Signal Timer (ATST) offers a scalable and efficient solution by dynamically adjusting signal durations using real-time traffic data.",
    longDescription:
      "Built a complete Adaptive Traffic Signal to reduce traffic",
    techStack: [
      "Python",
      "Yolo model",
      "OpenCV",
      "Deep Learning Framework",
    ],
    category: "AI, Computer Vision, Embedded Systems",
    link: null,
    github: null,
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "One Solution"  ,
    description:
      "The One Solution is a comprehensive service marketplace platform designed to connect skilled service providers with customers seeking quality home and professional services.",
    longDescription:
      "It is a soltion for all the types of services required",
    techStack: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "Javascript",
    ],
    category: "Full Stack Web Development | Service Marketplace Platform",
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
