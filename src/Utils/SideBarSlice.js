import { createSlice } from "@reduxjs/toolkit";

const SlideBarSlice=createSlice(
    {
        name:'SlideBarSlice',
        initialState:{
            visible:true
        },
        reducers:{
            changeVisible:(state)=>{
                state.visible=!state.visible;
            }
        }
    }
)

export const {changeVisible}=SlideBarSlice.actions;
export default SlideBarSlice.reducer;