
//Rendering List using map()
// export default function ReactList(){
//     const fruits = ["apple","banana","mango"]
//     return (
//         <ul>{fruits.map((fruits)=><li>{fruits}</li>)}</ul>
//     )
// }

//using Key
// export default function ReactLists(){
//   const fruits =["apple","banana","mango"]

//   return(
//     <ul>{fruits.map((fruit,index)=>{
//       <li key={index}>{fruit}</li>
//     })}</ul>
//   )
// }

//Dynamic
export default function ReactLists() {
  const users = [
    {
      name: "thrihika",
      id: 1,
      course: "react"
    }
  ];

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

