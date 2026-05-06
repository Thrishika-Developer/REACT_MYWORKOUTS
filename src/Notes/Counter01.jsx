//Count
// import { useState } from "react";

// import { useState } from "react";

// export default function Counter01(){
//     const[count,setCount]=useState(0)
//     return <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count + 1)}>Increase</button>
//     </div>
// }

//Input field
import { useState } from "react";
export default function Counter01() {
  const [name, setName] = useState();
  return (
  <div>
    <label htmlFor="">Username</label>
    <input type="text" onChange={(event) => setName(event.target.value)} />

    <h3>yor name is: {name}</h3>
  </div>
  )
}