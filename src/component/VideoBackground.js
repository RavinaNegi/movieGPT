import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useEffect } from 'react';
const VideoBackground = ({movieId}) => {
    const trailerfromSlice=useSelector((store)=>store?.movie.trailerVideo)
   
    
    useMovieTrailer(movieId);
   

    if (!trailerfromSlice || !trailerfromSlice.key) {
        return <div>Loading...</div>; // ✅ Prevents undefined access
    }
    return (
    <div className="w-screen aspect-video">
        <iframe className=' w-full md:w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerfromSlice.key+"?&autoplay=1&mute=1"} title="Sonic the Hedgehog 3 | Official Trailer 2 (2024 Movie) Ben Schwartz, Jim Carrey, Keanu Reeves" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default VideoBackground