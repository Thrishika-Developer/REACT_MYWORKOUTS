// export default function Props01(){

//     return <User name ="thrishika" role="Developer"/>
// }
// const User = (props)=>{
//     return <h3>{props.name}-{props.role}</h3>
// }

//Props Destructuring
// export default function Props01(){

//     return <User name ="thrishika" role="Developer"/>
// }
// const User = ({name,role})=>{
//     return <h3>{name}-{role}</h3>
// }

//Passing fuctions as props
// export default function Props01(){

//      const handleClick=()=>{
//         alert("clicked!")
//      }
//     return <Child pressButton= {handleClick}/>    
// }
// const  child =({pressButton})=>{
//     return <button onClick={pressButton}>click</button>
// }