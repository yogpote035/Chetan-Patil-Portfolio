import { motion } from "motion/react";

export default function SectionHeading({ children, className = "" }) {
  return (
    <motion.h2
      className={`section-title text-center font-medium ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
}
