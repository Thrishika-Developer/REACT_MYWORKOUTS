import React from "react";

export default function KeyFeatures() {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div>
      <h1><u>KeyFeatures Example</u></h1>
      {clicked ? (
        <h1>Hello World</h1>
      ) : (
        <button onClick={() => setClicked(true)}>
          Click me
        </button>
      )}
      <hr/>
    </div>
   
  );
}
