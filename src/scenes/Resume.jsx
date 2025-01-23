"use client";
import React from "react";
import DownloadCV from "../components/DownloadCV";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { experience, education, softSkills } from "@/assets/data/data";
import SkillMarquee from "@/components/SkillMarquee";
import TextAnimation from "@/components/TextAnimation";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={fadeInLeft}
      className=" flex-col items-center justify-center  w-5/6  mx-auto md:h-full"
    >
      <div className="mb-10">
        <TextAnimation text="Career Overview" />
      </div>

      <div className="container">
        <div className="flex justify-center md:justify-start mb-10">
          <DownloadCV />
        </div>

        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px]   justify-center"
        >
          <TabsList className=" flex flex-col w-full max-w-[350px] mx-auto gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className=" w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center md:text-left  ">
                <p className="max-w-[600px] text-white/80 mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 sm:grid-cols-2  gap-[30px]  ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] px-5 rounded-xl flex flex-col justify-center items-center gap-1 
                          md:items-start "
                        >
                          <span className="text-cyan"> {item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[50px] text-center md:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
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
            <TabsContent
              value="skills"
              className="max-w-[600px] md:max-w-[1000px] "
            >
              <div className="flex flex-col gap-[30px] max-w-[600px] md:max-w-[1000px] justify-center items-center  md:items-start ">
                <ul className=" flex gap-3 flex-wrap w-full max-w-[600px] ">
                  {softSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className=" rounded-xl py-1 px-2 bg-white/5 hover:scale-105 cursor-pointer"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>

                <div className=" xs:max-w-[390px] sm:max-w-[600px] md:max-w-[1000px]">
                  <SkillMarquee />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
