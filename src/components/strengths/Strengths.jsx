import { motion } from "motion/react";
import { strengths } from "../../data/strengths.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Strengths() {
  return (
    <section id="strengths" className="border-t border-white/15 bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading>Strengths</SectionHeading>
        <div className="mt-14 flex flex-wrap justify-center gap-x-24 gap-y-20">
          {strengths.map((strength, index) => (
            <motion.article
              key={strength.title}
              className="gradient-border flex h-[190px] w-[160px] flex-col items-center justify-center rounded-lg px-4 text-center"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <img
                src={strength.image}
                alt=""
                className="h-20 w-24 object-contain"
                loading="lazy"
              />
              <h3 className="mt-5 text-base font-medium tracking-[0.05em]">
                {strength.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
