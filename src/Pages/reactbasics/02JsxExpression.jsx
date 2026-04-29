
export default function JsxExpression() {

  const element = <h1>Hello</h1>

  return <div className="element">
    <h1><u>Jsx Expression</u></h1>
    {element}
    <h2>{5+5}</h2>
    <hr/>
  </div>
}

 