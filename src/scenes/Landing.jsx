import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-20 w-5/6 mx-auto"
    >
      {/* Image Section */}

      <div className="md:order-2 mt-20 md:mt-32 flex justify-center basis-2/5 z-10 ">
        <img
          alt="Profile image of Merve Baek, a frontend developer"
          src="assets/images/profile-image.jpeg"
          className=" hover:filter hover:saturate-150 max-w-[300px] md:max-w-[450px] transition rounded-full animate-colorChange p-1 
           "
        />
      </div>
      {/* MAIN SECTION */}
      <div className="basis-3/5 mt-12 md:mt-32">
        {/* Headings*/}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={fadeInLeft}
        >
          <div className="flex-col text-center md:text-start">
            <p className="mt-3 text-4xl md:text-8xl font-caveat z-10">
              MERVE BAEK
            </p>
            <p className="text-xl md:text-3xl ml-3 font-caveat text-cyan">
              Jr. Frontend Developer
            </p>
            <p className=" my-8 md:my-10 md:text-lg  ">
              Focused on building clean, responsive, and user-friendly websites.
              Passionate about creating solutions that deliver results.
            </p>
          </div>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center md:justify-start gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={fadeInLeft}
        >
          <AnchorLink
            className="  bg-cyan rounded-xl p-2 md:p-3 font-semibold transition hover:scale-110 
             duration-500  text-paper"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let’s Connect
          </AnchorLink>
          <SocialMediaIcons
            github={`https://github.com/baekmerve`}
            notion={"https://www.notion.so/3fc2723651e6407fb971b8fdfd8fe2d6"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
