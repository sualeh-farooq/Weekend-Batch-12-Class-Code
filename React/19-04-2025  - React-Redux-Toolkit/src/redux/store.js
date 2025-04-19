import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../redux/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
        counter: CounterReducer
  },
})