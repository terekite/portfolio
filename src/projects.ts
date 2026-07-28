import type { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
  animation?: ReactNode;
  accent?: string;  // accent color for project cards
}

export const projects: Project[] = [
  {
    id: "nif-laser-tool",
    title: "Laser Shot Analysis at the National Ignition Facility",
    description: `Rebuilt NIF's laser shot analysis tooling in Python, replacing a 75,000-line legacy IDL  
  codebase. Engineers across the facility now use it daily to pull metrics and visualizations from  
  shot data. Shipped facility-wide in 2026.`,
    tech: ["Python", "pytest", "IDL", "PyQt"]
  },
  {
    id: "nice-nagma",
    title: "NiceNagma — Tabla Practice App",
    description: `An iOS app for tabla students to practice against a lehra — a melodic loop one rhythmic cycle  
  long. Write your own nagma in simple notation, pick tempo and key, and it renders a harmonium loop  
  on-device and plays it back continuously`,
    tech: ["Flutter", "Swift", "AVAudioEngine", "Python", "FastAPI", "Claude Code"],
    links: [{ label: "GitHub", url: "https://github.com/terekite/NiceNagma" }]
  },
  {
    id: "civic-rails-app",
    title: "Civic Engagement App",
    description: `Find and follow your U.S. representatives. Click through an interactive map to see who  
    represents any state, county, or city — live from the Congress.gov API — then save legislators,  
    rate them, and get a personalized feed of their news and bill activity.`,
    tech: ["Ruby on Rails", "PostgreSQL", "RESTful APIs", "Cucumber", "RSpec", "Heroku"]
  },
  {
    id: "mri-segmentation",
    title: "ML Tumor Segmentation on MRI Images",
    description: `A fully convolutional network that segments tumors from diffusion-weighted MRI scans,  
    built during an NSF REU to support bacteria-based cancer therapy research. Hit 98% segmentation  
    accuracy and 92% precision, with a custom augmentation pipeline to work around a scarce dataset.`,
    tech: ["TensorFlow", "Python", "MATLAB", "SciPy", "scikit-image"],
    links: [{label: "GitHub", url: "https://github.com/irika-katiyar/REU-2023-Tumor-Detection"}]
  },
  {
    id: "c-exploits",
    title: "Memory-Safety Exploitation",
    description: `Wrote working exploits against a series of vulnerable C programs — stack-smashing and  
    buffer overflows that hijack control flow — while reasoning through stack layout, calling conventions,  
    and the defenses (stack canaries, ASLR) built to stop them.`,
    tech: ["C", "x86 Assembly", "GDB"]
  },
];