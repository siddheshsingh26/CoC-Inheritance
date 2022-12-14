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

function Background() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  console.log("hello playlistID", playlistId);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  return (
    <div
      className={` flex-grow h-screen overflow-y-scroll scrollbar-hide bg-gradient-to-b to-black ${color}  text-white`}
    >
      <header className={`absolute top-5 right-8 w-[17%] `}>
        <div
          className={`flex items-center bg-gray-900 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2`}
          onClick={signOut}
        >
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            alt=""
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
}

export default Background;
