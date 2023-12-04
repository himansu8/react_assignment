import Joke from "./Joke";
function JokesApp(props) {
    return (
        <>
            <Joke jokes={props.jokes} />
            <button onClick={props.fetchjokes}>New Joke</button>
        </>
    )
}
export default JokesApp;