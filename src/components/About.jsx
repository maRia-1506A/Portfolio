import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { maria } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          I'm a Software Engineering student at Daffodil International University,
          passionate about solving real-world problems through technology. I enjoy
          programming and building software projects using Python, Java, C++, SQL,
          and foundational web skills. My long-term goal is to become a Data
          Scientist — I'm currently strengthening my foundations in machine
          learning, SQL, statistics, and Python libraries like Pandas and NumPy. I
          believe in learning by doing and love turning ideas into working
          software.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="flex-shrink-0"
        >
          <Tilt className="w-[240px] h-[310px] sm:w-[270px] sm:h-[350px]">
            <div className="w-full h-full green-pink-gradient p-[2px] rounded-[24px] shadow-card">
              <div className="bg-tertiary w-full h-full rounded-[22px] overflow-hidden relative group">
                <img
                  src={maria}
                  alt="Zannatul Farzana Maria"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
