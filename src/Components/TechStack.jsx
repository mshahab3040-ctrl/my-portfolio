function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript ES6+"]
    },
    {
      category: "Backend",
      icon: "⚙",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Database Design", "Authentication"]
    },
    {
      category: "Tools & DevOps",
      icon: "🛠",
      skills: ["Git & GitHub", "Docker", "Vite", "Webpack", "CI/CD", "Deployment"]
    },
    {
      category: "Databases",
      icon: "🗄",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma", "SQL", "Data Modeling"]
    },
    {
      category: "Performance & Testing",
      icon: "⚡",
      skills: ["Jest", "React Testing", "Performance Optimization", "SEO", "Web Vitals", "E2E Testing"]
    },
    {
      category: "Soft Skills",
      icon: "🎯",
      skills: ["Problem Solving", "Team Collaboration", "Code Review", "Documentation", "Mentoring", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#1a2847] to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Tech Stack</h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            A battle-tested toolkit for modern web apps and scalable systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/40 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-slate-300 text-sm hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
