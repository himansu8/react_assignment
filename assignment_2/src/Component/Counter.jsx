import { useState } from "react";

function Counter(){
    const [Count, setCount] = useState(0)
    function incrementHandler(){
        setCount(Count + 1 )
    }

    return(
        <>
        <center>
        <p>Count : {Count}</p>
        <button onClick={incrementHandler}>Increment</button>
        </center>
      </>
    )
}
export default Counter;