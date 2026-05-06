//reusable component
// export default function ReuableComponent(){
//     return <button>
//         click me</button>
// }
//reusable component
export default function ReuableComponent(props){
    return <button>
        {props.text}
    </button>
}