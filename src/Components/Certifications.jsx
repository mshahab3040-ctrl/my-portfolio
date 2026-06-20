function Certifications() {
  const certs = [
    {
      category: "FRONTEND DEVELOPMENT",
      title: "React — The Complete Guide",
      issuer: "Udemy",
      year: "2023",
      icon: "⚛"
    },
    {
      category: "FULL STACK DEVELOPMENT",
      title: "Web Development Bootcamp",
      issuer: "Coursera",
      year: "2022",
      icon: "🚀"
    },
    {
      category: "CLOUD & INFRASTRUCTURE",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁"
    },
    {
      category: "JAVASCRIPT & TYPESCRIPT",
      title: "TypeScript Advanced Patterns",
      issuer: "egghead.io",
      year: "2023",
      icon: "📘"
    },
    {
      category: "RESPONSIVE DESIGN",
      title: "Advanced CSS & Tailwind",
      issuer: "Scrimba",
      year: "2022",
      icon: "🎨"
    },
    {
      category: "AUTOMATION & SCRIPTING",
      title: "API Integration Mastery",
      issuer: "Udemy",
      year: "2021",
      icon: "⚙"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Certifications & Learning</h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            Continuous learning and professional development across the full-stack spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/40 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                {cert.category}
              </p>
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.issuer}</p>
              <p className="text-slate-500 text-xs mt-3">Completed {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
