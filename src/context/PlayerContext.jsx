import {createContext, useEffect, useRef, useState} from "react";
import {songsData} from "../assets/assets.js";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef()
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false)
    }

    useEffect(() => {
        const updateTime = () => {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            const currentMinute = Math.floor(currentTime / 60);
            const currentSecond = Math.floor(currentTime % 60);
            const totalMinute = Math.floor(duration / 60);
            const totalSecond = Math.floor(duration % 60);

            setTime({
                currentTime: {
                    second: currentSecond,
                    minute: currentMinute,
                },
                totalTime: {
                    second: totalSecond,
                    minute: totalMinute,
                }
            });

            if (seekBar.current && duration) {
                const progress = (currentTime / duration) * 100;
                seekBar.current.style.width = `${progress}%`;
            }
        };

        audioRef.current.ontimeupdate = updateTime;

        return () => {
            audioRef.current.ontimeupdate = null; // Cleanup on unmount
        };
    }, []);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;