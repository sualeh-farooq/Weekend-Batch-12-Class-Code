import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    count : 0 ,
    name: 'Saylani'
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        incrementCount: (state) => {
                state.count += 1
        },
        decrementCount: (state) => {
            state.count -= 1
        }, 
        updateByNumber: (state , action) => {
            state.count += +action.payload
        }
    }
})

export const {incrementCount , decrementCount , updateByNumber} = counterSlice.actions

export default counterSlice.reducer