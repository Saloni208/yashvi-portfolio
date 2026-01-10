import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../../data/mock";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full" />
        <div className="absolute -top-24 right-0 w-72 h-72 bg-pink-400/10 blur-3xl rounded-full" />
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ================= BRAND ================= */}
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center shadow-md">
                <span className="text-slate-900 font-bold text-sm">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div className="hidden sm:block leading-tight">
                <p className="text-white font-semibold text-[15px]">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-slate-400">
                  Software Engineer
                </p>
              </div>
            </motion.div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ================= CTA ================= */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-lg font-medium text-slate-900
                bg-gradient-to-r from-indigo-400 to-pink-400
                shadow hover:opacity-90 transition-all"
              >
                Contact
              </motion.button>
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-indigo-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 space-y-3 rounded-2xl bg-[#0e0e11]/95 backdrop-blur-xl border border-white/10 p-4">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-2 text-sm font-medium ${
                          isActive
                            ? "text-indigo-400"
                            : "text-slate-300"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <Link to="/contact">
                  <button className="w-full mt-3 px-4 py-2.5 rounded-lg font-medium text-slate-900 bg-gradient-to-r from-indigo-400 to-pink-400">
                    Contact
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
