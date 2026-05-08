//if else
// export default function ConditionalReasoning(isLoggedIn){

//     if(isLoggedIn){
//         return <h1>Welcome back!</h1>
//     }else{
//         return <h1>Please Login</h1>
//     }
// }

//Ternary Operator
// export default function ConditionalReasoning(isLoggedIn){
//     return (
//         <h1>{isLoggedIn?"welcome back!": "please Login"}</h1>
//     )
// }

//Logical AND(&&)
export default function ConditionalReasoning(hasMessage){
    return (
        <div>
            {hasMessage && <p>you have a new message</p>}
        </div>
    )
}