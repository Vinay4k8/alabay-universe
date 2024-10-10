import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
  return (
<div className='relative w-full min-h-screen mt-16'>
    
         <div className=" absolute w-[200%] h-[400px] -bottom-40 bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)]  -translate-x-10 rotate-6"
        ></div>
  
            {/* Second Rectangle */}
         <div className="absolute  w-[200%] h-[400px] bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] -rotate-6  bg-blend-normal -translate-x-10 top-10 md:top-0"></div>
         <div className='flex relative z-10 flex-col'>
            <div className='f-chessburga text-5xl md:text-9xl text-white relative z-10 pt-[6rem]'>
                TOKENOMICS
            </div>
            <div className='grid grid-cols-2 md:-mt-3'>
                <div className='grid grid-col-1 grid-rows-3 items-center justify-center'>
                    <div className='bg-[#353535] py-4 px-4 ml-2 md:px-16 rounded-md mx-3 my-3'>
                        <p className='text-white font-bold md:text-lg'>LIQUIDITY</p>
                        <p className='font-extrabold text-xl md:text-4xl text-[#fff280]'>LOCKED</p>
                    </div>
                    <div className='bg-[#353535] py-4 px-4 ml-2 md:px-16 rounded-md mx-3 my-3'>
                        <p className='text-white font-bold md:text-lg'>CONTRACT</p>
                        <p className='font-extrabold text-xl md:text-4xl text-[#fff280]'>RENOUNCED</p>
                    </div>
                    <div className='bg-[#353535] py-4 px-4 ml-2 md:px-16 rounded-md mx-3 my-3'>
                        <p className='text-white font-bold md:text-lg'>TAXES</p>
                        <p className='font-extrabold text-xl md:text-4xl text-[#fff280]'>0%</p>
                    </div>
                </div>
                <div>
                    <Image
                    height={400}
                    width={400}
                    src={"/assets/t_pic.png"}
                    />
                </div>
            </div>

         </div>
    </div>

      
  )
}

export default Tokenomics