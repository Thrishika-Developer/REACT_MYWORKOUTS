import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/pages/counter/CounterSlice'

export const store = configureStore({
    reducer:{
        counter : counterReducer
        
    }
})