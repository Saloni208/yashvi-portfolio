import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Github, Filter } from "lucide-react";
import { projects } from "../data/mock";
import Layout from "../components/layout/Layout";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

  return (
    <Layout>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Projects | Gauransh Jaroli – Software Engineer</title>
        <meta
          name="description"
          content="Explore real-world software projects by Gauransh Jaroli, Software Engineer from Udaipur, Rajasthan. Includes production-ready web platforms and scalable applications."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-28 relative overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-emerald-400/10 blur-3xl rounded-full" />
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              A curated selection of real-world applications I’ve built —
              focused on scalability, production readiness, and practical
              problem solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <Filter size={18} className="text-slate-400" />
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-900"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.06 }}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                >
                  {/* Accent */}
                  <div className="h-1 bg-gradient-to-r from-emerald-400 to-blue-500" />

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs text-blue-400 bg-blue-400/10 rounded-full">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {project.longDescription}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 rounded-lg border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400"
                        >
                          <Github size={18} />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-slate-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
