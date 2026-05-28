import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/pages/counter/CounterSlice'
import loanPageReducer from "./pages/loan_calc/LoanPageSlice";
import productReducer from './pages/products/products.slice'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        loanData : loanPageReducer,
        products : productReducer
        
    }
})