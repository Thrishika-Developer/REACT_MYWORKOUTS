//  export default function Child(
//     Props
    // using destructure
    // { StudentName, StudentAge, StudentLocation } 
    //) {
      // Props.StudentName = "kavin"  --read only
  // console.log(Props)

  // return (
  //   <div>
  //     <h1>I am a parent component</h1>
      //{/* using props */}

      {/* <p>StudentName : {Props?.StudentName}</p>
            <p>StudentAge : {Props?.StudentAge}</p>
                <p>StudentLocation : {Props?.StudentLocation}</p> */}

      {/* <p>StudentName : {StudentName}</p>
      <p>StudentAge : {StudentAge}</p>
      <p>StudentLocation : {StudentLocation}</p> */}
    //</div>
  //);
//}


//js variables with props


export default function Child(
{
  StudentName,
  StudentAge,
  StudentClassType,
  StudentLocation,
  StudentSkillSet,
  AcademicResult,
}) {

  //console.log("AcademicResult========>", AcademicResult , "Skillset============>",StudentSkillSet);

  const{firstSem,secondSem,thirdSem} = AcademicResult
// console.log(Props)

return (
  <div>
    <h1>I am a child component</h1>

    {/* Destructuring calling */}
      <p>StudentName : {StudentName}</p>
      <p>StudentAge : {StudentAge}</p>
      <p>StudentLocation : {StudentLocation}</p>
      <h3>AcademicResult:</h3>
      <p>{firstSem}</p>
      <p>{secondSem}</p>
      <p>{thirdSem}</p>

  </div>
);
}