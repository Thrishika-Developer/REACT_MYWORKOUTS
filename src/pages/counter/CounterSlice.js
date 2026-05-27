import { createSlice } from "@reduxjs/toolkit"


export const CounterSlice = createSlice({
    name:"Counter_app",
    initialState : {
        count : 0
    },
    reducers : {
        addition : (state,action)=>{state.count+=1},
        subraction : (state,action)=>{state.count-=1},
        multiplication : (state,action)=>{state.count*=2}  
}

})
export const {
    addition,
    subraction,
    multiplication
} = CounterSlice.actions
export default CounterSlice.reducer;