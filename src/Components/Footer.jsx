import { footerLinks, socialLinks } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070707] px-6 py-12 text-slate-400">
      {/* <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">Shahab</p>
          <p className="max-w-xl text-slate-400">
            Premium frontend development with a focus on React, modern UI, and smooth digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index} href={social.href} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-300">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div> */}

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Shahab. Crafted with React, Tailwind, and a modern design approach.
      </div>
    </footer>
  );
}

export default Footer;
