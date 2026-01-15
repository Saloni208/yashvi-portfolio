import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { personalInfo, navLinks } from "../../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    personalInfo.github && {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
    },
    personalInfo.linkedin && {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    personalInfo.email && {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ].filter(Boolean);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-t border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ================= BRAND ================= */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {personalInfo.name}
                  </p>
                  <p className="text-sm text-slate-400">
                    Software Engineer
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-slate-300 text-base leading-relaxed max-w-md">
              {personalInfo.summary}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-pink-400 hover:text-slate-900 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-indigo-400 text-base transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {personalInfo.email && (
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-300 hover:text-indigo-400 text-base transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
              )}
              <li>
                <span className="text-slate-400 text-base">
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-base">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-slate-400 text-base flex items-center gap-1">
            Crafted with <Heart size={16} className="text-red-400" /> by{" "}
            <span className="font-medium text-slate-300">
              Gauransh Jaroli
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
