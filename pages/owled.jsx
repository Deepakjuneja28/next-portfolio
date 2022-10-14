import React from 'react'
import Link from "next/link";

const owled = () => {
  return (
<div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 px\ text-[#5651e5]'>OWLED Media Newsletter </h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className=" font-bold ">Overview</p>
          <p>
          Digital overdose, audience retention, community building, and more. <br />
          With the advertising industry tending towards gaining the most eyeballs, the disruptive nature of ads is constantly causing viewers to ‘turn off’ from them. In this age of digital overdose, advertising is the first thing people run away from. <br />
         So how do we retain their attention?

          </p>
          <a
            href='https://www.getrevue.co/profile/owledmedia/issues/never-worry-about-reach-ever-again-1247740?utm_campaign=Issue&utm_content=view_in_browser&utm_medium=email&utm_source=OWLED+Parchments'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 duration-200 font-serif'>Read More</button>
          </a>

          <Link href='/#work'>
          <p className='underline cursor-pointer py-10'>Back</p>
        </Link>
        </div>
        </div>
        </div>

  );
}

export default owled