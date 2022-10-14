import React from "react";
import Image from "next/image";
import Link from "next/link";
import youtubeImg from "../public/assets/projects/youtube.jpg";
import owledImg from "../public/assets/projects/owled.jpg";
import solanaImg from "../public/assets/projects/solana.jpg";
import sw2Img from "../public/assets/projects/sw2.jpg";
import selfImg from "../public/assets/projects/self.jpg";
import WorkItems from "./WorkItems";

const Work = () => {
  return (
    <div id="work" className="w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Work</p>
        <h2 className="py-4">What I&lsquo;ve Done</h2>
        <div className="grid md:grid-cols-2 gap-8">
         
        <WorkItems title='Youtube Channel Management' backgroundImg={youtubeImg} workUrl='/property'skill='' />
        <WorkItems title='OWLED Media' backgroundImg={owledImg} workUrl='/owled'skill='Newsletter'/>
        <WorkItems title='Solana Hacker House Dilli ' backgroundImg={solanaImg} workUrl='/solana'skill='Tweets' />
        <WorkItems title='Personal Blog ' backgroundImg={selfImg} workUrl='/self'skill='Writing ' />
        <WorkItems title='Scriptwriting' backgroundImg={sw2Img} workUrl='/script'skill='' />
        </div>
      </div>
    </div>
  );
};

export default Work;
