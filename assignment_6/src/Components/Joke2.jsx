function Joke2(props) {
    console.log(props)
    return (
        <>
            {/* <h1>{props.jokes}</h1> */}
            {props.jokes.map((ele, index) => {
                return (
                    <div key={ele.id}>
                        <p>{index}</p>
                        <p>{ele.joke}</p>
                    </div>
                )
            })}
        </>
    )
}
export default Joke2;