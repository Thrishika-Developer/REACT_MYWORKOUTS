import { useRef } from "react";
export default function SeachBox(){
    const searchRef = useRef();

    const handleSearch =()=>{
        alert("Searching for:"+searchRef.current.value)
    }

    return <div>
        <h2>Search</h2>
        <input ref={searchRef} placeholder="Search anything...." />
        <button onClick={handleSearch}>Search</button>
    </div>
}