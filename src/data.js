export const personalInfo = {
  name: "Md Wasiuzzaman",
  role: "Computer Science Engineer",
  bio: "Passionate about full-stack development, machine learning, and building robust web applications.",
  resume: "/resume.pdf",
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
    title: "AI-Powered Code Reviewer",
    subtitle: "Full-stack automated code auditing dashboard leveraging Large Language Models.",
    description: "Developed a secure full-stack application that performs automated static code reviews using an Express REST API integrated with the OpenAI API. Implemented structural system prompting to enforce structured JSON output alongside an integrated fail-safe portfolio mode that handles client-side rendering seamlessly via elegant mock previews.",
    github: "https://github.com/Wasiuzzaman217/ai-code-reviewer",
    githubUrl: "https://github.com/Wasiuzzaman217/ai-code-reviewer",
    githubLink: "https://github.com/Wasiuzzaman217/ai-code-reviewer",
    link: "https://github.com/Wasiuzzaman217/ai-code-reviewer",
    tags: ["Node.js", "Express", "OpenAI API", "React", "Tailwind CSS"]
  }, // <-- This comma was missing here!
  {
    id: 4,
    title: "Timezone App (World Clock Dashboard)",
    subtitle: "Interactive dashboard for real-time global clock tracking and search.",
    description: "Built an interactive frontend world clock dashboard using vanilla web technologies. Features localized geolocation tracking, dynamic alphanumeric search filters, an integrated light/dark UI interface toggle, and a multi-region pinning layout for efficient global monitoring.",
    github: "https://github.com/Wasiuzzaman217/Timezone-App",
    githubUrl: "https://github.com/Wasiuzzaman217/Timezone-App",
    githubLink: "https://github.com/Wasiuzzaman217/Timezone-App",
    link: "https://github.com/Wasiuzzaman217/Timezone-App",
    tags: ["HTML5", "CSS3", "JavaScript", "Git"]
  }
];

export const skills = [
  "Python",
  "JavaScript",
  "PHP",
  "C++",
  "SQL",
  "HTML5/CSS3",
  "React",
  "Tailwind CSS",
  "OpenCV",
  "Node.js",
  "Express",
  "MySQL",
  "Git & GitHub",
  "Vercel",
  "Laragon",
  "Apache",
  "HeidiSQL"
];

export default { personalInfo, projects, skills };