import { motion } from "framer-motion";
import { hackathons } from "../data/hackathons";
import { FaExternalLinkAlt } from "react-icons/fa";

const HackathonCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-[#FFFBEB] border border-[#FDB913]/10 p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 hover:border-[#FDB913]/30 transition-all duration-500 shadow-warm relative overflow-hidden"
    >
      <div className="md:w-5/12">
        <h3 className="text-3xl font-black text-[#1E1E1E] tracking-tighter uppercase leading-tight break-words">
          {item.title || item.name}
        </h3>
      </div>

      <div className="md:w-7/12 flex flex-col justify-between">
        <p className="text-lg text-[#1E1E1E]/70 font-medium leading-relaxed mb-6">
          {item.description || item.desc}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 bg-[#FDB913]" />
            <span className="text-[10px] font-bold text-[#FDB913] uppercase tracking-widest">
              {item.award || item.role || "Distinguished Participant"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {item.certificate && item.certificate !== "#" && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold text-[#F26522] uppercase tracking-widest hover:underline transition-all duration-300 px-3 py-1.5 border border-[#F26522]/20 rounded-sm"
              >
                Certificate <FaExternalLinkAlt size={8} />
              </a>
            )}
            {item.live && item.live !== "#" && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold text-white bg-[#F26522] uppercase tracking-widest hover:bg-[#F26522]/90 transition-all duration-300 px-4 py-2 rounded-sm shadow-md"
              >
                Live Demo <FaExternalLinkAlt size={10} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hackathons = () => {
  return (
    <section id="Hackathons" className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 relative">
          <h2 className="text-[#1E1E1E] font-bold text-5xl md:text-7xl tracking-tighter">
            <span className="text-gradient">Hackathons</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((item, index) => (
            <HackathonCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
