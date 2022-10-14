import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactsImg from "../public/assets/contacts.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 "
                  src={contactsImg}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 text-[#5651e5]">Tushar</h2>
                <p className=" font-bold">SaaS Provider</p>
                <p className="py-4">
                  I&lsquo;ve worked as a marketer, a student, a salesman, and
                  more in the past. I&lsquo;ve written newsletters, nonfiction
                  not quite enough, tweets far too many, emails, essays,
                  reports, and presentations, and pretty much everything in
                  between.After a few years, I&lsquo;ll consider myself a good
                  writer who has survived all of the AI tools and the Digital
                  Revolution.
                </p>
              </div>
              <div>
                <p className="uppercase font-bold text-[#5651e5] ">
                  Connect with me
                </p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="py-4">
              <form  action="https://getform.io/f/3689c7c9-3ff6-4f2a-abbb-a71626890434"
                method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-[#5651e5]">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text" 
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-[#5651e5]">
                      Phone
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[#5651e5]">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[#5651e5]">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[#5651e5]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300 "
                    rows="15"

                  ></textarea>
                </div>
                <button className="'w-full p-4 text-gray-100 mt-4'">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}; 

export default Contact;
