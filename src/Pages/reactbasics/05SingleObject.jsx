export default function SingleObject() {
  const employee = {
    name: "thrishika",
    age: 21,
    studied: "ACET",
    location: "Nagercoil",
  };

  return (
    <div>
      <div className="employee-list">
        <h2>
          <u>Single Object</u>
        </h2>
        <p>Employee Name : {employee?.name}</p>
        <p>Employee age : {employee?.age}</p>
        <p>Employee studied : {employee?.studied}</p>
        <p>Employee address : {employee?.adderess}</p>
      </div>
      <hr />
    </div>
  );
}
