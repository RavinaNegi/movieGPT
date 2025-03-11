
import { useDispatch } from 'react-redux';
import { option_URL } from '../utils/constant';
import { addTrailer } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
    const getMovieVideo=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId }/videos?language=en-US`,option_URL);

        const json=await data.json();
        const trailerVideos=json.results;
       
        const filterTrailer=trailerVideos.filter((trailer)=>trailer.type==="Trailer");
       
        const trailer=filterTrailer?filterTrailer[0]:trailerVideos[0];
        
        dispatch(addTrailer(trailer));


    }
    useEffect(()=>{
        getMovieVideo();
    },[]);
   
}

export default useMovieTrailer