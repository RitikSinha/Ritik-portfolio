import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Card = ({ img, github, demo, text }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);
  return (
    <motion.div
      className=" w-80 bg-neutral-900 rounded-md py-2 my-5 hover:scale-105 hover:transform-gpu"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 3,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Image
        src={img}
        alt="thumnail"
        className=" block"
        width={717}
        height={376}
      />
      <h1 className="text-center">{text}</h1>
      <div className="flex items-center justify-between px-2">
        <a
          target="_blank"
          rel="noreferrer"
          href={github}
          className=" block bg-green-500 py-2 text-black font-bold px-5 rounded-full"
        >
          View on Github
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={demo}
          className=" block text-green-500 py-3 px-5 text-2xl"
        >
          Demo
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
