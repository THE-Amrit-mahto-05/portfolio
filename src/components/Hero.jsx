import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Amri from "../assets/projects/Amri.png";
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

  return (
    <section id="Hero" className="min-h-screen flex flex-col items-center justify-center relative bg-white px-6 pt-12 pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="massive-title mb-8">
            AMRIT KUMAR<br />
            <span className="text-gradient">MAHTO</span>
          </h1>
          <p className="text-xl text-[#1E1E1E]/60 max-w-lg mb-12 font-medium leading-relaxed">
            Undergraduate student specializing in Artificial Intelligence and
            Machine Learning with a strong focus on Computer Vision. Skilled
            in full-stack web development, modern AI tools, advanced
            data structures and algorithms, database management,
            and data analysis, with foundational knowledge of
            DevOps concepts and CI/CD using GitHub Actions. Active open-source contributor.
          </p>
          <div className="flex gap-6">
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <button className="btn-primary">View Projects</button>
            </Link>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute top-5 left-5 w-full h-full border-2 border-[#FDB913]/20 -z-10" />

            <div className="relative overflow-hidden group p-4 bg-white shadow-warm">
              <motion.img
                src={Amri}
                alt="Amrit Kumar Mahto"
                className="w-full max-w-[450px] transition-all duration-700"
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

      {/* Social/Coding Icons Styled Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 bg-[#FFFBEB]/50 backdrop-blur-sm border border-[#FDB913]/20 py-2 px-6 md:py-3 md:px-8 rounded-2xl shadow-sm flex flex-wrap justify-center gap-6 md:gap-10"
      >
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 transition-all duration-300"
            title={item.name}
          >
            <item.icon
              className="text-2xl md:text-3xl"
              style={{ color: item.color }}
            />
            <span className="text-[8px] font-bold text-[#1E1E1E]/60 uppercase tracking-widest">
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFFBEB] rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default Hero;
