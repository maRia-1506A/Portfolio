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
    className="group relative overflow-hidden rounded-2xl p-5 flex flex-col gap-4
      border border-white/[0.06] bg-gradient-to-b from-[#1d1836] to-[#100b24]
      hover:-translate-y-2 hover:border-white/[0.12]
      hover:shadow-xl transition-all duration-300"
    style={{
      boxShadow: "0 0 0 0 transparent",
    }}
    whileHover={{
      boxShadow: `0 20px 40px -12px ${item.accent}22`,
    }}
  >
    {/* Coloured left border */}
    <div
      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-60
        group-hover:opacity-100 group-hover:top-2 group-hover:bottom-2
        transition-all duration-300"
      style={{ background: item.accent }}
    />

    {/* Top row — emoji + status */}
    <div className="flex items-start justify-between">
      {/* Emoji bubble */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
          border border-white/[0.07] transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${item.accent}18` }}
      >
        {item.emoji}
      </div>

      {/* Status badge */}
      <span
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
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

    {/* Name */}
    <div>
      <h3
        className="text-white font-bold text-[18px] mb-1 group-hover:transition-colors duration-300"
        style={{ color: "white" }}
      >
        {item.name}
      </h3>
      <p className="text-secondary text-[13px] leading-[22px]">
        {item.description}
      </p>
    </div>

    {/* Animated bottom bar */}
    <div className="mt-auto h-[2px] w-full rounded-full bg-white/[0.05] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}88)` }}
        initial={{ width: "0%" }}
        whileInView={{ width: item.status === "In Progress" ? "65%" : "35%" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

/* ─── Section ────────────────────────────────────────────────────────── */
const CurrentlyLearning = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Header panel */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Growth &amp; Development</p>
          <h2 className={styles.sectionHeadText}>Currently Learning.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.8)}
          className="mt-3 text-secondary text-[15px] max-w-2xl leading-[26px]"
        >
          I'm on a mission to transition from Software Engineering into Data Science
          and AI. Here's what I'm actively studying right now.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className={`-mt-16 pb-14 ${styles.paddingX}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-4">
          {learningItems.map((item, index) => (
            <LearningCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Goal strip */}
        <motion.div
          variants={fadeIn("up", "spring", 0.7, 0.6)}
          className="mt-8 flex items-center justify-center gap-3
            p-4 rounded-2xl border border-[#915EFF33] bg-[#915EFF0a]"
        >
          <span className="text-xl">🎯</span>
          <p className="text-[#c4b5fd] text-[14px] font-medium text-center">
            Goal: Transition from Software Engineering into{" "}
            <span className="text-[#915EFF] font-bold">Data Science &amp; AI</span>
            {" "}— one line of code at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(CurrentlyLearning, "learning");
