import { useState } from "react"
import foodList from '../assets/verity.json'
export default function FoodMenu(){

    const[selectedType,setSelectedType]=useState("");
    const[selectedCountry,setSelectedCountry]=useState("")
   
    const filteredFoods = foodList.filter((item)=>{
        const matchType = selectedType ==="" || item.foodType === selectedType;

    const matchedCountry = selectedCountry==="" || item.foodCountry === selectedCountry;
    return matchType && matchedCountry
    })


    return (
        <div>
            <h2><u>FOOD MENU LIST</u></h2>
            <div>
            <label htmlFor="">Select Type:</label>
            <select value={selectedType} onChange={(event)=>setSelectedType(event.target.value)}>
                <option value="">Select Type</option>
                <option value ="Veg">Vegetarian</option>
                <option value="Non-Veg">Non-vegetarian</option>
            </select>
            <p>Your selected Item is : {selectedType || "SelectType"}</p>
            </div>
            <label htmlFor="">your Selected Country:</label>
            <select value={selectedCountry} onChange={(event)=>setSelectedCountry(event.target.value)}>
                <option value="">Select Country</option>
                <option value="kerala">Kerala</option>
                <option value="Gujarat">Gujarat</option>
            </select>
            <p>Your selected country is : {selectedCountry || "Select Country"}</p>
            <div>
                <h3>Food Items List</h3>
                <ul>
                    {filteredFoods.map((item)=>(
                        <li key={item.id}>{item.foodName}</li>
                    ))}

                </ul>

            </div>
        </div>
    )

}