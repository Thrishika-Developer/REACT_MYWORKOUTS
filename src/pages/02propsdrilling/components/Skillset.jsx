import React from "react";
export default function Skillset({ academicResult, studentSkillSet }) {
  const { firstSem, secondSem, thirdSem } = academicResult;

  return (
    <div>
      <h5>Students Skills</h5>
      <div>
        {studentSkillSet.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <p>{value}</p>
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <h5>Academic Result</h5>
        <p>firstSem:{firstSem}</p>
        <p>secondSem: {secondSem}</p>
        <p>thirdSem: {thirdSem}</p>
      </div>
    </div>
  );
}
