//Not changable
// export default function DemoPage1(){
//     var candidateName ="thrishika"
//     const handleClick=()=>{
//         candidateName = "thrisha"

//     }

//     return(
//     <div>
//       <p>{candidateName}</p>
//       <button onClick={handleClick}>clickme</button>
//     </div>
// )
// }

//---------------------------------------------------------------------
//change value using use state

// import { useState } from "react";
// export default function DemoPage1(){

//     var [candidateName,setCandidateName]=useState("thrishika")
//     const handleClick=()=>{
//             setCandidateName("thrisha")
//     }
    
//     return (
//     <div>
//         <p>CandidateName : {candidateName}</p>
//         <button onClick={handleClick}>Change Name</button>
//     </div>
//     )
// }
//----------------------------------------------------------------------
// import { useState } from "react";
// export default function DemoPage1(){

//     const [candidateName,setCandidateName]=useState("thrishika")
//     const [candidateAge,setCandidateAge]=useState(21)

//     return <div>
//         <p>CandidateName : {candidateName}</p>
//         <button onClick={()=>setCandidateName("thrisha")}>Change Name</button>

//         <p>CandidateAge :{candidateAge}</p>
//         <button onClick={()=>setCandidateAge(22)}>Change Age</button>
//     </div>
// }
//--------------------------------------------------------------------------
import { useState } from "react";
export default function DemoPage1(){

    const [candidateName,setCandidateName]=useState("thrishika")
    const[candidateAge,setCandidateAge]=useState(21)
    const[candidateScore,setCandidateScore]=useState(0)

    return <div>
        <p>CandidateName :{candidateName}</p>
        <button onClick={()=>setCandidateName("thrisha")}>ChangeName</button>

        <p>CandidateAge :{candidateAge}</p>
        <button onClick={()=>setCandidateAge(22)}>ChangeAge</button>

        <p>CandidateScore:{candidateScore}</p>
        {/* <button onClick={()=>setCandidateScore(candidateScore+1)}>Change Score</button> */}
        <button onClick={()=>setCandidateScore(prevstate=>prevstate+1)}>Change Score</button>
    </div>
}