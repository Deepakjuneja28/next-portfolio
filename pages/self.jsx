import React from 'react'
import Link from "next/link";

const self = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2 px\ text-[#5651e5]'>Personal Blog </h2>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p className=" font-bold ">1% Better with Tushar</p>
        <p>
        
        I&lsquo;m learning new things every day and documenting everything here!
        </p>
        <a
          href='https://tusharmehta.substack.com/'
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
}

export default self