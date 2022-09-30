import * as React from "react";
import { motion } from "framer-motion";
import s from "./nav.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#00ff6e", "#18f018", "#21ae17", "#27f45e", "#21e22e"];

export const MenuItem = ({ i, text, link }) => {
  console.log(text, link);
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={s.li}
    >
      {text === "Blog" || text === "Resume" ? (
        <a href={link} target="_blank" rel="noreferrer">
          <div className={s.text_placeholder} style={style}>
            <h1 className="text-black">{text}</h1>
          </div>
        </a>
      ) : (
        <a href={`#${link}`}>
          <div className={s.text_placeholder} style={style}>
            <h1 className="text-black">{text}</h1>
          </div>
        </a>
      )}
    </motion.li>
  );
};
