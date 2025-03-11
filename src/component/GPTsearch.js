import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import MovieSuggestions from './MovieSuggestions'
import { useSelector } from 'react-redux'

const GPTsearch = () => {
  const searchStatus=useSelector((store)=>store.gpt.searchStatus);
  

  return (
   
        
            <div className='relative '>
              <div className='fixed w-full'>
        <img className=' w-full h-screen object-cover ' alt='logo'
      
    src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg' />
    </div>
     
      <GPTsearchBar/>
      
    {searchStatus && <MovieSuggestions />}
     
      
     
        
        
    </div>
  )
}

export default GPTsearch