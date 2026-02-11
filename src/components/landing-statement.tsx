import { motion } from "framer-motion";

export default function LandingStatement() {
  return (
    <div className="space-y-3 outfit-regular text-center text-white">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="text-4xl md:text-3xl opacity-80"
      >
        This was about code
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        className="text-4xl md:text-5xl"
      >
        It isn’t just that anymore
      </motion.p>
    </div>
  );
}
