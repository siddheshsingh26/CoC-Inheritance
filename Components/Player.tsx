import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();
  const router = useRouter();
  const [id, setId] = useState(null);
  // sameer way
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (router.query.play !== null) {
  //     setId(router.query.play);
  //   }
  //   // let element: HTMLElement = document.getElementsByClassName('zxky3zhmh_vhWlndRKVG')[0] as HTMLElement;
  //   // element.click();
  //   var element = document.querySelector('[data-testid="play-pause-button"]');
  //   console.log(element);
  // }, [router, id]);
  useEffect(() => {
    // localStorage.setItem(id);
    var ans = router.query.play;
    if (ans !== null) {
      console.log("%%%%#%%%############");
      // const mainurl = window.location.origin;
      // window.location.href = `${mainurl}/${data}`;

      localStorage.setItem(ans, id);
      setId(ans);
    } else {
      console.log("do not found #%##########%#%");
      var data = localStorage.getItem(ans);
      setId(ans);
    }
  }, [router, id]);

  return (
    <div className="w-[100%] bg-black h-[80px]">
      {/* <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt="" /> */}
      <iframe
        className="h-20 w-[100%] rounded-xl"
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator?`}
        width="100%"
        height="200"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Player;
