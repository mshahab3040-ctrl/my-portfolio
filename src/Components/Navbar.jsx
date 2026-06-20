import { useEffect, useState } from "react";

function Navbar() {
  const menuItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"]
  ];

  const [showCenter, setShowCenter] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // show when near top (home) or when scrolling up
      if (y < 80 || y < lastY - 5) {
        setShowCenter(true);
      } else if (y > lastY + 5) {
        setShowCenter(false);
      }
      lastY = y;
    };

    const contactEl = document.getElementById("contact");
    let io;
    if (contactEl) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setContactVisible(entry.isIntersecting));
      }, { threshold: 0.2 });
      io.observe(contactEl);
    }

    // show nav at load if at top or hash = #home
    if (window.location.hash === "#home" || window.scrollY < 80) setShowCenter(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (io && contactEl) io.unobserve(contactEl);
    };
  }, [contactVisible]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-semibold tracking-[0.05em] text-white transition hover:text-cyan-300">
              <span className="text-cyan-300"></span>
            </a>
          </div>

          <div className={`flex items-center justify-center space-x-3 transition-all duration-300 ${showCenter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
            {menuItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} className="nav-button">
                {label}
              </a>
            ))}
          </div>

          <div className={`flex items-center justify-end transition-all duration-300 ${showCenter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
            <a href="#contact" className="hire-button">Hire Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
