import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = (Component, idName) => {
    return function HOC() {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["0 1", "1.2 1"]
        });

        const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
        const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

        return (
            <motion.section
                id={idName}
                ref={ref}
                style={{
                    scale,
                    opacity,
                }}
                className="max-w-7xl mx-auto relative z-0 py-24 px-8 mb-20 airy-pod rounded-[3rem] border border-[#0EA5E9]/5 hover:border-[#0EA5E9]/20 transition-all duration-1000 group"
            >
                {/* Section Header */}
                <div className="relative mb-20">
                    <div className="absolute -top-10 left-0 w-24 h-[2px] bg-gradient-to-r from-[#0EA5E9] to-transparent" />
                    <Component />
                </div>
            </motion.section >
        );
    };
};

export default SectionWrapper;
