import React, { useContext } from 'react';
import SlideBar from './components/SlideBar';
import Player from './components/Player';
import NavBar from './components/NavBar';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';
import RightSlideBar from './components/RightSlideBar';

const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <NavBar />
      <div className='h-[83%] flex items-center'>
        <SlideBar />
        <Display />
        <RightSlideBar />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
