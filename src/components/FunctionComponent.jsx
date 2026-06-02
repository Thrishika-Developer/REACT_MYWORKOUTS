// export default  function FunctionComponent(){
//     return <div>
//         <h1>Hello from class components</h1>
//     </div>
// }

// export default function FunctionComponent(){
//     const name = "thrishika"

//     return <div>
//         <p>hello{name}</p>
//         <p>welcome to react world</p>
//     </div>
// }


export default function FunctionComponent(props){
    return <div>
        <p>props</p>
        <button>{props.text}</button>
        <button>{props.text}</button>

    </div>
}
