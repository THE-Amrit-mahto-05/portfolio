
import ss from "../assets/projects/ss.png";
import note from "../assets/projects/note.png"
import e from "../assets/projects/e.png"
import interview from "../assets/projects/interview.png"

export const projects = [
  {
    title: "Smart City Management",
    desc: "Centralized digital solution for city administrators to monitor and analyze urban infrastructure.",
    images: [ss],
    live: "https://drive.google.com/file/d/1hd_e4luqY2GH-RYHfIANqdPeaQAlNzUi/view?usp=sharing",
    github: "https://github.com/THE-Amrit-mahto-05/Smart-City-Management-Platform.git",
    uml: "adding",
    tags: ["React Native", "Express", "Node.js", "MongoDB", "Charts", "PostgreSQL", "Tailwind CSS", "API"]
  },
  {
    title: "Notes Sharing Platform",
    desc: "Personalized dashboard for managing uploaded and downloaded notes",
    images: [note],
    live: "https://notes-shaaring-platform.vercel.app/",
    github: "https://github.com/THE-Amrit-mahto-05/NotesShaaring-Platform.git",
    uml: "adding",
    tags: ["React", "Node.js", "Tailwind", "Cloudinary", "MongoDB", "OAuth"]
  },
  {
    title: "E-Detection System",
    desc: "Tested models and implemented real-time detection with OpenCV for live camera-based identification",
    images: [e],
    live: "https://e-detection.vercel.app/",
    github: "https://app.roboflow.com/electronic-waste-ni0o1/e-waste-data/models",
    uml: "adding",
    tags: ["OpenCV", "MongoDB", "Roboflow"]
  },
  {
    title: "AI Interview Platform",
    desc: "AI-driven platform for mock interviews and personalized feedback",
    images: [interview],
    live: "https://jaago-guru-ke77.vercel.app/",
    github: "https://github.com/THE-Amrit-mahto-05/InterviewMate.git",
    uml: "adding",
    tags: ["React", "Gemini API", "Vapi AI", "Web Speech API", "Prisma ORM", "JWT", "Supabase"]
  },
];
