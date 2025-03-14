("use client");
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projectList } from "@/assets/data/data";
import SliderButtons from "@/components/SliderButtons";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import TextAnimation from "@/components/TextAnimation";

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const contaierStyles =
    "flex absolute z-10 w-full bottom-[calc(50%_-_22px)] items-center justify-between px-10";

  const btnStyles =
    "-m-1 w-[40px] h-[40px] flex justify-center items-center transition-all rounded-xl ";
  const iconStyles = "text-[32px]";

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProject(projectList[currentIndex]);
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={fadeInLeft}
      className=" flex-col items-center justify-center w-5/6  mx-auto md:h-full py-32"
    >
      <TextAnimation text="Showcasing My Works.." otherStyles="p-3" />

      <div className="flex flex-col md:flex-row md:gap-[30px] container">
        <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none ">
          <div className="flex flex-col gap-[30px] h-[50%] ">
            {/* outline num */}
            <div className="text-6xl md:text-8xl text-center md:text-start font-extrabold text-transparent text-outline dark:dark-text-outline mt-3 ">
              {project.num}
            </div>
            {/* project title */}
            <p className="text-2xl md:text-4xl text-center md:text-start ">
              {project.title}
            </p>
            {/* project description */}

            <p className="dark:text-white/60 text-center md:text-start lg:text-xl">
              {project.description}
            </p>

            {/* github & notion buttons */}
            <div className="flex justify-center md:justify-start">
              <SocialMediaIcons
                github={project.github}
                notion={project.notion}
                live={project.live}
              />
            </div>

            {/* border */}
            <hr className="border border-brown/50 dark:border-white/40" />
            {/* project stack*/}
            <ul className="flex gap-4 justify-center md:justify-start flex-wrap">
              {project.stack.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-xs md:text-sm text-brown/60dark:text-white/60 rounded-full py-2 px-2 bg-brown/20 dark:bg-white/5 flex justify-center items-center"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[50%] ">
          <Swiper
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="w-full"
          >
            {projectList.map((project, index) => {
              return (
                <SwiperSlide key={index} className=" w-fit px-7 ">
                  {/* image */}
                  <div className="h-[360px] md:h-[460px] w-full rounded-2xl ">
                    <img
                      src={`assets/images/${project.image}`}
                      alt="project image"
                      className=" object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            {/* slider buttons */}
            <SliderButtons
              contaierStyles={contaierStyles}
              btnStyles={btnStyles}
              iconStyles={iconStyles}
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
