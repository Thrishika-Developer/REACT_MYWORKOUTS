import { createSlice } from "@reduxjs/toolkit";

export const loanPageSlice = createSlice({
    name : "loan_app",
    initialState:{
        principleAmount : 1000,
        interestRate : 8
    },
    reducers : {
        calcInterest : (state,action)=>{
            state.principleAmount+=state.principleAmount*state.interestRate/100
        },
        interestBy : (state,action)=>{
           console.log("state==>",state.principleAmount,"action===>",action.payload)
           state.principleAmount+=state.principleAmount*action.payload.percentage/100
        }
    }
})
export const {calcInterest,interestBy}=loanPageSlice.actions
export default loanPageSlice.reducer