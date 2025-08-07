import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi, I'm a passionate Senior Technical Trainer and former Software Engineer with a solid foundation in backend development, cloud systems, and technical education. I specialize in building scalable backend systems using Java, Spring Boot, and MongoDB/PostgreSQL — and I love simplifying complex tech for learners to boost their industry readiness.`;

export const ABOUT_TEXT = `, a Senior Technical Trainer and ex-Software Engineer passionate about backend systems and teaching.
💻 I specialize in Java, Spring Boot, MongoDB, and building scalable REST APIs with secure, real-world architectures.
🧑‍🏫 At Six Phrase, I design hands-on training that bridges the gap between academics and industry, boosting job-readiness.
🌐 At HCL, I worked on cloud migration, performance tuning, and secure backend development.
🚀 My projects include a secure banking API, real-time ride-sharing backend, and a ticket booking system.
📍 Based in Erode, I love mentoring, learning new tech, and helping others grow in their careers.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Technical Trainer",
    company: "Six Phrase Edu Tech Pvt Ltd.",
    location:"Coimbatore, Tamil Nadu",
    description: `Conducted career-focused technical training sessions emphasizing hands-on project work and industry-relevant skills. Delivered in-depth training on Java, Spring Boot, WebSocket, and RESTful API development, enabling students to become job-ready with practical backend and real-time web application experience.`,
    technologies: ["Java", "Spring Boot", "WebSocket", "REST APIs"],
  },
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "HCL Technologies Ltd",
    location:"Bangalore , Karnataka",
    description: `Worked on backend application development and performance tuning tasks. Contributed to large-scale cloud migration projects, ensuring smooth transition with minimal downtime. Completed comprehensive full-stack development training under the HCL TSS program.`,
    technologies: ["Backend development", "cloud migration", "performance tuning"],
  },

  {
    year: "2021  - 2021",
    role: "Quality Engineer",
    company: "NCR Corporation India Pvt Ltd",
    location:"Chennai , Tamil Nadu",  
    description: `Implemented Six Sigma methodologies to improve ATM software reliability, resulting in a 30% reduction in defects. Collaborated with cross-functional teams to identify quality issues and streamline processes.`,
    technologies: ["Introduced Six Sigma processes, reducing ATM defects by 30%"],
  },
];

export const PROJECTS = [
  {
    title: "🔧 Banking System with Transaction APIs",
    image: project1,
    description:
      "Developed a secure RESTful banking API with features like transfer, deposit, and balance checksImplemented using Spring Boot, PostgreSQL, OAuth2, and JWT for authentication and authorization.",
    technologies: ["Spring Boot ", "PostgreSQL", "OAuth2 ", "JWT "],
  },
  {
    title: "🎬 Online Movie Ticket Booking System",
    image: project2,
    description:
      "Built a ticket booking backend with role-based access for users and admins.Included features like seat locking, schedule management, and secure booking flow.",
    technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
  },
  {
    title: "🚕 Ride Sharing Backend System",
    image: project3,
    description:
      "Created a real-time ride-matching system using Spring Boot and MongoDB.Enabled live driver-rider tracking with WebSocket for instant location updates.",
    technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
