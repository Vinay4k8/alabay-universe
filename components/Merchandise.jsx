"use client";
import React from 'react';
import Slider from './Slider';
import SliderDiscover from './SliderDiscover';
import Image from 'next/image';

const Merchandise = () => {
  return (
    <div className='relative z-10 min-h-screen mt-16'>
      <h1 className='md:text-9xl text-4xl f-chessburga flex justify-center items-center pt-16 text-[#ffa800]'>
        MERCHANDISE
      </h1>
        <Slider className="relative z-10"/>
        <div className='relative z-10'>
        {/* First Radial Gradient Rectangle */}
        <div className="absolute w-[200%] h-[400px] bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] -translate-x-10 rotate-6"></div>
        
        {/* Second Radial Gradient Rectangle */}
        <div className="absolute w-[200%] h-[400px] bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] -rotate-6 bg-blend-normal -translate-x-10"></div>
        
        {/* Games Section */}
        <div className='relative z-10 flex text-center justify-center items-center flex-col gap-y-2'>
          <h1 className='md:text-9xl text-6xl f-chessburga text-white'>Games</h1>
          <p className='text-[#353535] text-lg font-extrabold'>
            Stay tuned for upcoming games!
          </p>
        </div>

        {/* Discover Slider */}
        <SliderDiscover/>

        {/* Game Previews Section */}
        <div className='relative z-10 pb-6 mb-10 pl-10'>
          <h1 className='font-bold text-[#FFA800] tracking-wide text-3xl'>
            GAME <span className='text-[#353535]'>PREVIEWS</span>
          </h1>
          
          <div className='grid grid-cols-4 gap-x-3 my-5'>
            <div>
              <Image
                height={500}
                width={500}
                className="object-cover"
                src={"/assets/alabay_games/g_p_1.png"}
                alt="Game Preview 1"
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className="object-cover"
                src={"/assets/alabay_games/g_p_2.png"}
                alt="Game Preview 2"
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className="object-cover"
                src={"/assets/alabay_games/g_p_3.png"}
                alt="Game Preview 3"
              />
            </div>

            {/* Button */}
            <div className='flex justify-center items-center'>
              <button className='bg-[#353535] px-4 py-2 text-xl md:text-5xl text-white font-extrabold flex items-center justify-center rounded-xl shadow-2xl'>
                <span className='md:-mt-5'>→</span>  
              </button>
            </div>
          </div>
        </div>
      </div> 
      </div>
  );
};

export default Merchandise;
