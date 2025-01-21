"use client";
import React from "react";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { about, experience, education } from "@/assets/data/data";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,olestiae quas vel sint commodi repudiandae consequuntur voluptatum.",
  skillList: [
    { icon: <FaHtml5 />, name: "html5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javaScript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
  ],
};

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      variants={fadeInLeft}
      className=" flex-col items-center justify-center  w-5/6 pt-32 mx-auto md:h-full"
    >
      <div>
        <p className="font-caveat font-semibold text-5xl md:text-6xl mb-12 text-center md:text-start">
          MY <span className="text-cyan">RESUME</span>
        </p>
      </div>
      <div className="container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px] "
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6 mt-0 md:mt-20">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className=" w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 sm:grid-cols-2  gap-[30px]  ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 
                          md:items-start "
                        >
                          <span className="text-cyan"> {item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[70px] text-center md:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan" />
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 sm:grid-cols-2  gap-[30px]  ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 
                          md:items-start "
                        >
                          <span className="text-cyan"> {item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan" />
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center md:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className=" grid grid-cols-2  gap-4 sm:grid-cols-3 md:grid-cols-4  md:gap-[30px] text-center md:text-start">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan transition-all duration-300 ">
                                {" "}
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center md:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-wjite/60 mx-auto md:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-start gap-4"
                      >
                        <span className="text-white/60 ">
                          {" "}
                          {item.fieldName}
                        </span>
                        <span className="text-xl"> {item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
