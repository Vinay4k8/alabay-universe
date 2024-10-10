import Hero from "@/components/Hero";
import HeroSlide from "@/components/HeroSlide";
import Merchandise from "@/components/Merchandise";
import Project from "@/components/Project";
import Social from "@/components/Social";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home(){
  return( <div className="relative max-h-screen w-full overflow-hidden">
<div className="absolute inset-0 z-0">
        <Image
          src="/assets/dog_play.png" // path to the image
          alt="Dog playing"
          layout="fill" // this makes the image take up the whole container
          objectFit="cover" // ensures the image covers the entire area
          
        />
      </div>
    <div className="relative h-screen overflow-y-scroll z-10 w-[80%] mt-16  rounded-t-xl bg-white  mx-auto custom-scrollbar">
       
      
      <div className="min-h-screen">
      <Hero/>
      <div>
          <HeroSlide/>
       </div>
      </div>
      <div className="min-h-screen">
        <Project/>
      </div>
      <div className="min-h-screen">
        <Tokenomics/>
      </div>
      <div className="min-h-screen">
        <Merchandise/>
      </div>
      <div className="min-h-screen">
        <Social/>
      </div>
    </div>
  </div>
  )
}