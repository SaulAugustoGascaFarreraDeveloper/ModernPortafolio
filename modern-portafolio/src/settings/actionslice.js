import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    darkmode: true,
    startmode: true,
    musicmode: true
}

export const Actionslice = createSlice({
    name:"actionslice",
    initialState,
    reducers:{
        darkmodeEngin: (state,action) => {
            state.darkmode = action.payload
        },
        startmodeEngin: (state,action) => {
            state.darkmode = action.payload
        },
        musicmodeEngin: (state,action) => {
            state.darkmode = action.payload
        },
    }

})

export const {darkmodeEngin,startmodeEngin,musicmodeEngin} = Actionslice.actions

export const darkmodeC = (state) => state.actionslice.darkmode
export const startmodeC = (state) => state.actionslice.startmode
export const musicmodeC = (state) => state.actionslice.musicmode

export default Actionslice.reducer