import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-[#FDB913]/40 overflow-hidden hover:border-[#FDB913]/80 transition-all duration-500 hover:-translate-y-2 shadow-warm"
    >
      <div className="relative h-64 overflow-hidden bg-[#FFFBEB]">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain p-4 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#F26522]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <a href={cert.link} target="_blank" rel="noreferrer" className="p-4 bg-white text-[#F26522] rounded-full hover:scale-110 transition-transform">
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F26522] transition-colors uppercase tracking-tight">
          {cert.title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-[#FDB913] text-xs font-bold uppercase tracking-widest">
            {cert.org}
          </p>
          <span className="text-[#1E1E1E]/40 text-xs font-bold">
            {cert.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="Certifications" className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 relative">

          <h2 className="text-[#1E1E1E] font-bold text-5xl md:text-7xl tracking-tighter">
            <span className="text-gradient">Certificates</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
