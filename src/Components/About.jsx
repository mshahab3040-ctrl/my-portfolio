import { motion } from "framer-motion";
import { FaBolt, FaServer, FaUsers } from "react-icons/fa";
import { SiReact } from "react-icons/si";

const features = [
  {
    title: "Full-Stack Systems",
    body: "End-to-end architecture from database schema to UI — React, Node, FastAPI, and PostgreSQL.",
    Icon: SiReact
  },
  {
    title: "AI-Powered Products",
    body: "RAG pipelines, LangChain integrations, and production-ready LLM workflows.",
    Icon: FaServer
  },
  {
    title: "Automation Architecture",
    body: "Multi-system automation using Zapier, n8n and serverless orchestration at scale.",
    Icon: FaBolt
  },
  {
    title: "Startup & Client Work",
    body: "Built for speed and reliability — pragmatic solutions without sacrificing quality.",
    Icon: FaUsers
  }
];

const tags = ["React / Next.js","Angular","Node.js","FastAPI","LangChain","PostgreSQL","React Native"];

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="section-title">Who I Am</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              I'm a full-stack engineer with 4+ years of professional experience delivering web applications, AI-integrated products, and automation systems.
            </h2>

            <div className="text-slate-300 space-y-4 text-lg leading-7">
              <p>
                I design and build scalable web applications, AI-powered products, and intelligent automation systems that solve real business problems — from prototype to production.
              </p>
              <p>
                I work closely with clients and product teams to ship reliable software on time. Clean architecture, readable code, and zero technical debt are non-negotiable.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((t) => (
                <div key={t} className="skill-pill">{t}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {features.map((f) => (
              <div key={f.title} className="card-glass rounded-[1.25rem] p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-400/10 flex items-center justify-center text-cyan-300">
                    <f.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-slate-300 leading-6">{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
