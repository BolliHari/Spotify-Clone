import React from 'react'
import { assets } from '../assets/assets'

const NavBar2 = () => {
  return (
    <>
      <div className='w-full flex items-center gap-2 p-4 px-0 lg:px-4'>
        <p className='bg-white rounded-full px-4 py-1 font-[10px] text-black cursor-pointer'>All</p>
        <p className='bg-[#242424] rounded-full px-4 py-1 font-[10px] text-white cursor-pointer'>Music</p>
        <p className='bg-[#242424] rounded-full px-4 py-1 font-[10px] text-white cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default NavBar2
