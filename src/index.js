import React from "react";
import ReactDOM from "react-dom/client";
// import HomePage from './pages/01homepage/HomePage';
// import Parent from './pages/props_basic_understand/Parent';

export default function Parent() {
  const StudentName = "thrishika";
  const StudentAge = 21;
  const StudentClassType = "state";
  const StudentLocation = "kanniyakumari";
  const StudentSkillSet = ["React", "Angular", "NodeJS", "Java"];
  const AcademicResult = {
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

        StudentName={StudentName}
        StudentAge={StudentAge}
        StudentClassType={StudentClassType}
        StudentLocation={StudentLocation}
        StudentSkillSet={StudentSkillSet}
        AcademicResult={AcademicResult}

        // StudentName={"thrishika"}
        // StudentAge={21}
        // StudentClassType={"state"}
        // StudentLocation={"kanniyakumari"}
      />
    </div>
  );
}

function Child({
  StudentName,
  StudentAge,
  StudentClassType,
  StudentLocation,
  StudentSkillSet,
  AcademicResult,
}) {
  // Destructuring object
  // { StudentName, StudentAge, StudentLocation,AcademicResult }

  console.log("AcademicResult========>", AcademicResult,"Skillset============>",StudentSkillSet);

  const{firstSem,secondSem,thirdSem} = AcademicResult
// console.log(Props)

return (
  <div>
    <h1>I am a parent component</h1>
    {/* Props using calling */}
    {/* <p>StudentName : {Props?.StudentName}</p> 
            <p>StudentAge : {Props?.StudentAge}</p>
                <p>StudentLocation : {Props?.StudentLocation}</p> */}

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <Parent />
  </React.StrictMode>,
);
