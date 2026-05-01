 export default function Child(
    { StudentName, StudentAge, StudentLocation }) {
  // console.log(Props)

  return (
    <div>
      <h1>I am a parent component</h1>
      {/* <p>StudentName : {Props?.StudentName}</p>
            <p>StudentAge : {Props?.StudentAge}</p>
                <p>StudentLocation : {Props?.StudentLocation}</p> */}

      <p>StudentName : {StudentName}</p>
      <p>StudentAge : {StudentAge}</p>
      <p>StudentLocation : {StudentLocation}</p>
    </div>
  );
}
