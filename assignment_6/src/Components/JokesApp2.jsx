import Joke2 from "./Joke2";
function JokesApp2(props) {
    return (
        <>
            <Joke2 jokes={props.jokes} />
            <button onClick={props.fetchjokes}>New Joke</button>
        </>
    )
}
export default JokesApp2;