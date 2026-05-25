import { useRef } from "react"

export default function UncontrolledForm(){

    const formRef = useRef()
    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log("FormRef====>",formRef)
        const username =formRef?.current[0]?.value;
        const password = formRef?.current[1]?.value;
        let payload ={
            "username":username,
            "password":password
        }
        console.log("payload====>",payload)
    }
    return <div>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <button type="submit"> Login</button>
            </div>

        </form>
    </div>
}