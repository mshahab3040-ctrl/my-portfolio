function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
      location: "Remote",
      type: "Full-Time",
      period: "Jan 2023 – Present",
      achievements: [
        "Built scalable React/TypeScript applications serving 10K+ daily users",
        "Improved Lighthouse performance score by 35% through optimization",
        "Led component library development adopted across 3 product teams"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "StartUp Hub",
      location: "On-Site",
      type: "Full-Time",
      period: "Jun 2021 – Dec 2022",
      achievements: [
        "Architected full-stack solutions for 5+ client projects",
        "Integrated payment systems and third-party APIs",
        "Mentored 2 junior developers on React best practices"
      ]
    },
    {
      role: "React Developer",
      company: "Digital Agency",
      location: "Remote",
      type: "Part-Time",
      period: "Mar 2020 – May 2021",
      achievements: [
        "Developed responsive web applications for diverse clients",
        "Achieved 98% code coverage with comprehensive testing",
        "Reduced bundle size by 40% through code optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a2847]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Work Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            Professional history and key engineering accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-950/60 border border-slate-700/50 rounded-[2rem] p-8 shadow-[0_24px_80px_-40px_rgba(20,46,102,0.5)] hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-blue-400 mt-1">{exp.company}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-slate-300 font-medium">{exp.period}</p>
                  <p className="text-sm text-slate-400 mt-1">{exp.location} • {exp.type}</p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-blue-400 flex-shrink-0 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
