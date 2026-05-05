import { useState } from "react";
export default function DemoPage3(){
    const [fruitsList,setFruitsList]=useState(["apple","orange","mango","pineapple"])
    const[vegetableList,setVegetableList]=useState(["carrot","bringal","cabage","potato"])


    return <div>
        <p>FruitsList</p>
        {fruitsList.map((value,index)=><p key={index}>{value}</p>)}
        <button onClick={()=>setFruitsList([...fruitsList,"banana"])}>Add Fruits</button>

        <p>VegetableList</p>
        <nav>
            <ul>
                {vegetableList.map((value,index)=> <li key={index}>{value}</li>)}

            </ul>
        </nav>
        <button onClick={()=>setVegetableList([...vegetableList,"califlower"])}>Add Vegetable</button>
        
    </div>
}