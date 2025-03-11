import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice(
    {
        name:"gpt",
        initialState:{
            toggleValue:false,
            gptSearchMovies:{
                movies:null,
                mdbMovies:null,
            },
            searchStatus:false,
        },
        reducers:
        {
            addtoggle:(state)=>{
                state.toggleValue=!state.toggleValue;
            },
            addMovies:(state,action)=>{
                const {movies,mdbMovies}=action.payload;
                state.gptSearchMovies.movies=movies;
                state.gptSearchMovies.mdbMovies=mdbMovies;
                state.searchStatus=true;
            }
        }
    }
);
export const  {addtoggle,addMovies}=gptSlice.actions;
export default gptSlice.reducer;