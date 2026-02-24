import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: "Home", target: "Hero" },
    { label: "About", target: "About" },
    { label: "Projects", target: "Projects" },
    { label: "Certifications", target: "Certifications" },
    { label: "Hackathons", target: "Hackathons" },
    { label: "Skills", target: "Skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: scrolled ? 10 : 20,
          x: "-50%",
          opacity: 1,
          width: scrolled ? "45%" : "48%",
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-1/2 z-50 flex items-center justify-between px-8 py-4 h-auto md:h-16 rounded-full transition-all duration-500 ${scrolled ? "floating-dock shadow-xl" : "bg-white/50 backdrop-blur-md border border-white/20"
          }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  to={item.target}
                  smooth={true}
                  duration={200}
                  spy={true}
                  activeClass="active"
                  className="cursor-pointer"
                  onClick={() => setActiveSection(item.target)}
                  onSetActive={() => setActiveSection(item.target)}
                >
                  <span className={`text-[11px] uppercase font-black tracking-[0.15em] transition-colors duration-300 ${activeSection === item.target ? "text-[#F26522]" : "text-[#1A1A1A]/70 hover:text-[#F26522]"}`}>
                    {item.label}
                  </span>

                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-[#FDB913]"
                    initial={{ width: 0 }}
                    animate={activeSection === item.target ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="md:hidden text-2xl text-[#1A1A1A] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-[120%] left-0 right-0 floating-dock flex flex-col p-8 gap-6 rounded-3xl shadow-2xl"
            >
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.target}
                      smooth={true}
                      duration={500}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveSection(item.target);
                      }}
                      className={`text-lg font-black uppercase tracking-widest block transition-all ${activeSection === item.target ? "text-[#F26522] translate-x-3" : "text-[#1A1A1A]/60 hover:translate-x-2"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
