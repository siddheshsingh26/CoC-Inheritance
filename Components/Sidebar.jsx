import React, { useEffect, useState } from 'react'

import {HomeIcon} from '@heroicons/react/24/outline'
import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline'
import {BuildingLibraryIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import {RssIcon} from '@heroicons/react/24/outline'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import { signOut,useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import {useRecoilState} from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom'
import Search from './Search'

function Sidebar() {
  const spotifyApi = useSpotify()
  const {data: session, status} = useSession();
  console.log(session);
  const [playlists,setPlaylists] =  useState([])
  const [playlistId,setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
      if(spotifyApi.getAccessToken()) {
          spotifyApi.getUserPlaylists().then((data) => {
              setPlaylists(data.body.items);
          })
      }
  },[session,spotifyApi])

  console.log(playlists);
  return (
    <div className='text-gray-500 p-5 text-xs border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] lg:w-64 hidden md:inline-flex '> 
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white' onClick={()=>signOut()}>
          <HomeIcon className='h-8 w-8'/>
          <p>Logout</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-8 w-8'/>
          <p>Home</p>
        </button>
      
        
          
          {/* <Search/> */}
        
      
        <button className='flex items-center space-x-2 hover:text-white'>
          <BuildingLibraryIcon className='h-8 w-8'/>
          <p>Your Library</p>
        </button>
        <hr className='border-t-[1px] border-gray-900'/>
      
        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-8 w-8'/>
          <p>Create Playlist</p>
        </button>
      
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-8 w-8'/>
          <p>Liked Songs</p>
        </button>
      
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-8 w-8'/>
          <p>Your Episodes</p>
        </button>
        <hr className='border-t-[1px] border-gray-900'/>

        {/* Playlist */}
        {playlists.map((playlist)=>(
          <p onClick={() => setPlaylistId(playlist.id)} key={playlist.id} className='font-bold cursor-pointer hover:text-white'>{playlist.name}</p>
        ))}
        

      </div>
    </div>
  )
}

export default Sidebar