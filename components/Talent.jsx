import React from "react";
import Image from 'next/image'
import seo from '../public/assets/skills/seo.png';
import nm from '../public/assets/skills/nm.png';
import cm from '../public/assets/skills/cm.png';
import writting from '../public/assets/skills/writting.png';
import video from '../public/assets/skills/video.png';




const Talent = () => {
  const skills = [
    {
      id: 1,
      src: seo,
      title: "YouTube SEO",
    },
    {
      id: 2,
      src: cm,
      title: "Content Marketing",
      
    },
    {
      id: 3,
      src: nm,
      title: "Newsletter Marketing",
     
    },
    {
      id: 4,
      src: video,
      title: "Video Editing",
     
    },
    {
      id: 5,
      src: writting,
      title: "Creative Writing",
      
    },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ id, title, src }) => (
            <div key={id} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={src} alt="/" width="64px" height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talent;
