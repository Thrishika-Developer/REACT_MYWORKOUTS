import Child from "./Child";
// export default function Parent() {
//   return (
//     <div>
//       <h1>I am a parent component</h1>
//       <Child
//         StudentName={"thrishika"}
//         StudentAge={21}
//         StudentClassType={"state"}
//         StudentLocation={"kanniyakumari"}
//       />
//     </div>
//   );
// }

//js variable with props

export default function Parent() {
  const studentName = "thrishika";
  const studentAge = 21;
  const studentClassType = "state";
  const studentLocation = "kanniyakumari";
  const studentSkillSet = ["React", "Angular", "NodeJS", "Java"];
  const academicResult = {
    "firstSem": "pass",
    "secondSem": "Fail",
    "thirdSem": "pass",
  };

  return (
    <div>
      <h1>I am a parent component</h1>
      <hr/>
      <Child
        //Direct state value

        StudentName={studentName}
        StudentAge={studentAge}
        StudentClassType={studentClassType}
        StudentLocation={studentLocation}
        StudentSkillSet={studentSkillSet}
        AcademicResult={academicResult}

        // StudentName={"thrishika"}
        // StudentAge={21}
        // StudentClassType={"state"}
        // StudentLocation={"kanniyakumari"}
      />
    </div>
  );
}
