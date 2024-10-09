import React from 'react';
import { assets } from '../assets/assets';

const SlideBar = () => {
  return (
    <div className='w-[30%] h-full p-2 flex-col gap-2 lg:flex hidden text-white'>
      <div className='h-[100%] rounded bg-[#121212]'>
        <div className='flex flex-col gap3 '>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-4' src={assets.arrow_icon} alt="" />
                    <img className='w-4' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1'>
                <h3>Create Your Frist Playlist</h3>
                <p className='font-light'>it's easy we will help you</p>
                <button className='px-5 py-1.5 mt-2 rounded-full bg-white text-black text-[15px]'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1'>
                <h3>Let's findsome podcasts to follow</h3>
                <p className='font-light'>we'll keep you updata on new episodes</p>
                <button className='px-5 py-1.5 mt-2 rounded-full bg-white text-black text-[15px]'>Browse Podcast</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SlideBar
