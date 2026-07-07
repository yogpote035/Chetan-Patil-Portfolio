import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, projectTabs } from "../../data/projects.js";
import SectionHeading from "../ui/SectionHeading.jsx";

function ProjectCard({ project }) {
  return (
    <motion.article
      className={`${project.background} grid overflow-hidden rounded-2xl border border-white/14 p-6 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:p-12`}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      layout
    >
      <motion.div className="flex items-center justify-center" whileHover={{ y: -6 }}>
        <img
          src={project.image}
          alt={`${project.title} project mockup`}
          className="max-h-82.5 w-full object-contain"
          loading="lazy"
        />
      </motion.div>
      <div className="mt-8 flex flex-col justify-center lg:mt-0">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <dl className="mt-5 space-y-4 text-sm text-white/80">
          <div className="flex gap-5">
            <dt className="text-white">Duration</dt>
            <dd>{project.year}</dd>
          </div>
          {project.technologies.length > 0 && (
            <div>
              <dt className="text-white">Technology Used</dt>
              <dd className="mt-4 flex flex-wrap gap-x-10 gap-y-2">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </dd>
            </div>
          )}
          {project.features?.length > 0 && (
            <div>
              <dt className="text-white">Key Features</dt>
              <dd>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
        </dl>
        <h4 className="mt-7 text-lg font-medium">Project Description</h4>
        <p className="mt-5 text-sm font-medium text-white">{project.descriptionTitle}</p>
        <p className="mt-5 text-sm leading-relaxed tracking-[0.03em] text-white/85">
          {project.description}
        </p>
        <a
          href="#projects"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-white px-6 text-sm text-black transition hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
        >
          View Project
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeTab === "All"
        ? projects
        : projects.filter((project) => project.category === activeTab),
    [activeTab],
  );

  return (
    <section id="projects" className="border-t border-white/15 bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-260">
        <SectionHeading>Projects</SectionHeading>
        <div
          className="mt-12 flex justify-center gap-8 text-sm text-white/85 sm:gap-12"
          role="tablist"
          aria-label="Project categories"
        >
          {projectTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`border-b px-1 pb-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                activeTab === tab
                  ? "border-orange-400 text-white"
                  : "border-transparent hover:border-white/40"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-14 space-y-14">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
