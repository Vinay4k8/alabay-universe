import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen relative grid grid-cols-1 grid-rows-2 overflow-x-hidden'>
        <div className='relative h-[50%] '>
            <div className=' absolute z-5 bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] w-[200%] h-[300%] rotate-6 translate-x-[-1.5rem]'>
           </div>
            <div className='flex justify-center p-3'>
                 <div className="bg-white rounded-full relative z-10 w-24 h-3 ">
                </div>
            </div>
               <div className='grid grid-cols-2 relative z-6'>
                   <div>
                       <Image
                        src={"/assets/hero.png"}
                        width={800}
                       height={600}
                
                       />
                     </div>
                     <div>
                        <div className='font-semibold text-center'>
                            <span className='md:text-5xl text-3xl text-orange-600 text-bold'>History of</span>
                            
                            <span className='f-chessburga text-white text-4xl md:text-8xl block'>
                            Alabay        
                            </span>
                        </div>
                       <div className='md:text-md text-xs font-bold mt-7 w-[80%] md:w-[60%] mx-auto text-gray-500 text-center'>
                            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
                        </div>
                     </div>
               </div>
        </div>
    </div>
  )
}

export default Hero