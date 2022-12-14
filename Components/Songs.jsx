import React from "react";
import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
// import Song from './Song';

function Songs() {
  const playlist = useRecoilValue(playlistState);
  console.log(playlist);
  return (
    <div className="px-8 flex flex-col space-y-1 text-white pt-8 pb-28">
      {playlist?.tracks.items.map((track, i) => (
        <div className="flex flex-row ">
          <p>{i + 1}</p>

          <iframe
            className="h-20 w-[100%] "
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
      ))}
    </div>
  );
}

export default Songs;

{
  /*  */
}
