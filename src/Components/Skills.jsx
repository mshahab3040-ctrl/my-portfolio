import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";
import { SiReact } from "react-icons/si";
import { FaServer, FaCloud, FaBolt, FaMobileAlt, FaRobot } from "react-icons/fa";

const iconMap = {
  Frontend: SiReact,
  Backend: FaServer,
  "AI & ML": FaRobot,
  "Cloud & DevOps": FaCloud,
  Automation: FaBolt,
  Mobile: FaMobileAlt,
};

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-title">Skills</span>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Expertise across frontend, backend, and tooling.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A modern stack that powers fast, responsive and engaging user experiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {skillsData.map((item, index) => {
            const Icon = iconMap[item.title] || SiReact;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.06 }}
                className="card-glass rounded-[1.6rem] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl feature-card-icon flex items-center justify-center text-2xl text-white/90">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Proficiency</span>
                    <span className="font-semibold text-white">{item.level}%</span>
                  </div>
                  <div className="progress-base mt-2">
                    <div className="progress-bar" style={{ width: `${item.level}%` }} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
