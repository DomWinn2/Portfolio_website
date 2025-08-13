import { useState } from "react";
import { cn } from "../lib/utils";

// Import icons from react-icons
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500 text-4xl" />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" />, category: "frontend" },
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" />, category: "frontend" },
  { name: "React Native", icon: <FaReact className="text-blue-400 text-4xl" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />, category: "frontend" },

  // Backend
  { name: "Express", icon: <SiExpress className="text-gray-500 text-4xl" />, category: "backend" },
  { name: "MongoDb", icon: <SiMongodb className="text-green-500 text-4xl" />, category: "backend" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" />, category: "backend" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700 text-4xl" />, category: "backend" },

  // Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" />, category: "tools" },
  { name: "GitHub", icon: <FaGithub className="text-orange-500 text-4xl" />, category: "tools" },
  { name: "VS Code", icon: <VscVscode className="text-blue-600 text-4xl" />, category: "tools" },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-4xl" />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools", "certifications"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-primary">Certifications</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};