import React from 'react'
import { option_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {  addPopular } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch=useDispatch();
    const popularMovies=async()=>
    {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular',option_URL);
      const json=await data.json();
     
      dispatch(addPopular(json.results));
    }
    useEffect(()=>{
             popularMovies();
    },[]);
    
  
    
}

export default usePopularMovies;