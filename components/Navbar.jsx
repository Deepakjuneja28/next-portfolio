import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";


// import tm from '../public/assets/tm.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

    useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/self' ||
      router.asPath === '/owled' ||
      router.asPath === '/solana'||
      router.asPath === '/script'
    ) {
      setNavBg('ecf0f3');
      setLinkColor('#1f2937');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
    style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-10 cursor-pointer">
        <Link href="/">
          <Image
            src='/assets/logo.png'
            alt="/"
            width="125"
            height="50"
          ></Image>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:scale-105 duration-200 cursor-pointer hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#experience">
              <li className=" ml-10 text-sm uppercase hover:scale-105 duration-200 cursor-pointer hover:text-[#5651e5]">
                experience
              </li>
            </Link>
            <Link href="/#skills">
              <li className=" ml-10 text-sm uppercase hover:scale-105 duration-200 cursor-pointer hover:text-[#5651e5]">
                skills
              </li>
            </Link>
            <Link href="/#work">
              <li className=" ml-10 text-sm uppercase hover:scale-105 duration-200 cursor-pointer hover:text-[#5651e5]">
                work
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" ml-10 text-sm uppercase hover:scale-105 duration-200 cursor-pointer hover:text-[#5651e5]">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0  top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "hidden left-[-100%]top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                src='/assets/logo.png'
                  alt="/"
                  width="87"
                  height="35"
                ></Image>
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 uppercase">
                Do something great together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link href="/#experience">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Experience
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#work">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Work
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                EXCITED TO CONNECT!
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/tushar-mehta-15aa211a8/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://twitter.com/tushaarmehtaa'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaTwitter />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a
                  href='/../public/assets/tm.pdf'
                  target='_blank'
                  rel='noreferrer'
                  download={true}
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
