import { motion } from "motion/react";
import aboutImage from "../../../Images/About Me Image.png";
import GradientButton from "../ui/GradientButton.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <img
              src={aboutImage}
              alt="Chetan Patil working at a laptop"
              className="mx-auto w-full max-w-[560px] object-contain"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="mx-auto max-w-[520px] lg:mx-0"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold tracking-[0.05em]">
              Hi I'm Chetan Patil,
            </h3>
            <p className="mt-5 text-[15px] font-medium uppercase leading-[1.7] tracking-[0.06em] text-white/90">
              A Experienced Software Tester With Strong Expertise In Manual
              Testing, Selenium Automation, Functional Testing, Regression
              Testing, And User Acceptance Testing (UAT). Skilled In Requirement
              Gathering, Client Communication, Software Demonstrations, And
              Project Coordination. Adept At Identifying Defects, Ensuring
              Software Quality, And Improving Testing Processes. Experienced In
              Collaborating With Developers, Stakeholders, And Business Teams To
              Deliver Reliable Software Solutions. Passionate About
              Problem-Solving, Continuous Learning, And Bridging The Gap Between
              Client Expectations And Technical Implementation.
            </p>
            <GradientButton href="#contact" className="mt-6 min-w-32">
              Hire
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
