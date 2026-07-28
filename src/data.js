export const personalInfo = {
  name: "Md Wasiuzzaman",
  role: "Computer Science Engineer",
  bio: "Passionate about full-stack development, machine learning, and building robust web applications.",
  github: "https://github.com/Wasiuzzaman217",
  linkedin: "https://linkedin.com/in/wasiuzzaman",
  email: "bijoywashiuzzaman@gmail.com",
  facebook: "https://www.facebook.com/washiuzzaman.bijoy/"
};

export const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance & Liveness Detection",
    subtitle: "Biometric attendance system with real-time anti-spoofing verification.",
    description: "Built an automated, contact-free attendance management desktop app using OpenCV and ML classifiers (LBPH & KNN). Integrated active liveness detection via Eye Aspect Ratio (EAR) blink tracking to block photo and video spoofing attacks, achieving 92% accuracy in under 1.6 seconds.",
    github: "https://github.com/Wasiuzzaman217/Face-Recognition-Attendance-and-Liveliness-Detection",
    githubUrl: "https://github.com/Wasiuzzaman217/Face-Recognition-Attendance-and-Liveliness-Detection",
    githubLink: "https://github.com/Wasiuzzaman217/Face-Recognition-Attendance-and-Liveliness-Detection",
    link: "https://github.com/Wasiuzzaman217/Face-Recognition-Attendance-and-Liveliness-Detection",
    tags: ["Python", "OpenCV", "Tkinter", "MySQL", "Haar Cascade", "LBPH"]
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    subtitle: "Full-stack messaging platform with asynchronous AJAX polling and live user status tracking.",
    description: "Built an interactive, full-stack real-time web messaging app using raw PHP, MySQL, and Vanilla JS. Implemented session-based authentication with MD5 password hashing, dynamic user search, live online/offline indicators, and dynamic messaging feeds without page reloads.",
    github: "https://github.com/Wasiuzzaman217/PhpChatApp",
    githubUrl: "https://github.com/Wasiuzzaman217/PhpChatApp",
    githubLink: "https://github.com/Wasiuzzaman217/PhpChatApp",
    link: "https://github.com/Wasiuzzaman217/PhpChatApp",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "CSS3", "Apache"]
  },
  {
    id: 3,
    title: "Upcoming Project: AI Code Reviewer",
    subtitle: "Automated PR reviewer leveraging LLMs.",
    description: "Currently developing an automated tool that analyzes GitHub Pull Requests for security flaws, code style, and performance suggestions.",
    github: "https://github.com/Wasiuzzaman217",
    githubUrl: "https://github.com/Wasiuzzaman217",
    githubLink: "https://github.com/Wasiuzzaman217",
    link: "https://github.com/Wasiuzzaman217",
    tags: ["Node.js", "OpenAI API", "React", "Tailwind"]
  }
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript (ES6+)", "PHP", "C++", "SQL", "HTML5/CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "OpenCV", "Node.js", "Express"]
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "Git & GitHub", "Vercel", "Laragon", "Apache", "HeidiSQL"]
  }
];

// Default export in case components use default import
export default { personalInfo, projects, skills };