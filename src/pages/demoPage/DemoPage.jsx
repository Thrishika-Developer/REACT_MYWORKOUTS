import { useEffect } from "react"
import useFetch from "../../core/customhook/useFetch"
import useRandom from "../../core/customhook/useRandom"
import useLang from "../../core/customhook/useLang"
export default function DemoPage(){

    const otp=useRandom()
    const{loading,data,error}=useFetch("https://fakestoreapi.com/users")
    const content = useLang('tamil')
    useEffect(()=>{
        console.log("content=====>",content)
    },[content])


    //loading state
    if(loading){
        return <h1>{content?.loading_lg}</h1>
    }
  
    // return <div>
    //     <p>otp:{otp}</p>
    // </div>

      //success state
      return (
        <div>
            <h1>{content.usersList_lg}</h1>
            {data.map((user)=>(
                <div key={user.id}>
                    <h3>{content?.name_lg}:{user.name.firstname}</h3>
                    <p>{content?.email_lg}:{user.email}</p>
                    <hr />
                    </div>

            ))}
        </div>
      )

}