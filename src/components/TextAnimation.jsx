import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = ({ text, otherStyles }) => {
  return (
  
      <p
        className={`${otherStyles} text-4xl md:text-5xl font-caveat text-center md:text-start `}
      >
        <TypeAnimation
          sequence={[text, 3000, ""]}
          repeat={Infinity}
          cursor={true}
          speed={10}
          omitDeletionAnimation={true}
        />
      </p>
   
  );
};

export default TextAnimation;
