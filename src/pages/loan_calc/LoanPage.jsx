import { useDispatch, useSelector } from "react-redux"
import { calcInterest,interestBy } from "./LoanPageSlice"


export default function LoanPage(){

    const count =  useSelector((state) =>  state.counter.count)
    const principleAmount = useSelector((state)=>state.loanData.principleAmount)
    const interestRate = useSelector((state)=>state.loanData.interestRate)
    const dispatch = useDispatch()
    return <div>
        <h2>Loanpage</h2>
        <p>Previous Counter : {count}</p>
        <p>principalAmt : {principleAmount}</p>
        <p>Interest Rate : {interestRate}</p>
        <button onClick={()=>dispatch(calcInterest)}>calc interest</button>
        <button onClick={()=>dispatch(interestBy({"percentage":9}))}>calc interest by 9 percentage</button>
    </div>
}