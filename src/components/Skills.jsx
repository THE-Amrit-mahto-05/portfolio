import { motion } from "framer-motion";
import {
  SiReact, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiFirebase, SiDocker,
  SiGit, SiFigma, SiJavascript, SiTypescript,
  SiPython, SiCplusplus, SiNextdotjs, SiRedux,
  SiHtml5, SiCss3, SiMysql, SiNumpy, SiPandas,
  SiOpencv, SiPrisma, SiPostman, SiGooglecloud,
  SiGithubactions, SiSupabase, SiAmazonwebservices,
  SiOpenai, SiGoogleanalytics, SiPytorch, SiChartdotjs
} from "react-icons/si";
import {
  FaCode, FaUsers, FaComments, FaRobot,
  FaDatabase, FaPaintBrush, FaBrain, FaLock,
  FaServer, FaChartBar, FaSearch
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Computer Languages",
    skills: [
      { icon: FaBrain, name: "Machine Learning" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss3, name: "CSS" },
      { icon: SiPython, name: "Python" },
      { icon: SiCplusplus, name: "C++" },
      { icon: FaDatabase, name: "SQL" },
    ]
  },
  {
    title: "Data Tools",
    skills: [
      { icon: SiNumpy, name: "NumPy", level: "Expert" },
    ]
  },
  {
    title: "Software Packages",
    skills: [
      { icon: SiPandas, name: "Pandas" },
      { icon: FaChartBar, name: "Matplotlib" },
      { icon: SiFigma, name: "Figma" },
      { icon: SiChartdotjs, name: "Chart.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiOpencv, name: "OpenCV" },
      { icon: SiReact, name: "React Native" },
      { icon: SiPrisma, name: "Prisma ORM" },
      { icon: SiReact, name: "React.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiMongodb, name: "MongoDB" },
    ]
  },
  {
    title: "Additional Courses",
    skills: [
      { icon: FaCode, name: "Data Structure", level: "Advanced" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { icon: FaUsers, name: "Team Building", level: "Expert" },
      { icon: FaComments, name: "Communication", level: "Expert" },
    ]
  },
  {
    title: "Others",
    skills: [
      { icon: SiGit, name: "Git & GitHub" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiPostman, name: "Postman" },
      { icon: FaPaintBrush, name: "UI/UX Design" },
      { icon: SiGoogleanalytics, name: "Google Analytics" },
      { icon: SiOpenai, name: "OpenAI API" },
      { icon: FaSearch, name: "API Testing" },
      { icon: SiGooglecloud, name: "Google Cloud Platform" },
      { icon: SiGithubactions, name: "GitHub Actions" },
      { icon: SiSupabase, name: "Supabase" },
      { icon: FaLock, name: "OAuth 2.0" },
      { icon: FaServer, name: "Distributed Systems" },
      { icon: SiAmazonwebservices, name: "Amazon Web Services" },
      { icon: FaRobot, name: "Generative AI" },
    ]
  }
];

const SkillCard = ({ icon: Icon, name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.01 }}
    viewport={{ once: true }}
    className="group bg-[#FFFBEB] border border-[#FDB913]/10 p-2 flex flex-col items-center gap-1.5 hover:border-[#F26522]/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="text-xl text-[#FDB913] group-hover:text-[#F26522] transition-colors duration-300 group-hover:scale-110">
      <Icon />
    </div>
    <span className="text-[8px] font-bold text-[#1E1E1E] uppercase tracking-tighter text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="Skills" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-[#1E1E1E] font-bold text-5xl md:text-7xl tracking-tighter">
            <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-[1.5px] w-4 bg-[#F26522]" />
                <h3 className="text-[#1E1E1E] font-bold text-[9px] uppercase tracking-[0.3em] whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FDB913]/20 to-transparent" />
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    {...skill}
                    index={skillIndex + catIndex * 15}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
