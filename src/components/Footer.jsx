import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white py-12 relative" style={{ background: "var(--accent-gradient)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/10 pb-10 mb-10">

          <div className="flex flex-col gap-2 items-center md:items-start">
            <h2 className="text-lg font-black uppercase tracking-tight">Let's Connect</h2>
            <a href="mailto:hello@amrit.me" className="text-sm font-bold opacity-80 hover:opacity-100 transition-all border-b border-white/30">
              yadhukumar045@gmail.com
              <br/>
              amrit.mahto@adypu.edu.in
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-orange-600 transition-all"
          >
            Top <FaArrowUp size={10} />
          </button>
        </div>

        <div className="flex justify-center flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[9px] font-bold uppercase tracking-[0.2em]">
          <div>© 2026 Amrit Kumar Mahto </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
