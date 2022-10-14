import React from "react";
import Image from "next/image";
import expImg from "../public/assets/exp.png";

const About = () => {
  return (
    <div id="experience" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            Experience
          </p>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <p className="py-2 text-gray-600 font-bold">
            &#9733; Marketing Lead,{" "}
            <a
              className=" hover:underline text-[#5651e5]"
              href="https://www.segmind.com/"
              target="_blank"
              rel="noreferrer"
            >
              Segmind <br />
            </a>
            &nbsp; &nbsp; May 2022 - Present - Remote
          </p>
          <p className="py-2 text-gray-600">
            &#x2022; Established and configured reports to measure campaign
            results and recommend methods to increase conversion rates, reduce
            opt-outs, etc. <br />
            &#x2022; Created content calendars and scheduled content for brand
            channels, including email and social; measured and optimised
            campaigns. <br />
            &#x2022; Developed content for decks and ensured all visuals and
            copy were concise, compelling, and on-brand.
          </p>
          <p className="py-2 text-gray-600 font-bold">
            &#9733; Marketing Generalist,{" "}
            <a
              className=" hover:underline text-[#5651e5]"
              href="https://www.owledmedia.com/"
              target="_blank"
              rel="noreferrer"
            >
              Owled Media <br />
            </a>
            &nbsp; &nbsp; July 2021 - Present - Remote
          </p>
          <p className="py-2 text-gray-600">
            &#x2022; Assisted the Owled Media Content Team in planning and
            implementation of content pieces for 3 Youtube channels and 2
            Instagram pages and 1 Twitter handle. <br />
            &#x2022; Led a team of editors and designers to provide the finest
            content.
            <br />
            &#x2022; Built brand strategies for startups such as CASHe,
            LoopHealth, INDMoney, and OWLED Media itself and Ideated to help
            them stand out on social media <br />
          </p>
          <p className="py-2 text-gray-600 font-bold">
            &#9733; Social Media Marketing Intern,{" "}
            <a
              className=" hover:underline text-[#5651e5]"
              href="https://www.seekho.ai/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Seekho.ai <br />
            </a>
            &nbsp; &nbsp; Jan 2022 - March 2022 - Remote
          </p>
          <p className="py-2 text-gray-600">
            &#x2022; Ideating and creating content for the brand on all social
            handles. <br />
            &#x2022; Identifying the latest trends and collaborative
            opportunities on multiple platforms.
            <br />
            &#x2022; Ideating social media campaigns and maintaining a monthly
            content calendar.
          </p>
          
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={expImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
