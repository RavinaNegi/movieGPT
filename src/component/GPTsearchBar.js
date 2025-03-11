import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstant";
import { useRef } from "react";
import MovieSuggestions from "./MovieSuggestions";
import client from "../utils/openAI";
import { option_URL } from "../utils/constant";
import { addMovies } from "../utils/gptSlice";
const GPTsearchBar = () => {
  
  const language=useSelector((store)=>store.config.language);
  
  
  const dispatch=useDispatch();
  const searchGPTvalue=useRef(null);
  const getMovieMDB=async(movie)=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=" ${movie}&include_adult=false&language=en-US&page=1`,option_URL);
    const json=await data.json();
    return json.results;
  }
  


  const handleGptSearch=async ()=>{
    console.log(searchGPTvalue.current.value);
    const movieName=searchGPTvalue.current.value.split(",");
    
    
    //when open ai is not working when i will get the free version i will do it for i now i will do the jugaad

    // const chatCompletion = await client.chat.completions.create({
    //  const gptquery="act as a movie recommendation system and recommend some movie"+searchGPTvalue.current.value+"only gives five movies the movies should be like the given example e.g gadar, golmaal,hera-pheri"
    //   messages: [{ role: 'user', content: gptquery }],
    //   model: 'gpt-4o',
    // });
    // console.log(chatCompletion.choices)
    const promiseArray=movieName.map((movie)=>(getMovieMDB(movie)))
    const tmdbResults=await Promise.all(promiseArray);
  
    dispatch(addMovies
      ({
        movies:movieName,
        mdbMovies:tmdbResults,
    })
  )
  
  

 
      
   
  }
 
  
  return (
    <div className="absolute  top-32 sm:top-24 left-0 w-full flex justify-center ">
      <form className="bg-black bg-opacity-80 p-4 rounded-lg flex" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchGPTvalue} className="p-2 w-64 rounded-md outline-none" 
          placeholder={lang[language].placeholder} />
        <button onClick={handleGptSearch} className="ml-2 p-2 bg-red-600 text-white rounded-md">{lang[language].search}</button>
      </form>
     
    </div>
  )
}

export default GPTsearchBar;
