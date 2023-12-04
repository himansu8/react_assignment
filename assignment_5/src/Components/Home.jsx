import { Link } from "react-router-dom";

function Home(){
    return (
        <>
                <h1>THS home</h1>
                <Link to="/about">about</Link>
                <br/>
                <a href="/about">about a tag</a>
        </>
    )
}
export default Home;