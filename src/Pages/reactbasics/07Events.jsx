export default function Events() {
  const Clicked = () => {
    console.log("button is clicked");
  };
  const Changed = (event) => {
    console.log("typed text==>", event.target.value);
  };

  return (
    <div>
      <h1>
        <u>Events</u>
      </h1>

      <div>
        <h2>
          <u>Before short cut</u>
        </h2>
        <input type="text" onChange={Changed} />
        <button onClick={Clicked}>Click me</button>
      </div>
      <div>
        <h2>
          <u>After short cut</u>
        </h2>
        <input
          type="text"
          onChange={(event) => console.log("typed text==>", event.target.value)}
        />
        <button onClick={() => console.log("button action is triggered")}>
          click me
        </button>
      </div>
    </div>
  );
}
