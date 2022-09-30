import React, { useState } from "react";
import Work from "./work";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
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
  const [data2, setData2] = useState([
    {
      id: 1,
      img: "https://res.cloudinary.com/konfav-com/image/upload/v1664522725/cred-clone_jlajix.png",
      github: "https://github.com/RitikSinha/cred-clone",
      demo: "https://credclone.konfav.com/",
      text: "Cred website Clone",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/konfav-com/image/upload/v1664523011/bajao_zurwqr.png",
      github: "https://github.com/RitikSinha/bajao-react-sanity",
      demo: "https://bajao.konfav.com/",
      text: "Bajo Music Streaming app",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/konfav-com/image/upload/v1664523920/chatly_drmtxq.png",
      github: "https://github.com/RitikSinha/chatly",
      demo: "https://chatly.konfav.com/",
      text: "Realtime Chat App",
    },
  ]);
  const [data3, setData3] = useState([
    {
      id: 1,
      img: "https://raw.githubusercontent.com/RitikSinha/doctics-tech-a-thon-3.0/master/screenshots/03.png",
      github: "https://github.com/RitikSinha/doctics-tech-a-thon-3.0",
      demo: "https://doctics.herokuapp.com/login",
      text: "Doctor Booking App",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-12 py-12">
          <h1 className="text-center text-3xl py-5">
            Recent work and experiments
          </h1>

          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center px-3">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-green-600"
                    : "text-" + "-600 ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                HTML & CSS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-green-600"
                    : "text-" + "-600 bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                React & Next.js
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-green-600"
                    : "text-" + "-600 bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                MERN Stack
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Work data={data} />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Work data={data2} />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Work data={data3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />
    </>
  );
}
