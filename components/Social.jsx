import Image from 'next/image'
import React from 'react'

const Social = () => {
  return (
    <div>
        <h1 className='md:text-9xl text-4xl f-chessburga text-[#FFA800] px-4'>
        SOCIAL MEDIA
        LINKS
        </h1>
        <div className='flex items-center justify-between mb-10 pb-6 px-5'>
            <div className='relative z-7'>
                <Image
                height={500}
                width={500}
                src={"/assets/ChatBubble.svg"}
                />
                <div className='w-full md:top-10 md:right-12 flex flex-col items-center justify-center absolute gap-y-2 md:gap-y-5 right-2 top-5 z-10'>
                    <div className='rounded-full flex gap-x-3 md:items-center md:justify-center'>
                    <Image
                    height={50}
                    width={50}
                    src={"/assets/twitter_logo.png"}
                    className='bg-[#353535] h-6 w-6 md:h-14 md:w-14 text-white rounded-full p-2'
                    /> 
                    <div className='md:text-3xl text-xs font-bold text-white capitalize'>
                        TWITTER LINK
                    </div>
                    </div>
                    <div className='rounded-full flex md:gap-x-3 items-center justify-center'>
                    <Image
                    height={50}
                    width={50}
                    src={"/assets/telegram.png"}
                    className='bg-[#353535] h-6 w-6 md:h-14 md:w-14 text-white rounded-full p-2'
                    /> 
                    <div className='md:text-3xl text-xs font-bold text-white '>
                        TELEGRAM LINK
                    </div>
                    </div>
                    
                </div>
            </div>
        <div>
            <Image
            height={500}
            width={500}
            src={"/assets/dog_social.png"}
            />
        </div>
        </div>
    </div>
  )
}

export default Social