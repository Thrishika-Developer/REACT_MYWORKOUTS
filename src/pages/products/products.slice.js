import { createSlice } from "@reduxjs/toolkit"
import { productsList } from "./api_thunk"
export const productSlide = createSlice({
    name : "product-app",
    initialState : {
        loading : false,
        error : null,
        prouduts : null
    },
    reducers :{},
    extraReducers: (builder)=>{
        builder
        .addCase(productsList.pending,(state) => {
            state.loading=true
        })
        .addCase(productsList.fulfilled,(state,action)=>{
            state.loading=false
            state.products = action.payload
        })
        .addCase(productsList.rejected,(state)=>{
            state.loading=false
            state.error = "something went wrong"
        })
    }
})
export default productSlide.reducer