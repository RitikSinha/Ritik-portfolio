import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="flex  flex-col py-80 md:py-40 items-center justify-center">
      <h1 className=" font-bold text-5xl md:text-8xl">Hey! I&prime;m Ritik</h1>
      <br />
      <h1 className="font-bold text-5xl md:text-8xl text-lime-600 ">
        {" "}
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("< I Write Code />")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </h1>
    </div>
  );
}

export default Hero;
