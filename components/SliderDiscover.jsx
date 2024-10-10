"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './styles.css';
// import required modules
import { EffectFade, Navigation, Pagination ,Autoplay} from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


const products=[
    {
        bck:"alabay_guard.png",
        btn:"843AFC",
        link:"/GamePreview/alabayGuard"
    },
    {
        bck:"alabay_h.png",
        btn:"45D689",
        link:"/GamePreview/alabayHeritage"
    },
]


export default function SliderDiscover() {
  return (
    <div className='mx-auto w-[80%] h-screen mt-7 pb-[7rem] relative z-30 '>
      
      <Swiper 
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper rounded-xl h-[570px] relative z-15"
      >
        {products.map((card,index)=>(
            <SwiperSlide key={index} className='relative z-15'>
              hi
                <Image
                src={`/assets/alabay_games/${card.bck}`}
                objectFit='cover'
                layout='fill'
                className='relative z-15'
                />
                <Link href={card.link}>
                
                <div className='absolute w-full z-20 left-[42%]  bottom-4'>
               <button className={`rounded-full px-4 py-2 text-white font-bold flex items-center justify-center`}
               style={{ backgroundColor: `#${card.btn}` }}
               >
                DISCOVER 
                <span className='text-3xl flex items-center justify-center my-auto text-center -mt-2'>→</span>

                </button>
                </div></Link>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
