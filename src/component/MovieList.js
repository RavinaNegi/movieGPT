import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
    
  return (
    <div>
        <h1 className='font-bold text-lg msm-text-5xl pt-2 md:pt-4 px-4 md:px-10'>{title}</h1>
    <div className='flex  overflow-x-scroll '>
        
        <div className='flex'>
       {movies && movies.map((movie)=><MovieCard key={movie.id} movie={movie.poster_path} />)}
       </div>
    </div>
    </div>
  )
}

export default MovieList