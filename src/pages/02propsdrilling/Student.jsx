import AdditionalInfo from "./components/AdditionalInfo";
export default function Student() {
  const studentName = "thrishika";
  const studentAge = 21;
  const studentClassType = "CBSE";
  const studentLocation = "thuckaly";
  const studentSkillSet = ["React", "Angular", "Node.js", "Java"];
  const academicResult = {
    firstSem: "pass",
    secondSem: "Fail",
    thirdSem: "pass",
  };

  return(
  <div>
    <h3> Welcome to GHSS school</h3>
    <h5> Our Top performer Student </h5>
    <p>Student name is : {studentName}</p>
  
    <AdditionalInfo
      studentAge={studentAge}
      studentClassType={studentClassType}
      studentLocation={studentLocation}
      studentSkillSet={studentSkillSet}
      academicResult={academicResult}
    />
  </div>
  )
  
}
