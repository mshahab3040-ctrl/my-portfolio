const projects = [
  {
    title: "E-Commerce Platform",
    problem: "Client needed a scalable marketplace with real-time inventory.",
    solution: "React + Node.js + PostgreSQL",
    tags: ["FULL-STACK"],
    featured: true
  },
  {
    title: "Analytics Dashboard",
    problem: "Business teams couldn't extract insights from raw data.",
    solution: "Next.js + FastAPI + Chart.js",
    tags: ["FRONTEND"],
    featured: false
  },
  {
    title: "Automation System",
    problem: "Manual workflows wasted 10+ hours daily.",
    solution: "Zapier + Node.js + APIs",
    tags: ["AUTOMATION"],
    featured: false
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-[#1a2847] to-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            Production-grade systems designed to solve real business problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl border transition-all p-8 ${
                project.featured
                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/40'
                  : 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/40'
              } hover:border-blue-500/60`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <div className="mb-4">
                <p className="text-slate-400 text-sm uppercase font-semibold mb-1">Problem</p>
                <p className="text-slate-300">{project.problem}</p>
              </div>
              <div className="mb-4">
                <p className="text-slate-400 text-sm uppercase font-semibold mb-1">Solution</p>
                <p className="text-blue-400 font-mono text-sm">{project.solution}</p>
              </div>
              <div className="flex gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded">
                    {tag}
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

export default Projects;
