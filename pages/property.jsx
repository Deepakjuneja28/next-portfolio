import React from "react";
import Link from "next/link";
import Image from "next/image";

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 px\ text-[#5651e5]'>Youtube channel Management</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className=" font-bold ">Overview</p>
          <p>
          Well-versed in designing thumbnails and writing titles, descriptions, tags, and hashtags to draw the most viewers in accordance with YouTube SEO and human psychology. <br />
          As of now, I&lsquo;m in charge of three Youtube channels: 
          </p>
          <a
            href='https://www.youtube.com/c/AyushWadhwa'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 duration-200 font-serif'>Ayush wadhwa</button>
          </a>
          <a
            href='https://www.youtube.com/channel/UCRfk5kpsWl_bWqlbWnDVVIw'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 duration-200 font-serif'>Learn with Flint </button>
          </a>
          <a
            href='https://www.youtube.com/c/VedantMaheshwari'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 hover:scale-110 duration-200 font-serif'>Vedant Maheshwari</button>
          </a>

          <Link href='/#work'>
          <p className='underline cursor-pointer py-10'>Back</p>
        </Link>
        </div>
        </div>
        </div>

  );
};

export default property;
