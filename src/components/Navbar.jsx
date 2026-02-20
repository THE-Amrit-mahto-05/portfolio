import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

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
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{
        y: scrolled ? 10 : 20,
        x: "-50%",
        opacity: 1,
        width: scrolled ? "40%" : "42%",
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-1/2 z-50 floating-dock flex items-center justify-between px-8 py-4 h-auto md:h-16 rounded-[4px]"
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
                <span className={`text-[11px] uppercase font-bold tracking-[0.1em] transition-colors duration-300 ${activeSection === item.target ? "text-[#F26522]" : "text-[#1A1A1A]/60 hover:text-[#F26522]"}`}>
                  {item.label}
                </span>

                <motion.div
                  className="absolute -bottom-1 left-1/2 h-[2px] bg-[#FDB913]"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "100%" }}
                  animate={activeSection === item.target ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.3 }}
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-[110%] left-0 right-0 floating-dock flex flex-col p-6 gap-4"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.target}
                    smooth={true}
                    duration={200}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.target);
                    }}
                    className={`text-sm font-bold uppercase tracking-widest ${activeSection === item.target ? "text-[#F26522]" : "text-[#1A1A1A]/60"}`}
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
  );
};

export default Navbar;
