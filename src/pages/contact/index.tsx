import React from "react";
import { motion } from "framer-motion";

interface Contact {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#0a0e27] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 tracking-widest mb-2">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1a1f3a] rounded-3xl p-8 md:p-12 space-y-6 border border-[#2a2f4a]"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-300">Your Name</label>
            <input
              type="text"
              placeholder="What's your name?"
              className="bg-[#0f1430] border border-[#2a2f4a] rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-300">Your Email</label>
            <input
              type="email"
              placeholder="What's your email address?"
              className="bg-[#0f1430] border border-[#2a2f4a] rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-300">Your Message</label>
            <textarea
              rows={5}
              placeholder="What would you like to say?"
              className="bg-[#0f1430] border border-[#2a2f4a] rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
