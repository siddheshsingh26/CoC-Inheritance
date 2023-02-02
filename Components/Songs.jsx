import React from "react";
import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
// import Song from './Song';

function Songs() {
  const router = useRouter();
  const playlist = useRecoilValue(playlistState);
  console.log(playlist);
  const handleClick = (id) => {
    console.log(id);
    router.push(`?play=${id}`, undefined, { shallow: true });
  };
  return (
    <div className="px-8 flex flex-col space-y-[20px] text-white pt-8 pb-28">
      {playlist?.tracks.items.map((track, i) => {
        return (
          <>
            <div onClick={() => handleClick(track.track.id)}>
              <div className="bg-green-700 w-[6%] rounded-full text-center p-2">
                Play
              </div>
            </div>
            <div className="w-[90%] overflow-hidden rounded-xl">
              <iframe
                className="relative h-20 w-[107%] rounded-xl z-0"
                src={
                  "https://open.spotify.com/embed/track/" +
                  track.track.id +
                  "?utm_source=generator"
                }
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Songs;
