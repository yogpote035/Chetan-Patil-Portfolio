import { motion } from "motion/react";
import { contact } from "../../data/socials.js";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/15 bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-[clamp(4rem,8vw,7.4rem)] font-light leading-[1.08] tracking-normal">
            Let's
            <br />
            Work
            <br />
            Together
          </h2>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <p className="max-w-[430px] text-base leading-relaxed text-white/90">
            let's create reliable digital experiences together combining
            technical expertise, quality assurance practices, and strong client
            engagement to deliver software solutions that exceed expectations.
          </p>
          <div className="mt-16 flex items-center gap-5">
            <motion.svg
              width="70"
              height="58"
              viewBox="0 0 70 58"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
            >
              <path
                d="M6 8C24 20 42 28 61 35M61 35L46 21M61 35L43 46"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 items-center rounded-full bg-white px-8 text-sm tracking-[0.12em] text-black transition hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              {contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
