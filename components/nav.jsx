import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useCycle } from "framer-motion";

// naviagation
import { MenuItem } from "./navigation/MenuItem";
import { MenuToggle } from "./navigation/MenuToggle";
import { Navigation } from "./navigation/Navigation";
import { useDimensions } from "./navigation/UseDimention";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Nav() {
  const { scrollYProgress } = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="flex items-center md:justify-around p-5">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="md:hidden block"
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="hidden md:block">
        <Link href="/">
          <Image alt="logo" src="/watermark.png" width={70} height={70} />
        </Link>
      </div>
      <div></div>
      <hr className="hidden w-1/2" />
      <div className=" hidden md:flex items-center justify-around w-1/2">
        <a href="#"> Resume </a>
        <a href="#work"> Work</a>
        <a href="https://blog.konfav.com/" target="_blank" rel="noreferrer">
          Blog
        </a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
