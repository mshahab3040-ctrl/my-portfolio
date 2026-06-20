import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/portfolioData";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-title">Testimonials</span>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            What clients say about working together.
          </h2>
        </div>

        <motion.div
          key={currentTestimonial.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="card-glass mx-auto max-w-3xl rounded-[2rem] border border-white/10 p-10 shadow-xl"
        >
          <p className="text-xl leading-8 text-slate-300">“{currentTestimonial.review}”</p>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400">
            <div>
              <p className="text-lg font-semibold text-white">{currentTestimonial.name}</p>
              <p>{currentTestimonial.role}</p>
            </div>
            <p className="uppercase tracking-[0.24em] text-cyan-300">{currentTestimonial.company}</p>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex ? "bg-cyan-300" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
