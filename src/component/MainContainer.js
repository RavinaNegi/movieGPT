import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';


const MainContainer = () => {
    
    const movies=useSelector((store)=>store.movie?.nowPlayingMovie);
    if(!movies) return;
    const  mainMovie=movies[0];
   
    const {title,overview,id}=mainMovie;
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer