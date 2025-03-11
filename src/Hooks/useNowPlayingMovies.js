import React from 'react'
import { option_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch=useDispatch();
    const nowPlayingMovies=async()=>
    {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',option_URL);
      const json=await data.json();
     
      dispatch(addMovies(json.results));
    }
    useEffect(()=>{
             nowPlayingMovies();
    },[]);
    
  
    
}

export default useNowPlayingMovies;