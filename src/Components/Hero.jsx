import { motion } from "framer-motion";
import { heroSocials } from "../data/portfolioData";
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-44 pb-20">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_22%)] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-green-700/10 px-5 py-3 text-sm text-green-300 status-badge">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-3 inline-block" />
              {/* Available for freelance & startup collaborations */}
            </div>
          </div>

          <div className="mx-auto mb-12 w-fit hero-avatar-wrapper">
            <img src={profileImage} alt="Profile" className="hero-avatar" />
          </div>

          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="text-white">Muhammad</span>{" "}
            <span className="gradient-text">Shahab</span>
          </h1>

          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Freelance developer creating premium web experiences with React, Tailwind CSS, and polished UI interactions.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;
