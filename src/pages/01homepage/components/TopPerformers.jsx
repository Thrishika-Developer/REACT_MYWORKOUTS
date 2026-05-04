import React from "react"
import ChessImages from "../../../assets/profile/B_chessImge.jpg"
export default function TopPerformers(){
    

    const studentList =[
        {
            name :"thrishika",
            age : 21,
            academic : 2026,
            image :ChessImages,
        }
    ]
    return <div>
        <h1><u>TopPerformers</u></h1>
        {   
        
            studentList.map((values,key)=>{
                return <React.Fragment>
                    <div className="top-performers">
                    <img src={values?.image} width={100} height={100} />
                    <p>{values?.name}</p>
                    <p>{values.academic}</p>
                    <hr />
                    </div>

                </React.Fragment>
            })
        }
     
    </div>
}