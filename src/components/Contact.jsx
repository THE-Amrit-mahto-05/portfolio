import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Side - Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-[12px] font-bold text-[#007BFF] uppercase tracking-[0.4em] mb-4">
          Connect
        </p>
        <h2 className="text-[#1E293B] font-bold text-4xl md:text-5xl font-['Outfit'] tracking-tight mb-8">
          Let's build <span className="text-[#007BFF]">together.</span>
        </h2>
        <p className="text-[#64748B] text-lg mb-12 max-w-md">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>

        <div className="space-y-6">
          {[
            { icon: <FiMail />, label: "Email", value: "amrit@example.com" },
            { icon: <FiPhone />, label: "Phone", value: "+91 1234567890" },
            { icon: <FiMapPin />, label: "Location", value: "India" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-[#E6F2FF] text-[#007BFF] flex items-center justify-center text-xl group-hover:bg-[#007BFF] group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{item.label}</p>
                <p className="text-[#1E293B] font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#F8FAFC] border border-[#E6F2FF] p-8 md:p-10 rounded-3xl shadow-sm"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-white border border-[#E6F2FF] rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/5 transition-all font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-white border border-[#E6F2FF] rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/5 transition-all font-medium"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-2">Message</label>
            <textarea
              rows="5"
              placeholder="How can I help you?"
              className="w-full px-6 py-4 bg-white border border-[#E6F2FF] rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/5 transition-all font-medium resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-[#007BFF] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0056b3] transition-all shadow-lg active:scale-95"
          >
            Send Message <FiSend />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
