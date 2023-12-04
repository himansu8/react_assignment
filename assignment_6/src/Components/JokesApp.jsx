import Joke from "./Joke";
function JokesApp(props) {
    return (
        <>
            <Joke jokes={props.jokes} />
            <button onClick={props.fetchjokes}>All Type Joke</button>
            <button onClick={props.fetchProgjokes}>Programming Joke</button>
            <button onClick={props.fetchPunjokes}>Pun Joke</button>


        </>
    )
}
export default JokesApp;