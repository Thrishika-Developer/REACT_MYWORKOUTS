import React from "react"
export default class SimpleState extends React.Component{

    constructor(props){
        super(props)

        this.states= {
            applicationName : "this is sample React Project",
            employee :{
                name : "thrishika",
                location : "kaniyakumari",
                age : 21,
                course : "react"
            },
            nextEmployee : {
                name : "thrisha",
                location : "thuckalay",
                course : "Accountancy",
                age : 21
            }
        }
    }
    render(){
        return <div>
            <h1><u>SimpleState</u></h1>
            <h1>{this.states.applicationName}</h1>
            <div className="mentor-information">
                <h3>Employee :{this.states.employee.name}</h3>
                <p>Next Employee :{this.states.nextEmployee.name}</p>
            </div>
        <hr />
        </div>
    }
}