import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
var shuffle = require("lodash.shuffle");
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Search from "./Search";
import Songs from "./Songs";

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
  console.log(session);
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  console.log("hello playlistID", playlistId);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [spotifyApi, playlistId]);

  console.log("hello spotify", playlist);

  return (
    <div className=" flex-grow h-screen overflow-y-scroll scrollbar-hide  text-white">
      <Search className="absolute top-0 left-1 w-[50%]" />
      <header className="absolute top-5 right-8">
        <div
          className={`flex items-center bg-gray-900 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2`}
          onClick={signOut}
        >
          {session?.user?.image ? (
            <img
              className="rounded-full w-10 h-10"
              src={session?.user?.image}
              alt=""
            />
          ) : (
            <img
              className="rounded-full w-10 h-10"
              src={
                "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              }
              alt=""
            />
          )}
          <h2>{session?.user?.name}</h2>
          {console.log(session)}

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8 `}
      >
        <img
          className="h-64 w-64 p-5
         shadow-2xl"
          src={playlist?.images?.[0].url}
          alt=""
        />

        <div>
          <p>PLAYLIST</p>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h2>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
}

export default Center;
