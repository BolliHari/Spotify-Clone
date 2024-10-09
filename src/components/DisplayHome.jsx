import React from 'react'
import NavBar2 from './NavBar2';
import { albumsData } from '../assets/assets';
import AlbumItems from './AlbumItems';
import { songsData } from '../assets/assets';
import Songitems from './Songitems';

const DisplayHome = () => {
  return (
    <>
      <NavBar2 />
      <div className='mb-4 '>
      <div className='flex items-center justify-between'>
          <h1 className='py-5 font-bold text-2xl'>Popular Albums</h1>
          <p className='py-5 font-semibold text-sm border-b-[2px] pb-1 cursor-pointer hidden md:block'>show more</p>
        </div>
        <div className='flex items-center overflow-auto'>
          {albumsData.map((album,index) =>(<AlbumItems key={index} name={album.name} image={album.image} desc={album.desc} id={album.id}/>))}
        </div>
      </div>
      <div className='mb-4 '>
        <div className='flex items-center justify-between'>
          <h1 className='py-5 font-bold text-2xl'>Trending Songs</h1>
          <p className='py-5 font-semibold text-sm border-b-[2px] pb-1 cursor-pointer hidden md:block'>show more</p>
        </div>
        <div className='flex items-center overflow-auto'>
          {songsData.map((album,index) =>(<Songitems key={index} name={album.name} image={album.image} desc={album.desc} id={album.id}/>))}
        </div>
      </div>
      <div className='mb-4 '>
        <div className='flex items-center justify-between'>
          <h1 className='py-5 font-bold text-2xl'>Best Songs</h1>
          <p className='py-5 font-semibold text-sm border-b-[2px] pb-1 cursor-pointer hidden md:block'>show more</p>
        </div>
        <div className='flex items-center overflow-auto'>
          {albumsData.map((album,index) =>(<AlbumItems key={index} name={album.name} image={album.image} desc={album.desc} id={album.id}/>))}
        </div>
      </div>
      <div className='mb-4 '>
        <div className='flex items-center justify-between'>
          <h1 className='py-5 font-bold text-2xl'>New Songs</h1>
          <p className='py-5 font-semibold text-sm border-b-[2px] pb-1 cursor-pointer hidden md:block'>show more</p>
        </div>
        <div className='flex items-center overflow-auto'>
          {songsData.map((album,index) =>(<Songitems key={index} name={album.name} image={album.image} desc={album.desc} id={album.id}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
