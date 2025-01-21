("use client");
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiNotion, SiGithub } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projectList } from "@/assets/data/data";
import SliderButtons from "@/components/SliderButtons";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contaierStyles =
    "flex gap-2 absolute  bottom-[calc(50%_-_22px)] justify-between md:bottom-0 z-10 w-full md:w-max md:right-[45%] ";

  const btnStyles =
    "bg-cyan text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full hover:bg-brightBlue";
  const iconStyles = "";

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
      transition={{ duration: 0.7 }}
      variants={fadeInBottom}
      className="flex flex-col justify-center py-32 w-5/6 mx-auto md:h-full "
    >
      <div className="container mx-auto">
        <p className="text-5xl md:text-6xl text-center md:text-start font-caveat">
          PRO <span className="text-cyan">JECTS</span>
        </p>
        <div className="flex flex-col md:flex-row md:gap-[30px]  mt-20">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl md:text-8xl  text-center md:text-start font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title*/}
              <p className="text-2xl md:text-4xl text-center md:text-start text-red">
                {project.title}
              </p>
              {/* project description*/}
              <p className="text-white/60 text-center md:text-start md:text-xl ">
                {project.description}
              </p>
              {/* project stack*/}
              <ul className="flex gap-4 justify-center md:justify-start">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm md:text-lg text-cyan rounded-full py-1 px-2 bg-paper/90 "
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <hr className="border border-white/20" />
              {/* github & notion buttons */}
              <SocialMediaIcons
                github={project.github}
                notion={project.notion}
              />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectList.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10 "></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <img
                          src={`assets/images/${project.image}`}
                          alt="project image"
                          className=" object-cover w-full h-full"
                        />
                      </div>
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
      </div>
    </motion.section>
  );
};

export default Projects;
