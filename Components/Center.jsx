import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
var shuffle =require('lodash.shuffle');
import {useRecoilState,useRecoilValue} from 'recoil';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Search from './Search';
import Songs from './Songs';

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];


function Center() {
  const { data: session } = useSession();
  const spotifyApi =  useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist,setPlaylist] =  useRecoilState(playlistState);
  console.log("hello playlistID",playlistId);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId])

  useEffect(() =>{
    spotifyApi.getPlaylist(playlistId).then((data) => {
       setPlaylist(data.body)
    }).catch((err) => {
       console.log(err);
    })
},[spotifyApi,playlistId])

  console.log("hello spotify",playlist);

  return (
    <div className=' flex-grow h-screen overflow-y-scroll scrollbar-hide  text-white'>
      <Search />
      <header className='absolute top-5 right-8 w-[17%]'>
        <div className={`flex items-center bg-gray-900 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2`} onClick={signOut} >
          <img className='rounded-full w-10 h-10' src={session?.user?.image} alt='' />
          <h2 >{session?.user?.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-96 text-white padding-8 `}>

      <img className="h-64 w-64 shadow-2xl" src={playlist?.images?.[0].url} alt="" />

        <div>
          <p>PLAYLIST</p>
          <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold'>{playlist?.name}</h2>
        </div>
      </section>
      <div>
        <Songs/>
      </div>
    </div>
  )
}

export default Center
