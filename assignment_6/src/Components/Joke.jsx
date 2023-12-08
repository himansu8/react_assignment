function Joke(props){
    return (
        <>
        <h1 id="heading">JOKES</h1>
        <div id="display">
        <h1>{props.jokes}</h1>
        <h1>{props.type}</h1>
        </div>
        </>
    )
}
export default Joke;