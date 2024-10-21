import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px ] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
      <motion.div
        initial="hiddem"
        whileInView="visible "
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          WeLLcome To
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          Construction Website
        </motion.h1>
        <div className="w-[120px ] h-[60px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[10px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          aut!
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 "
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolor
          quidem facere alias recusandae quos nam odio mollitia pariatur,
          assumenda officiis earum reiciendis, totam incidunt possimus
          molestiae! Asperiores aliquid in voluptatibus similique deserunt,
          reprehenderit qui. Consequatur totam maiores provident quasi quod
          assumenda quo mollitia, ex aliquam vero, sint velit eveniet alias
          natus laboriosam voluptate similique modi expedita nobis. Molestiae,
          sint quos vitae minima nihil labore quas dolore iste explicabo aut
          veniam iusto placeat odit aspernatur dicta id quisquam, qui quae
          temporibus deleniti eveniet itaque eos doloribus laudantium! Dolor
          natus dignissimos officiis. Modi cumque dolor id distinctio, numquam
          doloremque architecto accusamus.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 mb-10 rounded-lg font-bold text=black"
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
