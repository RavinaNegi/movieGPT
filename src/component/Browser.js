import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GPTsearch from './GPTsearch';




const Browser = () => {
  const gpt=useSelector((store)=>store.gpt.toggleValue)
  useNowPlayingMovies();
   usePopularMovies();
 
  
  return (
    <div className=''>
       <Header/>
       { 
       gpt? <GPTsearch/>:
       <>
       <MainContainer/>
       <SecondaryContainer/>
       </>
}
        
        
      
    </div>
  )
}

export default Browser;
