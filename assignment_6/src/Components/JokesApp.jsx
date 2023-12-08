import Joke from "./Joke";
function JokesApp(props) {
    return (
        <>
            <Joke jokes={props.jokes} type={props.type} />
            <button onClick={()=>props.fetchjokes("Any", 'single')}>All Type Joke Single</button>
            <button onClick={()=>props.fetchjokes("Any", 'twopart')}>All Type Joke Twopart</button>
            <button onClick={()=>props.fetchjokes("Programming", 'single')}>Programming Joke Single</button>
            <button onClick={()=>props.fetchjokes("Programming", 'twopart')}>Programming Joke Twopart</button>
            <button onClick={()=>props.fetchjokes("Pun", 'single')}>Pun Joke Single</button>
            <button onClick={()=>props.fetchjokes("Pun", 'twopart')}>Pun Joke Twopart</button>


        </>
    )
}
export default JokesApp;