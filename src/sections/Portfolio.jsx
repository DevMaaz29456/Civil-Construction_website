import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import project1 from "../assets/assets/project1.jpg";
import project2 from "../assets/assets/project2.jpg";
import project3 from "../assets/assets/project3.jpg";
import project4 from "../assets/assets/project4.jpg";
import project5 from "../assets/assets/project5.jpg";
import project6 from "../assets/assets/project6.jpg";
import project7 from "../assets/assets/project7.jpg";
import project8 from "../assets/assets/project8.jpg";

function Portfolio() {
  return (
    <div id="portfolio" className="w-full ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Portfolio
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          Our Best Projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 grid-cols-1"
      >
        <img src={project1} alt="" className="h-[250px] w-full" />
        <img src={project2} alt="" className="h-[250px] w-full" />{" "}
        <img src={project3} alt="" className="h-[250px] w-full" />
        <img src={project4} alt="" className="h-[250px] w-full" />
        <img src={project5} alt="" className="h-[250px] w-full" />
        <img src={project6} alt="" className="h-[250px] w-full" />
        <img src={project7} alt="" className="h-[250px] w-full" />
        <img src={project8} alt="" className="h-[250px] w-full" />
      </motion.div>
    </div>
  );
}

export default Portfolio;
