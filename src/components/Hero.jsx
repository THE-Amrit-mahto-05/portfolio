import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Amri from "../assets/projects/Amri.png";
import MagneticWrapper from "./MagneticWrapper";
import {
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiKaggle,
  SiLinkedin
} from "react-icons/si";

const Hero = () => {
  const socialIcons = [
    { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/THE-Amrit-mahto-05" },
    { name: "LinkedIn", icon: SiLinkedin, color: "#0A66C2", url: "https://www.linkedin.com/in/amrit-kumar-mahto-736460351/" },
    { name: "LeetCode", icon: SiLeetcode, color: "#FFA116", url: "https://leetcode.com/u/AKM005/" },
    { name: "CodeChef", icon: SiCodechef, color: "#5B4638", url: "https://www.codechef.com/users/akm555" },
    { name: "Codeforces", icon: SiCodeforces, color: "#1F8ACB", url: "https://codeforces.com/profile/AKM05" },
    { name: "Kaggle", icon: SiKaggle, color: "#20BEFF", url: "https://www.kaggle.com/amritmahto05" },
  ];

  const titleText = "AMRIT KUMAR";
  const subtitleText = "MAHTO";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="Hero" className="min-h-screen flex flex-col items-center justify-center relative bg-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        <div className="flex flex-col">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="massive-title mb-8"
          >
            {titleText.split(" ").map((word, index) => (
              <span key={index} className="word mr-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={child} className="char">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            <span className="text-gradient">
              {subtitleText.split("").map((char, index) => (
                <motion.span key={index} variants={child} className="char">
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-[#1E1E1E]/60 max-w-lg mb-12 font-medium leading-relaxed"
          >
            Undergraduate student specializing in Artificial Intelligence and
            Machine Learning with a strong focus on Computer Vision. Skilled
            in full-stack web development, modern AI tools, advanced
            data structures and algorithms, database management,
            and data analysis, with foundational knowledge of
            DevOps concepts and CI/CD using GitHub Actions.
          </motion.p>

          <div className="flex gap-6">
            <Link
              to="Projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer"
            >
              <MagneticWrapper strength={0.2}>
                <button className="btn-primary flex items-center gap-2 group">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
              </MagneticWrapper>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative"
          >
            <div className="absolute top-5 left-5 w-full h-full border-2 border-[#FDB913]/20 -z-10" />

            <div className="relative overflow-hidden group p-4 bg-white shadow-2xl">
              <motion.img
                src={Amri}
                alt="Amrit Kumar Mahto"
                className="w-full max-w-[380px] transition-all duration-700"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                style={{ background: "var(--accent-gradient)" }}
                className="absolute inset-0 z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 glass-card py-4 px-10 rounded-full flex flex-wrap justify-center gap-8 border border-[#FDB913]/20 shadow-xl"
      >
        {socialIcons.map((item, index) => (
          <MagneticWrapper key={index} strength={0.4}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 transition-all duration-300 hover:scale-110"
              title={item.name}
            >
              <item.icon
                className="text-2xl md:text-3xl"
                style={{ color: item.color }}
              />
              <span className="text-[9px] font-black text-[#1E1E1E]/80 uppercase tracking-widest">
                {item.name}
              </span>
            </a>
          </MagneticWrapper>
        ))}
      </motion.div>

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFFBEB] rounded-full blur-[150px] -z-10 opacity-60" />
    </section>
  );
};

export default Hero;
