export default function Array() {
  const fruitsList = ["apple", "orange", "grapes", "pineapple", "lichi"];
  const vegetableList = ["bringal", "potato", "carrot", "ladesfinger"];
  return (
    <div>
      <h1>
        <u>Array Method</u>
      </h1>
      <div className="fruit-list">
        <h2>
          <u>fruits list</u>
        </h2>
        {fruitsList.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>

      <div className="vegetable-list">
        <h2>
          <u>Vegetable list</u>
        </h2>

        <nav>
          <ul>
            {vegetableList.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </nav>

        <hr />
      </div>
    </div>
  );
}
