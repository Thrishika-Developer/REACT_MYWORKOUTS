import { useState } from "react";
export default function DemoPage2(){
    const[candidateName,setCandidateName]=useState("thrishika")
    const[candidateDepositAmt,setCandidateDepositAmt]=useState(10000.28852888)
    const[returnAmount,SetReturnAmount]=useState(candidateDepositAmt-6000)
    const[mensCount,setMensCount]=useState(100000)
    const[femalesCount,setFemalesCount]=useState(25000)

    const handleUpdate =()=>{
        setCandidateName("thrisha")
        setCandidateDepositAmt(prevstate=>prevstate+200000)
        setCandidateDepositAmt(candidateDepositAmt+20000)
        SetReturnAmount(candidateDepositAmt-700)
        setMensCount(500000)
        setFemalesCount(12)
    }
    return <div>
        <p>Election Naminated Candidate:{candidateName.toUpperCase}</p>
        <p>Deposite Election Amount : {candidateDepositAmt.toFixed(2)}</p>
        <p>After Election get Return Amount : {returnAmount.toFixed(2)}</p>
        <p>People population:{mensCount+femalesCount}</p>

        <div>
            <button onClick={handleUpdate}>Update Information</button>
        </div>
    </div>
}