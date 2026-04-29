import React from "react";

export default function MUltipleObject() {
  const employee = [
    {
      name: "thrishika",
      age: 21,
      studied: "ACET",
      location: "thuckalay",
    },
    {
      name: "aslin",
      age: 20,
      studied: "amrita",
      location: "Nagercoil",
    },
    {
      name: "thrishika",
      age: 21,
      studied: "ACET",
      location: "thuckalay",
    },
  ];

  return (
    <div>
      <div className="employee-details">
        <h1>
          <u>Multiple Object</u>
        </h1>
        {employee.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <h2>Employee Details</h2>
              <p>Employee Name : {value?.name}</p>
              <p>Employee age : {value?.age}</p>
              <p>Employee studied : {value?.studied}</p>
              <p>Employee address : {value?.adderess}</p>
            </React.Fragment>
          );
        })}
        <hr />
      </div>
    </div>
  );
}
