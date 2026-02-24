import { motion } from "framer-motion";
import { datasets } from "../data/datasets";
import { FaExternalLinkAlt } from "react-icons/fa";

const DatasetCard = ({ dataset, index }) => {
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
                    src={dataset.image || dataset.images?.[0]}
                    alt={dataset.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#F26522]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a href={dataset.link || dataset.live} target="_blank" rel="noreferrer" className="p-3 bg-white text-[#F26522] rounded-full hover:scale-110 transition-transform">
                        <FaExternalLinkAlt size={20} />
                    </a>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F26522] transition-colors uppercase tracking-tight">
                    {dataset.title}
                </h3>
                <p className="text-[#1E1E1E]/60 text-sm mb-6 line-clamp-2">
                    {dataset.description || dataset.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {dataset.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold text-[#FDB913] bg-[#FFFBEB] px-3 py-1 uppercase tracking-widest border border-[#FDB913]/40">
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
