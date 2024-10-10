"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroStyles.css';

// import required modules
import { FreeMode, Pagination ,Navigation} from 'swiper/modules';
import Image from 'next/image';

const obj=["c1.png","c2.png","c3.png","c4.png","alabay_games/g_p_1.png","alabay_games/g_p_2.png","alabay_games/g_p_3.png"]

export default function HeroSlide() {
    const str="font-extrabold cursor-pointer text-gray-500 md:text-md hover:text-yellow-500 text-sm"
  return (
    <div>
        
        <div className='flex gap-x-4 justify-center items-center p-3 mt-2'>
            <p className={str}>ALL</p>
             <p className={str}>PHOTOS</p>
            <p className={str}>VIDEOS</p>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper  relative z-10 "
      >
        {obj.map((img,index)=>(
             
        <SwiperSlide key={index} >
             <div   className="items-center justify-center flex w-full h-[200px] overflow-hidden mx-4 border-2 border-gray-500 rounded-lg bg-gray-300"> 
            <Image
            width={500}
            height={500}
            objectFit="cover"
            src={"/assets/"+img}
            />
        </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
