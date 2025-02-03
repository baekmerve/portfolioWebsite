import Marquee from "react-fast-marquee";
import React from "react";

import { skillsData } from "@/assets/data/data";

const SkillMarquee = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction="left"
    >
      {skillsData.map((item, index) => (
        <div
          className="flex flex-col items-center justify-center gap-3 h-[120px] w-[120px] transition-all duration-500 m-3 hover:scale-[1.2] cursor-pointer"
          key={index}
        >
          {/* skill icon img */}
          <img
            src={`./assets/skills/${item.image}`}
            alt={item.name}
            width={40}
            height={40}
            className="h-10 w-10 "
          />

          {/* skill name */}
          <p className="text-sm md:text-lg">{item.name}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default SkillMarquee;
