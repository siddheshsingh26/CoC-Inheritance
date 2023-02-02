import React, { useEffect, useState } from "react";

import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { RssIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import Search from "./Search";
import Link from "next/link";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  console.log(session);
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log(playlists);
  return (
    <div className="text-gray-500 p-5 text-xs border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] lg:w-64 hidden md:inline-flex ">
      <div className="space-y-4">
        <button
          className="flex



        w-full rounded-md p-2
        py-3
        hover:bg-green-700 



        items-center space-x-2 hover:text-white   text-xl"
          onClick={() => signOut()}
        >
          <HomeIcon className="h-8 w-8" />

          <p className=" relative  group ">
            <span className="m-1">Logout</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
          </p>
        </button>
        <Link href={"/"}>
          <button
            className="flex
          w-full rounded-md p-2
          py-3
          hover:bg-green-700 
        
        items-center space-x-2 hover:text-white text-xl"
          >
            <HomeIcon
              className="h-8 w-8 
          "
            />
            <p className=" relative  group ">
              <span className="m-1">Home</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            </p>
          </button>
        </Link>
        {/* <Search/> */}
        <Link href={"/MyCollections"}>
          <button
            className="flex 
          w-full rounded-md p-2
          py-3
          hover:bg-green-700 items-center space-x-2 hover:text-white text-xl"
          >
            <BuildingLibraryIcon className="h-8 w-8" />
            <p className=" relative  group ">
              <span className="m-1">My Collections</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            </p>
          </button>
        </Link>
        <hr className="border-t-[1px] border-gray-900" />
        <Link href={"/ADDMYNFT"}>
          <button
            className="flex   w-full rounded-md p-2
        py-3
        hover:bg-green-700  items-center space-x-2 hover:text-white text-xl"
          >
            <PlusCircleIcon className="h-8 w-8" />
            <p className=" relative  group ">
              <span className="m-1">ADD MY NFT</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            </p>
          </button>
        </Link>
        <Link href={"/processToMint"}>
          <button
            className="flex   w-full rounded-md p-2
        py-3
        hover:bg-green-700  items-center space-x-2 hover:text-white text-xl"
          >
            <PencilSquareIcon className="h-8 w-8" />
            <p className=" relative  group ">
              <span className="m-1">Process to Mint</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            </p>
          </button>
        </Link>
        <button
          className="flex   w-full rounded-md p-2
        py-3
        hover:bg-green-700  items-center space-x-2 text-xl hover:text-white"
        >
          <RssIcon className="h-8 w-8" />
          <p className=" relative  group ">
            <span className="m-1">Your Episode</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-700"></span>
          </p>
        </button>
        <hr className="border-t-[1px] border-gray-900" />

        {/* Playlist */}
        <Link href={"/"}>
          {playlists.map((playlist) => (
            <>
              <p
                onClick={() => setPlaylistId(playlist.id)}
                key={playlist.id}
                className="font-bold cursor-pointer hover:text-white"
              >
                {playlist.name}
              </p>
            </>
          ))}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
