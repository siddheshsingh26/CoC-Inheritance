import React from 'react'

import {HomeIcon} from '@heroicons/react/24/outline'
import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline'
import {BuildingLibraryIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import {RssIcon} from '@heroicons/react/24/outline'
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import { signOut,useSession } from 'next-auth/react'

function Sidebar() {
   const {data: session,status}=useSession();
  console.log(session);
  return (
    <div className='text-gray-400 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white' onClick={()=>signOut()}>
          <HomeIcon className='h-8 w-8'/>
          <p>Logout</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-8 w-8'/>
          <p>Home</p>
        </button>
      
        <button className='flex items-center space-x-2 hover:text-white'>
          <MagnifyingGlassCircleIcon className='h-8 w-8'/>
          <p>Search</p>
        </button>
      
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
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>

      </div>
    </div>
  )
}

export default Sidebar