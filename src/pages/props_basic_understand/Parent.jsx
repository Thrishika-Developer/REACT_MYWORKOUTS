import Child from "./Child";
export default function Parent() {
  return (
    <div>
      <h1>I am a parent component</h1>
      <Child
        StudentName={"thrishika"}
        StudentAge={21}
        StudentClassType={"state"}
        StudentLocation={"kanniyakumari"}
      />
    </div>
  );
}
