import React from "react";
import Image from "next/image";
const Card = ({ img, github, demo }) => {
  return (
    <div className=" w-80 bg-neutral-900 rounded-md py-2 my-5 hover:scale-105 hover:transform-gpu">
      <Image
        src={img}
        alt="thumnail"
        className=" block"
        width={717}
        height={376}
      />
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
    </div>
  );
};

export default Card;
