function Login(){
    return <button>Click me</button>
}
function Card(){
    return <div>
        I am a card
    </div>
}
function App(){
    return (
        <div>
            <Login/>
            <Login/>
            <Card/>
        </div>
    )
}
export default App;