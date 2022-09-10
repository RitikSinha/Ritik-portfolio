import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((item) => (
      <MenuItem i={item.i} key={item.i} text={item.text} link={item.link} />
    ))}
  </motion.ul>
);

const items = [
  {
    i: 1,
    text: "Resume",
    link: "#",
  },
  {
    i: 2,
    text: "Work",
    link: "work",
  },
  {
    i: 3,
    text: "Blog",
    link: "https://blog.konfav.com/",
  },
  {
    i: 4,
    text: "Contact",
    link: "contact",
  },
];
