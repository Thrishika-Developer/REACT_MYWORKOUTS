import { useState,useRef} from "react"
export default function Controlled_Uncontrolled(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")

    const coverRef = useRef();

    const handleSubmit=()=>{
        if(name.length<3){
            alert("Name too short")
            return ;
        }
        if(!email.includes("@")){
            alert("Invalid Email!")
            return
        }
        const cover = coverRef.current.value;
        alert("submitter!\nName: "+ name + "\nEmail:" + email + "\nCover:" + cover)
    }
    return <div>

        {/* Controlled */}

        <h2>Job Applications</h2>
        <p>Name:{name}</p>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name..." />
        {name.length >0 && name.length < 3 && <p>Too short!</p>}

        <p>Email:{email}</p>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email..."/>
        {email.length > 0 && !email.includes("@") && <p>Missing @</p>}

        {/* uncontrolled */}
        <p>Cover letter :  </p>
        <textarea ref={coverRef} placeholder="Write cover letter..."></textarea>
        <div>
        <button onClick={handleSubmit}>Submit</button>
        </div>


    </div>
}