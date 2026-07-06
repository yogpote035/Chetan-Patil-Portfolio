import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../../../Images/Main Home Page Image.png";
import carvedLine from "../../../Images/Home Page Carved Line.png";
import GradientButton from "../ui/GradientButton.jsx";

const roles = ["Software Tester", "QA Engineer", "Project Manager"];

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11v6M8 8v.2M12 17v-6M12 13.5c.5-1.5 3-2.2 4 0 .3.6.3 1.4.3 2.1V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen overflow-hidden bg-black px-5 pt-24 sm:px-8 lg:min-h-[680px] lg:px-8 lg:pt-0"
    >
      <motion.img
        src={carvedLine}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[5%] -z-10 hidden h-[82%] w-[min(1150px,95vw)] -translate-x-1/2 object-fill opacity-95 lg:block"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[1080px] flex-col items-center border-b border-white/20 lg:min-h-[668px]">
        <motion.p
          className="mt-3 text-center text-[clamp(1.65rem,3vw,2.15rem)] font-light tracking-[0.45em] text-white lg:mt-[48px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          PORTFOLIO
        </motion.p>

        <motion.h1
          className="hero-name pointer-events-none mt-14 w-full text-center font-light uppercase text-white sm:mt-20 lg:absolute lg:left-1/2 lg:top-[155px] lg:z-20 lg:mt-0 lg:flex lg:flex-nowrap lg:w-screen lg:max-w-[1160px] lg:-translate-x-1/2 lg:items-center lg:justify-between lg:px-2 lg:text-[clamp(4.6rem,7.4vw,6.5rem)] lg:tracking-[0.38em] lg:whitespace-nowrap"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span>Chetan</span>
          <span className="lg:hidden"> </span>
          <span>Patil</span>
        </motion.h1>

        <motion.img
          src={heroImage}
          alt="Chetan Patil"
          className="z-10 -mt-16 w-[min(78vw,620px)] object-contain sm:-mt-24 md:-mt-32 lg:absolute lg:bottom-[4px] lg:left-[50.5%] lg:w-[min(46vw,560px)] lg:-translate-x-1/2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        />

        <motion.div
          className="z-20 mt-5 flex max-w-[430px] flex-col items-center gap-5 text-center lg:absolute lg:right-[60px] lg:top-[350px] lg:max-w-[330px] lg:items-start lg:gap-7 lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
        >
          <p className="text-balance text-[15px] leading-[1.38] tracking-[0.08em] text-white">
            "Delivering High-Quality Software Through Effective Testing,
            Automation, And Project Management."
          </p>
          <div className="flex flex-col gap-3 min-[420px]:flex-row lg:gap-3">
            <GradientButton href="#contact" variant="outline" className="lg:min-w-[148px] lg:px-7">
              Contact Me
            </GradientButton>
            <GradientButton href="./Chetan-Patil-Resume.txt" download className="lg:min-w-[154px] lg:px-6">
              Download Resume
            </GradientButton>
          </div>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="z-20 mt-7 grid size-11 place-items-center rounded-full bg-white text-black transition hover:scale-105 lg:absolute lg:bottom-[70px] lg:left-[34px]"
        >
          <ArrowUpRight size={21} />
        </a>

        <div className="z-20 mt-auto grid w-full grid-cols-1 gap-3 pb-6 text-center text-xs text-white/90 sm:grid-cols-3 lg:px-[130px] lg:pb-[24px]">
          {roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>

        <div className="absolute bottom-[28px] right-[28px] z-20 hidden flex-col gap-4 lg:flex">
          <a href="#" aria-label="Instagram" className="transition hover:text-orange-300">
            <InstagramMark />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-orange-300">
            <LinkedinMark />
          </a>
        </div>
      </div>
    </section>
  );
}
