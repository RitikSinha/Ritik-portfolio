import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="bg-black flex flex-col md:flex-row md:flex justify-around items-center">
      <div className="flex justify-center items-center my-20 md:my-0 w-[95vw] md:w-[40vw]">
        <Image alt="logo" src="/watermark.png" width={500} height={500} />
      </div>
      <div className="  ml-2 ">
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
      </div>
    </div>
  );
}

export default About;
