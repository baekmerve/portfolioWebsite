import React from "react";
import { TypeAnimation } from "react-type-animation";

const LandingTextAnimation = () => {
  return (
    <div className="text-center">
      <p className="mt-3 text-4xl md:text-8xl font-caveat z-10 text-center md:text-start">
        <TypeAnimation
          sequence={["MERVE BAEK", 3000]}
          cursor={false}
          speed={10}
        />
      </p>
      <p className=" text-center md:text-start text-xl md:text-3xl ml-3 font-caveat text-cyan">
        <TypeAnimation
          sequence={["Fronted Developer", 3000]}
          repeat={Infinity}
          cursor={false}
          speed={30}
        />
      </p>
    </div>
  );
};

export default LandingTextAnimation;
