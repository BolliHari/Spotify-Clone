import React, { useContext } from 'react';
import { videoData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
 

const RightSlideBar = () => {

  const {videoRemove , remove,track} = useContext(PlayerContext)

  return (
    <div className='w-[30%] h-full p-2 flex-col gap-2 lg:flex hidden text-white rounded-full relative' ref={videoRemove}>
      <div className=' bg-gradient-to-r from-black  to-black cursor-pointer text-black'>
        <video src={track.video}
            autoplay="{true}" loop muted
            className="opacity-60 opacity hover:opacity-80 z-10 rounded ">
        </video>
      </div>
      <div className='w-[92%] h-full p-2 text-white absolute flex flex-col justify-between'>
        <div className='flex justify-between'>
            <h5 className='font-bold'>{track.name} {`(From "${track.desc}")`}</h5>
            <p className='bg-[#797878] w-6 h-6 rounded-full flex items-center justify-center pb-1 cursor-pointer' onClick={remove}>x</p>    
        </div> 
        <div className='mt-[150px] flex flex-col justify-between'>
            <div>
              <h2 className='text-3xl font-bold'>{track.name}</h2>
              <p>{track.desc}</p>
            </div>
            <div className='bg-[#242424] h-[240px] w-[104%] flex flex-col p-4 mt-2 text-white rounded-xl'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold ml-1'>Credits</h2>
                <p className='text-sm text-[#d5d3d3]'>Show all</p>
              </div>
              <div className='mt-4 ml-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                  <div className='opacity-79'>
                    <h1 className=' text-[18px]'>D.S.P</h1>
                    <p className='text-[12px]'>Main Artist, Composer</p>
                  </div>
                  <p className='bg-[#121212] rounded-full px-6 py-1 text-white cursor-pointer'>follow</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='opacity-79'>
                    <h1 className=' text-[18px]]'>Singer 1</h1>
                    <p className='text-[12px]'>Main Artist</p>
                  </div>
                  <p className='bg-[#121212] rounded-full px-6 py-1 text-white cursor-pointer'>follow</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='opacity-79'>
                    <h1 className=' text-[18px]]'>Singer 2</h1>
                    <p className='text-[12px]'>Main Artist, Lyricist</p>
                  </div>
                  <p className='bg-[#121212] rounded-full px-6 py-1 text-white cursor-pointer'>follow</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightSlideBar
