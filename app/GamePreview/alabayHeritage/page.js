// #90FFAE
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='relative min-h-screen w-full'>
        <Image
          className='absolute'
          fill
          style={{ objectFit: 'cover' }} // Replaces layout="fill" and objectFit="cover"
          src={"/assets/alabay_games/alabay_heritage_bck.png"}
          alt='Alabay Guardian'
        />
        
        <div className='relative z-10 p-2 w-[80%] mx-auto'>
            <h1 className='f-baron text-4xl md:text-7xl text-white'>
                ALABAY HERITAGE
            </h1>
            <h2 className='tracking-[5px] text-xl md:text-5xl mt-2 font-semibold f-bebas text-[#90ffae]'>
                THE LOST ADVENTURE
            </h2>
            <div className='relative overflow-y-scroll max-h-screen z-10 snap-mandatory custom-scrollbar2 custom-scrollbar3 '>
                <div className='min-h-screen'>
                    <p className='w-60%  md:w-[40%] md:text-lg font-semibold text-white'>
                        Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
                    </p>
                    <button className='px-4 my-3 py-2 rounded-full bg-[#90ffae] font-semibold text-white drop-shadow-lg flex items-center justify-center gap-2'>
                        <span className='text-white bg-black rounded-full text-3xl py-1 px-3'>&#9654;</span> Coming Soon
                    </button>
                    <h3 className='text-white font-bold my-2 text-2xl'>
                        <span className='text-[#90ffae] '>GAME</span> PREVIEWS
                    </h3>
                    <div className='flex gap-x-4 flex-wrap'>
                        <Image
                          height={200}
                          width={200}
                          src={"/assets/alabay_games/alabay_heritage/g1.png"}
                          className='rounded-xl'
                          alt='Preview 1'
                        />
                        <Image
                          height={200}
                          width={200}
                          src={"/assets/alabay_games/alabay_heritage/g2.png"}
                          className='rounded-xl'
                          alt='Preview 2'
                        />
                        <Image
                          height={200}
                          width={200}
                          src={"/assets/alabay_games/alabay_heritage/g3.png"}
                          className='rounded-xl'
                          alt='Preview 3'
                        />
                        <Image
                          height={200}
                          width={200}
                          src={"/assets/alabay_games/alabay_heritage/g4.png"}
                          className='rounded-xl'
                          alt='Preview 3'
                        />
                    </div>
                </div>
                <div className='min-h-screen snap-end pb-10 mb-10'>
                    <h1 className='md:text-3xl text-xl text-[#90ffae]'>FEATURES</h1>
                    <div className='text-white space-y-4 font-semibold md:text-md'>
                        <p>Explore a variety of landscapes, including <span className='text-[#90ffae]'>
                        mountains, forests, deserts, </span>  and <span className='text-[#90ffae]'>ancient ruins.</span></p>
                        <p>Use the Alabay's <span className='text-[#90ffae]'>abilities</span>  to solve <span className='text-[#90ffae]'>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.</p>
                        <p>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</p>
                        <p>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</p>
                        

                        <h2>Challenge Modes</h2>
                        <p>- <span className='text-[#90ffae]'>Time Trials:</span> Compete in special timed challenges where the Alabay must navigate through complex mazes or complete puzzles within a time limit.</p>
                        <p>
                        - <span className='text-[#90ffae]'>Exploration Mastery:</span> A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets.
                        </p>

                        <div className='flex items-center  gap-x-4'>
                        <button className='px-4 my-3 py-2 rounded-full bg-white font-semibold text-black drop-shadow-lg flex items-center justify-center gap-2'>
                        <span className='text-white bg-black rounded-full text-3xl py-1 px-3'>&#9654;</span> Coming Soon
                    </button>
                    <Link href={"/"}>
                    <button className='px-8 my-3 py-4 rounded-full  font-semibold text-white drop-shadow-lg flex items-center justify-center gap-2 border-white border-2 '>
                         EXIT
                    </button>
                    </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Page;
