import { useState } from "react";

export default function ContactList(){
    const[contacts,setContacts]=useState([]);
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");

    const addContact =()=>{
        if(!name || !phone){
            alert("please enter both name and phone!");
            return;
        }
        setContacts([...contacts,{id:Date.now(),name,phone}])
        setName("");
        setPhone("");
    }
    const deletecontact=(id)=>{
        setContacts(contacts.filter((c)=>c.id!==id))
    }
    return (
        <div>
            <h2>Contacts</h2>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name..."/>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone..."/>
            <button onClick={addContact}>Add contacts</button>

            <p>Total Contacts: {contacts.length}</p>

            {contacts.length===0 && <p>No contacts yet - add one above!</p>}
            <ul>{contacts.map((c)=>(
                <li key={c.id}>{c.name}-{c.phone}
                <button onClick={()=>deletecontact(c.id)}>Delete</button></li>))}</ul>
        </div>
    )

}