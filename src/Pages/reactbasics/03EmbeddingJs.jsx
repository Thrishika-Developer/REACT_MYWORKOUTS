//Embedding Javascript
export default function EmbeddingJs() {
  const candidateName = "thrishika";
  const candidateDepositAmt = 100000.25789;
  const returnAmt = candidateDepositAmt - 6000;
  const mens = 100000;
  const females = 25000;
  //-------------------------------------------------------------------------------------
  const name = "arun";
  const age = "20";
  const isLoggedIn = true;
  const user = "Ravi";

  return (
    <div>
      <h1>
        <u>Embedding Javascript</u>
      </h1>
      <p>Election Naminated Candidate - {candidateName.toUpperCase()} </p>
      <p>Deposit Election Amount - {candidateDepositAmt.toFixed(2)}</p>
      <p>After Election get retun Amount - {returnAmt.toFixed(1)}</p>
      <p>Election comission name - {"Tamilnadu"}</p>
      <p>people Popultion : {mens + females} </p>
      <br />
      --------------------------------------------------------------------
      <h2>
        <u>Basic Example</u>
      </h2>
      <h1>Hello {name}</h1>

      <h2>
        <u>Variables</u>
      </h2>
      <p>Age : {age}</p>

      <h2>
        <u>Calcultions</u>
      </h2>
      <p>{5 + 5}</p>
      
      <h2>
        <u>Expressions</u>
      </h2>
      <h2>{isLoggedIn ? "welcome" : "please Login"}</h2>

      <h2>
        <u>Length measure</u>
      </h2>
      <h2>Hello{user}</h2>
      <p>{user.length}letters</p>
      <hr />
    </div>
  );
}
