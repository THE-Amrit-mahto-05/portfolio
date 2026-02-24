import { motion } from "framer-motion";
import { datasets } from "../data/datasets";
import { FaExternalLinkAlt } from "react-icons/fa";

const DatasetCard = ({ dataset, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group bg-white border border-[#FDB913]/20 overflow-hidden hover:border-[#FDB913]/60 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-2xl"
        >
            <div className="relative h-72 overflow-hidden bg-[#FFFBEB]">
                <img
                    src={dataset.image || dataset.images?.[0]}
                    alt={dataset.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#F26522]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a href={dataset.link || dataset.live} target="_blank" rel="noreferrer" className="p-4 bg-white text-[#F26522] rounded-full hover:scale-125 transition-transform shadow-lg">
                        <FaExternalLinkAlt size={24} />
                    </a>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-black text-[#1E1E1E] mb-3 group-hover:text-[#F26522] transition-colors uppercase tracking-tight">
                    {dataset.title}
                </h3>
                <p className="text-[#1E1E1E]/70 text-sm mb-8 line-clamp-2 leading-relaxed">
                    {dataset.description || dataset.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {dataset.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-black text-[#FDB913] bg-[#FFFBEB] px-4 py-1.5 uppercase tracking-widest border border-[#FDB913]/30 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Datasets = () => {
    return (
        <section id="Datasets" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 relative">
                    <h2 className="text-[#1E1E1E] font-bold text-5xl md:text-7xl tracking-tighter">
                        <span className="text-gradient">Playing with Datasets</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {datasets.map((dataset, index) => (
                        <DatasetCard key={index} dataset={dataset} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Datasets;
