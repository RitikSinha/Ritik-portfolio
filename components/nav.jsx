import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <nav className="flex items-center md:justify-around p-5">
      <div className="hidden md:block">
        <Image alt="logo" src="/watermark.png" width={70} height={70} />
      </div>
      <div></div>
      <hr className="hidden w-1/2" />
      <div className=" hidden md:flex items-center justify-around w-1/2">
        <a href="#"> Resume </a>
        <a href="#work"> Work</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;
