import { motion } from "framer-motion";

const About = () => {


  return (
    <section id="About" className="bg-[#FFFBEB] py-32">
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-[#1E1E1E] leading-[1.8] tracking-tight font-cursive max-w-4xl mx-auto italic">
            I have contributed to open-source projects including mongosh and React, and participated in Hacktoberfest 2025, where I submitted 10 pull requests, with 9 successfully merged. I’ve worked on several AI/ML and computer vision projects, including large-scale image annotation of 8,700+ images using Roboflow, and enjoy experimenting with modern AI tools to accelerate development. During my summer vacation, I built a notes sharing platform end-to-end and gained exposure to cloud technologies (AWS) and CI/CD workflows using GitHub Actions. I’m also a Google Developer Group (GDG) member since 2024, actively engaging with the developer community through continuous learning and collaboration.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
