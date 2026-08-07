import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

/* ── SVG Icons ─────────────────────────────── */
const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839
      9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369
      -1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069
      -.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092
      -.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39
      -1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75
      1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296
      2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
      1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0
      1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22
      12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
      0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637
      -1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062
      2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555
      V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792
      24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222
      0h.003z" />
  </svg>
);
const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDownload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

/* ── Contact data ───────────────────────────── */
const contactItems = [
  {
    id: "email",
    label: "Email",
    value: "zannatulfarzana363@gmail.com",
    displayValue: "zannatulfarzana363\n@gmail.com",
    href: "mailto:zannatulfarzana363@gmail.com",
    icon: <IconEmail />,
    newTab: false,
    color: "#915EFF",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/maRia-1506A",
    displayValue: "github.com/\nmaRia-1506A",
    href: "https://github.com/maRia-1506A/",
    icon: <IconGithub />,
    newTab: true,
    color: "#a78bfa",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "zannatulfarzanamaria",
    displayValue: "zannatulfarzana\nmaria",
    href: "https://www.linkedin.com/in/zannatulfarzanamaria/",
    icon: <IconLinkedIn />,
    newTab: true,
    color: "#818cf8",
  },
  {
    id: "location",
    label: "Location",
    value: "Dhaka, Bangladesh",
    displayValue: "Dhaka,\nBangladesh",
    href: null,
    icon: <IconLocation />,
    newTab: false,
    color: "#c084fc",
  },
];

const openToItems = ["Internship", "Research Opportunities", "Freelance"];

/* ── Card component ─────────────────────────── */
const ContactCard = ({ item, index }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.55)}
      className={[
        "group relative flex flex-col items-center justify-center",
        "gap-3 p-5 rounded-2xl text-center overflow-hidden",
        "border border-white/[0.06]",
        "bg-gradient-to-b from-[#1d1836cc] to-[#0f0a1ecc]",
        "backdrop-blur-sm transition-all duration-300",
        item.href
          ? "cursor-pointer hover:-translate-y-1.5 hover:border-[#915EFF44] hover:shadow-2xl hover:shadow-[#915eff15]"
          : "",
      ].join(" ")}
    >
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(145,94,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-full flex items-center justify-center
        border border-white/[0.08] transition-all duration-300
        group-hover:scale-110 group-hover:shadow-lg"
        style={{
          background: `${item.color}18`,
          color: item.color,
          boxShadow: "0 0 0 0 transparent",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 0 20px ${item.color}30`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
        }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-1">
          {item.label}
        </p>
        <p
          className="text-[12px] font-semibold leading-snug text-white/70
          group-hover:text-white transition-colors duration-300 whitespace-pre-line"
        >
          {item.displayValue}
        </p>
      </div>

      {/* External link badge */}
      {item.newTab && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-white/30"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>
      )}
    </motion.div>
  );

  if (!item.href) return cardContent;
  return (
    <a
      href={item.href}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noopener noreferrer" : undefined}
      aria-label={`${item.label}: ${item.value}`}
      className="block"
    >
      {cardContent}
    </a>
  );
};

/* ── Main component ─────────────────────────── */
const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* ── Left panel ── */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col gap-7"
      >
        {/* Heading */}
        <div>
          <motion.p variants={fadeIn("", "", 0.05, 0.5)} className={styles.sectionSubText}>
            Get in touch
          </motion.p>
          <motion.h3 variants={textVariant()} className={styles.sectionHeadText}>
            Let's Connect.
          </motion.h3>
          <motion.p
            variants={fadeIn("", "", 0.2, 0.7)}
            className="mt-3 text-secondary text-[15px] max-w-md leading-[26px]"
          >
            I'm currently looking for internship and entry-level opportunities
            in Software Engineering, Data Science, and AI. Feel free to reach
            out if you'd like to collaborate or discuss opportunities.
          </motion.p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-2 gap-3">
          {contactItems.map((item, index) => (
            <ContactCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Resume button */}
        <motion.a
          variants={fadeIn("up", "spring", 0.55, 0.6)}
          href="/resume.pdf"
          download
          aria-label="Download Resume PDF"
          className="group flex items-center justify-center gap-3
            w-full py-3.5 rounded-2xl font-bold text-[15px] text-white
            border border-[#915EFF55]
            bg-gradient-to-r from-[#7c3aed] via-[#915EFF] to-[#a78bfa]
            bg-size-200 bg-pos-0 hover:bg-pos-100
            shadow-lg shadow-[#915eff25]
            hover:shadow-xl hover:shadow-[#915eff35]
            hover:-translate-y-0.5 active:translate-y-0
            transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-5 h-5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          Download Resume
          <IconDownload />
        </motion.a>

        {/* Open To */}
        <motion.div
          variants={fadeIn("up", "spring", 0.65, 0.6)}
          className="flex flex-wrap items-center gap-3"
        >
          {/* Status dot */}
          <span className="flex items-center gap-2 mr-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-[12px] font-semibold tracking-wide">Open to:</span>
          </span>

          {openToItems.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-[12px] font-medium
                text-[#c4b5fd] border border-[#915EFF33] bg-[#915EFF10]
                hover:bg-[#915EFF20] hover:border-[#915EFF55] transition-colors duration-200 cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right panel — Earth canvas ── */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
