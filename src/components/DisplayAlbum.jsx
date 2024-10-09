import React, { useContext } from 'react'
import NavBar2 from './NavBar2'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {id} = useParams();
    const {playwithid} = useContext(PlayerContext);
    const albumData = albumsData[id];
  return (
    <>
      <div className='mt-7 flex gap-8 flex-col  md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p className='mb-1'>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-8xl'>{albumData.name}</h2>
                <h4 className='mt-2'>{albumData.desc}</h4>
                <div mt-2>
                    <img className='w-5 inline-block' src={assets.spotify_logo} alt="" />
                    <b>Spotify</b> 
                    &bull;&nbsp;1,234,18 likes
                    &bull;&nbsp;<b>25 Songs,</b>
                    about 1hr 35min
                </div>
            </div>
      </div>
      <div className='mt-10 grid grid-cols-3 sm:grid-cols-4 pl-5 mb-4 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
      </div>
        <hr className='mb-3' />
      {
        songsData.map((song,index) => (
            <div key={index} onClick={() =>{playwithid(song.id)}} className='grid grid-cols-3 sm:grid-cols-4 p-2 cursor-pointer pl-5 mb-4 hover:bg-[#ffffff2b]'>
                <p className='text-white'>
                    <b className='text-[#a7a7a7] mr-2'>{index+1}</b>
                    <img className='inline w-10 mr-2' src={song.image} alt="" />
                    {song.name}
                </p>
                <p className='pt-2 ml-3 sm:ml-0'>{song.desc}</p>
                <p className='pt-2 hidden sm:block'>26 April 2022</p>
                <p className='pt-2 text-center'>{song.duration}</p>
            </div>
        ))
      }  
    </>
  ) 
}

export default DisplayAlbum
