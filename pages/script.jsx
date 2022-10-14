import React from 'react'
import Link from "next/link";

const script = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2 px\ text-[#5651e5]'>Scriptwriting </h2>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        {/* <p className=" font-bold ">Overview</p> */}
        <p>
        
        I have Written scripts for youtube video.
        </p>
        <a
          href='https://www.youtube.com/watch?v=X8Jk3wperyM&feature=youtu.be'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 duration-200 font-serif'>Watch video</button>
        </a>

        <Link href='/#work'>
        <p className='underline cursor-pointer py-10'>Back</p>
      </Link>
      </div>
      </div>
      </div>
  );
}

export default script