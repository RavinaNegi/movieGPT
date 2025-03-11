import React from 'react'

const MovieCard = ({movie}) => {
  
  if(!movie) return;  
  return (
    <div className=' w-20 h-34  md:w-40 md:h-64 p-2'>
        <img className='w-full h-full object-cover' src={'https://image.tmdb.org/t/p/w500/'+movie+'.jpg'}/>
    </div>
  )
}

export default MovieCard