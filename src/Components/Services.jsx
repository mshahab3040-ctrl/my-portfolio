import { motion } from "framer-motion";
import { services } from "../data/portfolioData";

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-title">Services</span>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Premium services crafted for growth.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Offering high-end development, React applications, full-stack solutions, and refined UI/UX design.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                className="card-glass rounded-[2rem] border border-white/10 p-8 text-center shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{service.description}</p>
                <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Learn More
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
