import { motion } from "motion/react";

export default function ProjectDetail({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-white/15 bg-slate-950 p-6 text-white shadow-2xl sm:p-8"
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details for ${project.title}`}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-sm text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
          onClick={onClose}
        >
          Close
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
              {project.category}
            </p>
            <h2 className="text-4xl font-semibold sm:text-5xl">{project.title}</h2>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span>Year: {project.year}</span>
              {project.technologies.length > 0 && (
                <span>Tech: {project.technologies.join(", ")}</span>
              )}
            </div>
            <p className="mt-8 text-sm font-medium text-white/90">{project.descriptionTitle}</p>
            <p className="mt-4 leading-relaxed text-white/85">{project.description}</p>

            {project.features?.length > 0 && (
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium text-white">Key Features</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-4">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full rounded-[1.3rem] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
