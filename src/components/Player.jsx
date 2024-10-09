import React, { useContext } from 'react';
import { assets,  } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

  const {seekBar,seekbg,play,pause,playerStatus,track,time,prevous,next,seeksong,showVideo}  = useContext(PlayerContext);

  return (
    <div className='h-[9%] bg-black flex items-center justify-between p-4 text-white'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-14' src={track.image} alt="" />
        <div>
            <h3>{track.name}</h3>
            <p>{track.desc}</p>
        </div>
      </div>
      <div className='flex flex-col items-center m-auto gap-2'>
        <div className='flex items-center gap-4 '>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img onClick={prevous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            {playerStatus ?
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />:
            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            }
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex gap-2 items-center'>
            <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
            <div ref={seekbg} onClick={seeksong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer '>
                <hr ref={seekBar} className='h-1 w-0 border-none bg-green-400 rounded-full'/>
            </div>
            <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-70'>
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img onClick={showVideo} className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 h-1 bg-stone-50 rounded'></div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player
