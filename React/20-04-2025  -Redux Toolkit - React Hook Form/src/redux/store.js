import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/features/counter/counterSlice'
import todoReducer from '../redux/features/todos/todosSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer ,
        todos: todoReducer
    }
})