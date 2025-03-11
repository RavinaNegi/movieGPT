import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
{
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailerVideo:null,
        popularMovies:null,
       
    },
    reducers:{
            addMovies:(state,action)=>{
                state.nowPlayingMovie=action.payload;
            },
            addTrailer:(state,action)=>{
                state.trailerVideo=action.payload;

            },
            addPopular:(state,action)=>{
                state.popularMovies=action.payload;
            },

},
}
);

export default movieSlice.reducer;
export const {addMovies,addTrailer,addPopular}= movieSlice.actions;














