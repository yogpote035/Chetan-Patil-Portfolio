import { motion } from "motion/react";
import { skillGroups } from "../../data/skills.js";
import SectionHeading from "../ui/SectionHeading.jsx";

function SkillBar({ skill }) {
  return (
    <div>
      <div className="mb-3 text-[13px] tracking-[0.04em] text-white/80">{skill.name}</div>
      <div className="h-1 rounded-full bg-white/75">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-[#3158D4] via-[#725B9B] to-[#F47A22]"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-330">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <h3 className="mb-8 text-center text-base font-semibold tracking-[0.08em] lg:text-left">
                {group.title}
              </h3>
              <div className="space-y-8">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
