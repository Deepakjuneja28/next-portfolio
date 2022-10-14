import React from 'react'
import Link from "next/link";

const solana = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2 px\ text-[#5651e5]'>Solana Hacker House Dilli </h2>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        {/* <p className=" font-bold ">Overview</p> */}
        <p>
        
            I have written Tweets for Solana Hacker House Dilli 
        </p>
        <a
          href='https://twitter.com/hackerhouses/status/1568915314750156801?s=20&t=koBt9WTyXgG9rT7rNeMAyw'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 duration-200 font-serif'>Read more</button>
        </a>

        <Link href='/#work'>
        <p className='underline cursor-pointer py-10'>Back</p>
      </Link>
      </div>
      </div>
      </div>
  );
};

export default solana