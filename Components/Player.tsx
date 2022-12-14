import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSongInfo from '../hooks/useSongInfo';
import useSpotify from '../hooks/useSpotify'



function Player() {
    const spotifyApi=useSpotify();
    const {data:session,status}=useSession();
    const [currentTrackId,setCurrentTrackId]=useRecoilState(currentTrackIdState);
    const [isPlaying,setIsPlaying]=useRecoilState(isPlayingState);

    const [volume,setVolume]=useState(50);
    const songInfo=useSongInfo();
    

  return (
    <div>
        {/* <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt="" /> */}
    </div>
  )
}

export default Player
