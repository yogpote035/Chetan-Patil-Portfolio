import { motion } from "motion/react";
import { experiences } from "../../data/experience.js";
import SectionHeading from "../ui/SectionHeading.jsx";

function ExperienceCard({ item }) {
  return (
    <article className="soft-card-gradient rounded-xl border border-white/18 p-5 shadow-none sm:p-7">
      <h3 className="text-base font-semibold tracking-[0.08em]">{item.role}</h3>
      <p className="mt-4 text-sm font-semibold text-[#00b530]">{item.duration}</p>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed tracking-[0.04em] text-white/90">
        {item.responsibilities.map((task) => (
          <li key={task}>• {task}</li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-semibold text-[#00b530]">Key Achievements</p>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed tracking-[0.04em] text-white/90">
        {item.achievements.map((achievement) => (
          <li key={achievement}>• {achievement}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading>Work Experience</SectionHeading>
        <div className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#3158D4] via-[#725B9B] to-[#F47A22] lg:left-[29%]" />
          <div className="space-y-10">
            {experiences.map((item, index) => (
              <div
                key={`${item.company}-${item.role}`}
                className="relative grid gap-6 pl-12 lg:grid-cols-[28%_1fr] lg:gap-16 lg:pl-0"
              >
                <motion.div
                  className="pt-4 text-xl font-medium tracking-[0.08em] text-white"
                  initial={{ opacity: 0, x: -26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  {item.company}
                </motion.div>
                <motion.span
                  className="absolute left-[7px] top-5 z-10 size-5 rounded-full bg-white lg:left-[calc(29%-8px)]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                >
                  <ExperienceCard item={item} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
