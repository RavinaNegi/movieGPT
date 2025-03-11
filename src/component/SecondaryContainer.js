import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import usePopularMovies from '../Hooks/usePopularMovies';


const SecondaryContainer = () => {
 
  const movies=useSelector((store)=>store.movie.nowPlayingMovie);
  const popularmovies=useSelector((store)=>store.movie.popularMovies);

  return (
    <div className='bg-black text-white'>
      <div className=' mt-0 md:-mt-32 z-20 relative'>
      <MovieList title="Now Playing" movies={movies} />
      <MovieList title="Tredimg" movies={movies} />
      <MovieList title="Popular" movies={popularmovies} />
      <MovieList title="Upcomig" movies={movies} />
      </div>
      </div>
  )
}

export default SecondaryContainer