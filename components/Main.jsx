import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            do something great together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Tushar</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            SaaS Provider - Stories as a Service
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I help individuals and brands tell their stories with content.{" "}
            <br />
            I can do Content Creation & Management, Email Marketing for Brands
            and Youtube Channel Management
            <br />
            Currently part of{" "}
            <a
              className=" text-[#5651e5] hover:scale-105 duration-300"
              href="https://www.owledmedia.com/"
              target="_blank"
              rel="noreferrer"
            >
              OWLED
            </a>{" "}
            |{" "}
            <a
              className=" text-[#5651e5] hover:scale-105 duration-300"
              href="https://twitter.com/SuperteamDAO"
              target="_blank"
              rel="noreferrer"
            >
              SuperteamDAO
            </a>{" "}
            |{" "}
            <a
              className=" text-[#5651e5] hover:scale-105 duration-300"
              href="https://twitter.com/makerdock_"
              target="_blank"
              rel="noreferrer"
            >
              MakerDock
            </a>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/tushar-mehta-15aa211a8/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://twitter.com/tushaarmehtaa"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <Link href="/#contact">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="/../public/assets/tm.pdf"
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
