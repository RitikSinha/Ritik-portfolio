import React from "react";
import Image from "next/image";
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <section id="contact">
      <div>
        <div className="text-center text-2xl font-semibold">Find me on 😎</div>
        <div className="flex items-center justify-center">
          <a
            href="http://youtube.com/c/ritiksinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/youtube.png" width="60" height="60" alt="youtube" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-kumar-54783815b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" width="60" height="60" alt="youtube" />
          </a>
          <a
            href="http://twitter.com/konfavian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/twitter.png" width="60" height="60" alt="youtube" />
          </a>
          <a
            href="http://github.com/ritiksinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" width="60" height="60" alt="youtube" />
          </a>
        </div>
      </div>
      <div className=" flex items-center justify-center text-black bg-green-500">
        Made with ❤️ in India &copy; {year}
      </div>
    </section>
  );
};

export default Footer;
