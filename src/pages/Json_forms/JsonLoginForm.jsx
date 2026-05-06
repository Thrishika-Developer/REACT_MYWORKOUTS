import { useState } from "react";
import React from "react";
import FormFields from "../Json_forms/form_config/FormField.json"

export default function JsonLoginForm(){

    const [formState,setFormState]=useState()

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value

    setFormState({...formState,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("form state===>",formState)
    }


    return <div>
        <div className="title"><h3>Json Login Form</h3></div>
        <div>
            <form action="" onSubmit={handleSubmit}>
            {FormFields.map((value,index)=>{
                return <React.Fragment>
                        {(value.fieldType !=="button"|| value.fieldType !=="submit")?
                        <div>
                            <label htmlFor={value.fieldId}>{value.fieldLabel}</label>
                            <input type={value.fieldType} 
                                    name={value.fieldName}
                                    id={value.fieldId}
                                    onChange={handleChange}/>
                            {(value.fieldType =="checkbox")&&(<label>{value.fieldCheckBoxLabel}</label>)}
                        </div>
                        :
                        <div>
                            <button type={value.fieldId} disabled={!formState.username || !formState.password }>{value.buttonText}</button>
                        </div>
                        }
        
                </React.Fragment>
            })}
            </form>
        </div>
    </div>

}