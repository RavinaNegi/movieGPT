import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice(
    {
        name:"config",
        initialState:{
            language:"en",
        },
        reducers:
        {
            addlanguage:(state,action)=>{
                state.language=action.payload;
            }
        }
    }
);
export const  {addlanguage}=configSlice.actions;
export default configSlice.reducer;