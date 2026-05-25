import { useEffect, useState } from "react";

export default function useFetch(url){
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState(null)
    const[error,setError]=useState(null)
    useEffect(()=>{
        const apicall=async()=>{
            try{
                let response = await fetch(url)
                let responseData=await response.json()
                console.log("responseData====>",responseData)
                setData(responseData)
            }
            catch(error){
                setError(error?.message)
            }
            finally{
                setLoading(false)
            }
        }
        apicall()
    },[url])
    return {
        loading,
        data,
        error
    }
}