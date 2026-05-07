//mounting
// import { render } from "@testing-library/react";
// import React from "react";
// export default class ReactComponent extends React.Component{

//     constructor(props){
//         super(props)
//         console.log("Constructor called")
//     }

//     componentDidMount(){
//         console.log("component mounted")
//     }

// render(){

//     console.log("render called");
//     return <h1>Hello React</h1>
// }
// }

//Updating

// import React from "react";
// export default class ReactComponent extends  React.Component{
//     constructor(props){
//         super(props)
//     }
//     state ={
//         count :0
//     }
//     componentDidUpdate(prevprops,prevstate){
//         if(prevstate.count !== this.state.count){
//             console.log("count updated")
//         }
//     }
//     increase=()=>{
//         this.setState({
//             count : this.state.count+1
//         })
//     }


//     render(){

    
//     return(
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.increase}> Increase</button>
//         </div>
//     )
// }
    
// }
//-----------------------------------------------------------
//unmounting Phase

// import React from "react";
// export default class ReactComponent extends  React.Component{
//     componentWillUnmount(){
//         console.log("component remove")
//     }
//     render(){
//         return (
//         <h1>Bye react</h1>
//         )
//     }
// }

//Use Effect
// import React from "react";
// import { useEffect } from "react";
 
// export default function ReactComponent(){
//     useEffect(()=>{
//         console.log("mounted")
  

//     return()=>{
//         console.log("unmount")
//     }
// },[])

// return <h1>Hello hooks</h1>
// }