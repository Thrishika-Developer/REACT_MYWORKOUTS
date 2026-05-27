import { useSelector,useDispatch } from "react-redux"
import {addition,subraction,multiplication} from '../counter/CounterSlice'

export default function CounterPage(){
    const count = useSelector((state)=>state?.counter?.count)
    const dispatch = useDispatch()

   
    return <div>
        <h2>Counter Page</h2>
        <p>
            count : {count}
        </p>
        <button onClick={()=>dispatch(addition())}>Add</button>
            <button onClick={()=>dispatch(subraction())}>Sub
            </button >
                <button onClick={()=>dispatch(multiplication())}>Mul</button>
    </div>
}