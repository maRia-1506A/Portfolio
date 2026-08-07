import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          {isMobile ? (
            <div className='w-full h-full bg-tertiary rounded-full p-4 flex flex-col items-center justify-center border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 object-contain'
              />
              <span className='text-[10px] text-secondary mt-1 font-medium text-center truncate w-full'>
                {technology.name}
              </span>
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
