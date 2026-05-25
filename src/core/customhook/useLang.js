import { useEffect, useState } from "react";
import tamilLang from '../lang/tamil.json'
import enLang from '../lang/en.json'

export default function useLang(langType ='en'){
    const[content,setContent]=useState(langType)
    useEffect(()=>{
        if(langType=='tamil'){
            setContent(tamilLang)
        }
        else{
            setContent(enLang)
        }
    },[langType])
    return content
}