import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/* ─── Learning data ──────────────────────────────────────────────────── */
const learningItems = [
  {
    id: "python",
    name: "Python",
    emoji: "🐍",
    accent: "#4B8BBE",
    description:
      "Deepening core programming skills — OOP, file handling, scripting, and CLI projects.",
    status: "In Progress",
    statusColor: "#915EFF",
  },
  {
    id: "ml",
    name: "Machine Learning",
    emoji: "🤖",
    accent: "#FF6B6B",
    description:
      "Learning supervised & unsupervised algorithms, model training, evaluation metrics.",
    status: "In Progress",
    statusColor: "#915EFF",
  },
  {
    id: "pandas",
    name: "Pandas",
    emoji: "🐼",
    accent: "#a78bfa",
    description:
      "Data manipulation and analysis — DataFrames, data cleaning, grouping, and merging.",
    status: "Exploring",
    statusColor: "#c084fc",
  },
  {
    id: "numpy",
    name: "NumPy",
    emoji: "🔢",
    accent: "#22d3ee",
    description:
      "Numerical computing, array operations, and mathematical foundations for ML.",
    status: "Exploring",
    statusColor: "#c084fc",
  },
];

/* ─── Card ───────────────────────────────────────────────────────────── */
const LearningCard = ({ item, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="group relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between gap-4
      border border-white/[0.08] bg-gradient-to-b from-[#1d1836] to-[#100b24]
      hover:-translate-y-1.5 hover:border-white/[0.2]
      hover:shadow-2xl transition-all duration-300 h-full"
    whileHover={{
      boxShadow: `0 15px 30px -10px ${item.accent}33`,
    }}
  >
    {/* Coloured left border */}
    <div
      className="absolute left-0 top-4 bottom-4 w-[3.5px] rounded-full opacity-70
        group-hover:opacity-100 group-hover:top-2 group-hover:bottom-2
        transition-all duration-300"
      style={{ background: item.accent }}
    />

    {/* Top row — emoji + status */}
    <div className="flex items-center justify-between">
      {/* Emoji bubble */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
          border border-white/[0.08] transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${item.accent}18` }}
      >
        {item.emoji}
      </div>

      {/* Status badge */}
      <span
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
        style={{
          background: `${item.statusColor}18`,
          color: item.statusColor,
          border: `1px solid ${item.statusColor}33`,
        }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: item.statusColor }}
          />
          <span
            className="relative inline-flex rounded-full h-1.5 w-1.5"
            style={{ background: item.statusColor }}
          />
        </span>
        {item.status}
      </span>
    </div>

    {/* Content */}
    <div>
      <h3 className="text-white font-bold text-[18px] mb-1.5">
        {item.name}
      </h3>
      <p className="text-secondary text-[13px] leading-[22px]">
        {item.description}
      </p>
    </div>

    {/* Progress bar */}
    <div className="mt-2 h-[3px] w-full rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}aa)` }}
        initial={{ width: "0%" }}
        whileInView={{ width: item.status === "In Progress" ? "70%" : "40%" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

/* ─── Section ────────────────────────────────────────────────────────── */
const CurrentlyLearning = () => {
  return (
    <div className="mt-8 bg-tertiary rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl relative overflow-hidden">
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Growth &amp; Development</p>
        <h2 className={styles.sectionHeadText}>Currently Learning.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-3 text-secondary text-[15px] sm:text-[16px] max-w-3xl leading-[26px]"
      >
        I'm on a mission to transition from Software Engineering into Data Science
        and AI. Here's what I'm actively studying right now.
      </motion.p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {learningItems.map((item, index) => (
          <LearningCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Goal Strip */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.6)}
        className="mt-8 flex items-center justify-center gap-3
          p-4 sm:p-5 rounded-2xl border border-[#915EFF33] bg-[#915EFF0f] backdrop-blur-sm"
      >
        <span className="text-xl sm:text-2xl">🎯</span>
        <p className="text-[#c4b5fd] text-[13px] sm:text-[15px] font-medium text-center">
          Goal: Transition from Software Engineering into{" "}
          <span className="text-[#915EFF] font-bold">Data Science &amp; AI</span>
          {" "}— one line of code at a time.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CurrentlyLearning, "learning");
