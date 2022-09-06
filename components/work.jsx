import React, { useState } from "react";
import Card from "./Card";
export default function Work() {
  const [data, setData] = useState([
    {
      id: 1,
      img: "https://raw.githubusercontent.com/RitikSinha/steet-style-project-01/master/1.png",
      github: "https://github.com/RitikSinha/steet-style-project-01",
      demo: "https://project-1-jsbootcam.netlify.app/",
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/RitikSinha/restaurant-project-2/master/thumbnail.png",
      github: "https://github.com/RitikSinha/restaurant-project-2",
      demo: "https://yummy-project-2.netlify.app/",
    },
    {
      id: 3,
      img: "https://raw.githubusercontent.com/RitikSinha/law-project-03/master/thumbnail.png",
      github: "https://github.com/RitikSinha/law-project-03",
      demo: "https://law-landing-page-jsbootcamp.netlify.app/",
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/RitikSinha/saas-project-04/master/thumbnail.png",
      github: "https://github.com/RitikSinha/saas-project-04",
      demo: "https://saas-landing-page-jsbootcamp.netlify.app/",
    },
    {
      id: 5,
      img: "https://raw.githubusercontent.com/RitikSinha/crypto-project-5/master/thumbnail.png",
      github: "https://github.com/RitikSinha/crypto-project-5",
      demo: "https://crypto-jsbootcamp.netlify.app/",
    },
    {
      id: 6,
      img: "https://raw.githubusercontent.com/RitikSinha/plants-project-6/master/thumbnail.png",
      github: "https://github.com/RitikSinha/plants-project-6",
      demo: "https://plants-jsbootcamp.netlify.app/",
    },
    {
      id: 7,
      img: "https://raw.githubusercontent.com/RitikSinha/headphone-project-7/master/thumbnail.png",
      github: "https://github.com/RitikSinha/headphone-project-7",
      demo: "https://headphone-jsbootcamp.netlify.app/",
    },
    {
      id: 8,
      img: "https://raw.githubusercontent.com/RitikSinha/web-agency-project-8/master/thumbnail.png",
      github: "https://github.com/RitikSinha/web-agency-project-8",
      demo: "https://agency-jsboocamp.netlify.app/",
    },
    {
      id: 9,
      img: "https://raw.githubusercontent.com/RitikSinha/devloper-project-9/master/thumbnail.png",
      github: "https://github.com/RitikSinha/devloper-project-9",
      demo: "https://project-9-fsjs.netlify.app/",
    },
    {
      id: 10,
      img: "https://raw.githubusercontent.com/RitikSinha/interior-landing-page-project-10/master/10.png",
      github: "https://github.com/RitikSinha/interior-landing-page-project-10",
      demo: "https://interior-fsjs.netlify.app/",
    },
    {
      id: 11,
      img: "https://raw.githubusercontent.com/RitikSinha/hosting-company-project-11/master/11.png",
      github: "https://github.com/RitikSinha/hosting-company-project-11",
      demo: "https://hosting-fsjs.netlify.app/",
    },
    {
      id: 12,
      img: "https://raw.githubusercontent.com/RitikSinha/agency-project-12/master/12.png",
      github: "https://github.com/RitikSinha/agency-project-12",
      demo: "https://agency-landing-fsjs.netlify.app/",
    },
    {
      id: 13,
      img: "https://raw.githubusercontent.com/RitikSinha/sass-web-project-13/master/Screenshot1.png",
      github: "https://github.com/RitikSinha/sass-web-project-13",
      demo: "https://saas-landing-page-fsjs.netlify.app/",
    },
    {
      id: 14,
      img: "https://raw.githubusercontent.com/RitikSinha/creativity-project-14/master/14.png",
      github: "https://github.com/RitikSinha/creativity-project-14",
      demo: "https://creativity-fjjs.netlify.app/",
    },
    {
      id: 15,
      img: "https://raw.githubusercontent.com/RitikSinha/design-project-15/master/15.png",
      github: "https://github.com/RitikSinha/design-project-15",
      demo: "https://productdesigner-fsjs.netlify.app/",
    },
    {
      id: 16,
      img: "https://github.com/RitikSinha/paytm-clone/raw/master/screenshots/1.png",
      github: "https://github.com/RitikSinha/paytm-clone",
      demo: "https://paytm-clone-jsbootcamp.netlify.app/",
    },
    {
      id: 17,
      img: "https://raw.githubusercontent.com/RitikSinha/shopify/master/screenshots/1.png",
      github: "https://github.com/RitikSinha/shopify",
      demo: "https://shopify-jsbootcamp.netlify.app/",
    },
    {
      id: 18,
      img: "https://raw.githubusercontent.com/RitikSinha/rode-clone/master/screenshots/1.png",
      github: "https://github.com/RitikSinha/rode-clone",
      demo: "https://rode-clone-jsbootcamp.netlify.app/",
    },
  ]);
  return (
    <section id="work" className=" py-12">
      <h1 className="text-center text-3xl">Recent work and experiments</h1>
      <div className=" px-10 md:px-32 md:my-12 md:grid grid-cols-3">
        {data.map((c) => (
          <Card key={c.id} img={c.img} github={c.github} demo={c.demo} />
        ))}
      </div>
    </section>
  );
}
