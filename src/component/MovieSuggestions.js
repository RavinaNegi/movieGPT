import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieSuggestions = () => {
    const {movies,mdbMovies}=useSelector((store)=>store.gpt.gptSearchMovies);
  
    console.log("slice",movies)
    if(!mdbMovies) return <h1 className=' '> hey there are no movies</h1>
    
  return (

    <div className='w-full m-2 p-2 absolute top-56 bg-black text-white bg-opacity-45'>
        {movies && movies.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={mdbMovies[index]} />)}

        
    </div>
  )
}
     
export default MovieSuggestions