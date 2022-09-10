import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);
  return (
    <div className="bg-black flex flex-col md:flex-row md:flex justify-around items-center">
      <motion.div
        className="flex justify-center items-center my-5 md:my-0 w-[95vw] md:w-[40vw]"
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 2,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image alt="logo" src="/watermark.png" width={500} height={500} />
      </motion.div>
      <motion.div
        className="  ml-2 "
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 3,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className=" font-medium my-5 md:my-0 text-center text-4xl md:mb-12">
          About Me
        </h1>
        <p className=" w-[95vw] md:w-[35vw] text-2xl">
          Hey! I am Ritik a full-stack developer based in India. I love to
          design build and deploy. I do live coding on my{" "}
          <a
            href="http://youtube.com/c/ritiksinha"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-red-500"
          >
            youtube channel
          </a>{" "}
          . I like to read and listen to audiobooks. I can work solo as well as
          a team player. I have also helped some of the local businesses to get
          them online. I would like to contribute to the start-up and am open to
          a freelance gig.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
