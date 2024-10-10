import Image from 'next/image'
import React from 'react'
const arr=[{
  text:"Expansion and New Features",
  color:"linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)",
  img:"c1.png"
},{
  text:"Community Events and contests",
  color:"linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)",
  img:"c2.png"
},{
  text:"Merchandise Store Launch",
  color:"linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)",
  img:"c3.png"
},{
  text:"Community Building and Initial Launch",
  color:"linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)",
  img:"c4.png"
}]
const Project = () => {
  return (
    <div>
      <div className='text-5xl md:text-7xl f-chessburga text-[#FFA800] text-center pt-11'>
        PROJECT VISION
      </div>
      <div className='flex flex-col items-center justify-center relative z-10 min-h-[600px]'>
        <Image
        width={900}
        height={900}
        className='w-[80%] z-10'
        src={"/assets/project_pic.png"}
        />
        <div className='text-center z-10 text-gray-500 font-bold md:text-lg px-[10%]'>
        Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
        </div>
       
            <div className="absolute w-[200%] h-[400px] -bottom-40 bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] translate-x-10 rotate-6"
        ></div>
  
  {/* Second Rectangle */}
            <div className="absolute w-[200%] h-[400px] bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] -rotate-6  bg-blend-normal"></div>
      </div>
      <div className='relative z-10'>
        <div className='f-chessburga  md:text-7xl text-white pl-[20%] text-4xl z-10 relative'>
        ROAD MAP
        </div>
        {/* <div className='absolute z-6 -translate-x-7 rotate-6 bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] w-[200%] h-[400px] bg-transparent bg-blend-normal'>
        </div> */}
        <div className='grid grid-cols-2 gap-x-2'>
          <div className='relative z-10 flex justify-center items-center text-center flex-col text-xs md:text-base font-extrabold text-gray-500 px-5'>
          Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. 
              <p className='text-[#FFA800]'>Join us as we grow and achieve new heights.</p>
          </div>
          <div className='flex items-center justify-center pb-5'>
                <Image
                className='relative z-10'
                width={300}
                height={600}
                src={"/assets/road_map.png"}
                />
          </div>
        </div>

        </div>
      
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-3 px-3 py-4'>
          {arr.map((card,index)=>(
            <div key={index} className={`relative z-10  flex flex-col gap-y-2 rounded-md items-center justify-center`}
            style={{
              background:card.color
            }}
            >
                <div className='md:text-lg text-center px-1 font-semibold text-white'>{card.text}</div>
                <Image
                height={200}
                width={200}
                objectFit='cover'
                src={`/assets/${card.img}`}
                />
            </div>
          ))}
        </div>

    </div>
    
  )
}

export default Project


