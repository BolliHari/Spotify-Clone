import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
 
  const navigate = useNavigate();

  return (
    <>
      <div className='h-[8%] flex items-center justify-between p-2 px-6'>
           <div className='flex text-white items-center'>
            <img className='w-8' onClick={() => navigate('/')} src={assets.spotify_logo} alt="" />
             <b className='text-xl ml-1'>Spotify</b>
           </div>
            <div className='hidden lg:flex items-center gap-2 ml-[120px] ' >
                <div className='bg-[#242424] rounded-full cursor-pointer p-3 '>
                    <img className='w-6 ' onClick={() => navigate('/')} src={assets.home_icon} alt="" />
                </div>
                <div className='bg-[#242424] p-3 px-4 rounded-full my-3 w-[450px] text-white flex items-center gap-3'> 
                    <img className='w-6' src={assets.search_icon} alt="" />
                    <input type='text' className='w-[75%] bg-transparent border-none outline-none font-[20px]' placeholder='What do you want to play?' />
                </div>
            </div>
            <div className='flex items-center gap-2 font-semibold'>
                <p className='bg-[#242424] rounded-full px-6 py-1 text-white cursor-pointer hidden xl:flex'>Install App</p>
                <p className='bg-[#242424] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer lg:hidden'>
                    <img className='w-5' src={assets.search_icon} alt="" />
                </p>
                <p className='bg-[#00FFFF] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>H</p>
            </div>
      </div>
    </>
  )
}

export default NavBar
