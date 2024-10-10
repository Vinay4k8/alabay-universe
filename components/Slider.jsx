"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const products = [
  {
    bck: "black_h_bck.png",
    product: "black_h.png"
  },
  {
    bck: "blue_c_bck.png",
    product: "blue_c.png"
  },
  {
    bck: "pink_t_bck.png",
    product: "pink_t.png"
  },
  {
    bck: "black_h_bck.png",
    product: "black_h.png"
  },
  {
    bck: "yellow_t_bck.png",
    product: "yellow_t.png"
  },
];

export default function Slider() {
  return (
    <div className='mx-auto w-[80%] mt-7 pb-[7rem] relative z-20 h-screen'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className=" rounded-xl"
      >
        {products.map((card, index) => (
          <SwiperSlide key={index} className="h-[570px] relative z-10">
            <Image
src={`/assets/alabay_merch/${card.bck}`}
alt={`Background for product ${index}`}
fill
className="object-cover"
/>
<div className="absolute w-full h-[470px] z-10 flex items-center justify-center">
<Image
src={`/assets/alabay_merch/${card.product}`}
alt={`Product image ${index}`}
width={1000}
height={1000}
className="object-contain"
/>
hi
</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
{/* Background Image */}
            
{/* <Image
src={`/assets/alabay_merch/${card.bck}`}
alt={`Background for product ${index}`}
fill
className="object-cover"
/>
hiii

{/* Foreground Product Image */}
{/* <div className="absolute w-full h-[470px] z-10 flex items-center justify-center">
<Image
src={`/assets/alabay_merch/${card.product}`}
alt={`Product image ${index}`}
width={500}
height={500}
className="object-contain"
/>
hi
</div> */} 