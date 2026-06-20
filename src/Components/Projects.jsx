import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-title">Projects</span>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Selected projects with modern interfaces.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            High-end builds designed to impress stakeholders and drive results.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? "border-cyan-300 bg-cyan-300/10 text-cyan-200"
                  : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
              className="card-glass rounded-[2rem] border border-white/10 p-6 shadow-xl"
            >
              <div className={`rounded-[1.6rem] border border-white/10 bg-gradient-to-br ${project.gradient} p-6`}>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-pill">{tech}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
