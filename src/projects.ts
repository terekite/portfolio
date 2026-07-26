export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
  image?: string;   // path into public/, e.g. "/media/civic-app.png"
  accent?: string;  // accent color for project cards
}

export const projects: Project[] = [
  {
    id: "nice-nagma",
    title: "NiceNagma — Tabla Practice App",
    description: `An iOS app for tabla students to practice against a lehra — a melodic loop one rhythmic cycle  
  long. Write your own nagma in simple notation, pick tempo and key, and it renders a harmonium loop  
  on-device and plays it back continuously`,
    tech: ["Flutter", "Swift", "AVAudioEngine", "Python", "FastAPI", "Claude Code"],
    links: [{ label: "GitHub", url: "https://github.com/terekite/NiceNagma" }],
    image: "/nice-nagma-photo.webp"
  },
];