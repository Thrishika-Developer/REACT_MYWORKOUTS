import Skillset from "./Skillset";
export default function AdditionalInfo(
    {
        studentName,
        studentAge,
        studentClassType,
        studentSkillSet,
        studentLocation,
        academicResult
    }

)
{
    return <div>
        <p>StudentAge : {studentAge}</p>
        <p>StudentLocation : {studentLocation}</p>
        <Skillset
        studentSkillSet={studentSkillSet}
        academicResult={academicResult}
        />
    </div>
      
}