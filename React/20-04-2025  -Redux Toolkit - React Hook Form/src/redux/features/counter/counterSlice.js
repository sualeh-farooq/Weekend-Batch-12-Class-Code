import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 100
}


export const counterSlice = createSlice({
    name:  'counter',
    initialState  ,
    reducers: {
        incrementCount: (state) => {
                state.count += 1
        },
        decrementCount: (state) => {
            state.count -= 1
    }
    } 
})

export const {incrementCount  , decrementCount} = counterSlice.actions

export default counterSlice.reducer