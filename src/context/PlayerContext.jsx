import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{

    const audioRef = useRef();
    const seekBar = useRef();
    const seekbg = useRef();
    const videoRemove = useRef();
    const [track,setTrack] = useState(songsData[2]);
    const [playerStatus,setPlayerStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime:{
            seconds:0,
            minutes:0
        },
        totalTime:{
            seconds:0,
            minutes:0
        }
    });

    const play = () =>{
        audioRef.current.play();
        setPlayerStatus(true);
    }
    const pause = () =>{
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    

    useEffect(()=>{
        setTimeout(() =>{
            audioRef.current.ontimeupdate = () =>{
                seekBar.current.style.width = (Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100))+"%";
                setTime({
                    currentTime:{
                        seconds:Math.floor(audioRef.current.currentTime % 60),
                        minutes:Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        seconds:Math.floor(audioRef.current.duration % 60),
                        minutes:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const seeksong = async (e) =>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioRef.current.duration)
    };

    const playwithid = async (id) =>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
        
    }

    const prevous = async () =>{
        if(track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayerStatus(true)
            console.log("Playing")
        }
    }
    const next = async () =>{
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayerStatus(true)
        }
    }

    const remove = () =>{
        videoRemove.current.style.width = '0';
    }

    const showVideo = () =>{
        videoRemove.current.style.width = '30%';
    }

    const Context = {
        audioRef,
        seekBar,
        seekbg,
        track,setTrack,
        playerStatus,setPlayerStatus,
        time,setTime,
        play,
        pause,
        playwithid,
        prevous,next,
        seeksong,
        videoRemove,remove,showVideo
    }

    return(
        <PlayerContext.Provider value={Context} >
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;