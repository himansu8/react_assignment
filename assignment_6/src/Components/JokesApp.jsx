import Joke from "./Joke";
function JokesApp(props) {
    return (
        <>
            <Joke jokes={props.jokes} />
            <button onClick={()=>props.fetchjokes("Any")}>All Type Joke</button>
            <button onClick={()=>props.fetchjokes("Programming")}>Programming Joke</button>
            <button onClick={()=>props.fetchjokes("Pun")}>Pun Joke</button>


        </>
    )
}
export default JokesApp;