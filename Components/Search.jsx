import React from 'react'
import {useState,useEffect} from 'react';


const CLINET_ID=process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET=process.env.NEXT_PUBLIC_CLIENT_SECRET;

function Search() {
  const [searchInput,setSearchInput]=useState("");
  const [accessToken,setAccessToken]=useState("")
  const [albums, setAlbums]=useState([]);

  useEffect(()=>{
    var authParameters={
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='+CLINET_ID+'&client_secret='+CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result=>result.json())
    .then(data=>setAccessToken(data.access_token))
  },[])

// Search
  async function search(){
    console.log("Search for "+searchInput);

//Get request using search to get the Artist ID 
var searchParameteres={
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer '+ accessToken,
  }
}

var artistID=await fetch('https://api.spotify.com/v1/search?q='+ searchInput+'&type=artist',searchParameteres)
.then(response=>response.json())
.then(data=>{return data.artists.items[0].id})
//Get request with Artist ID grab all the albums from that artist 
var returnedAlbums=await fetch('https://api.spotify.com/v1/artists/' + artistID+'/albums'+'?include_groups=album&limit=50',searchParameteres)
.then(response=>response.json())
.then(data=>{
  console.log(data);
  setAlbums(data.items);
})
//Display those albums to the user

}  

console.log("*#*#*#**# FINAL ALBUMS",albums)

  return (
    <div>
           

    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for ..." required 
        onKeyPress={event=>{
          if(event.key=="Enter"){
            search();
          }
        }}
        onChange={event=>setSearchInput(event.target.value)}
        >

        </input>
        {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
   
      {albums.map((album,i)=>{
       
        console.log(album);
        return(
          <>
           //  <iframe  src={"https://open.spotify.com/embed/album/" +album.id+ "?utm_source=generator" }width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </>
        )
      })}
     

    </div>
  )
}

export default Search
