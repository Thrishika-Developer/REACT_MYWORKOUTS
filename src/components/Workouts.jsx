export default function Workouts(){
    const User = (props)=>{
        return <h3> {props.name}-{props.role}</h3>
    }
    const UserDestruct = ({name,role})=>{
        return <h3>{name}-{role} </h3>
    }

    const UserData =({name,age,isAdmin})=>{
        return <h3>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Admin : {isAdmin ? "yes" : "No"} </p>
        </h3>
    }

    const Card= ({user})=>{
        return (
        <div>
        <p>Name: {user.name}</p>
        <p>Role : {user.role}</p>
        </div>
        )
         
    }

    const Child = ({pressButton} )=> {
        return <button onClick={pressButton}>Click me</button>
    }
    const Parent =()=>{
        const handleClick =()=>{
            alert("Button is clicked")
        }
        return <Child pressButton={handleClick}/>
    }

  
    return <div>
        <p>Basic props</p>
        <User name="thrishika" role="developer"/>

        <p>Destructuring props</p>
        <UserDestruct name="thrishika" role ="develop"/>

        <p>Different types of props</p>
        <UserData name ="thrisha" age={21} isAdmin={true}/>
        
        <p> <b>Object as prop</b></p>
        <Card user={{name: "thrishika",role:"Developer"}}/>

        <p><b>Function as prop</b></p>
        <Parent/>
    </div>
}