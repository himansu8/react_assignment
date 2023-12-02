import { useState, useEffect } from "react";
import axios from "axios";


function EffectAPI() {
    const [comments, setComments] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/comments'
    useEffect(() => {
        getAPI();
    }, [])
    function getAPI() {

        axios.get(url)
            .then((response) => {
                console.log(response.data)
                setComments(response.data)
            })
            .catch((error) => { console.log(error) })
    }
    return (
        <>
            <center>
                {comments.map(ele => {
                    return (

                        <>
                            <p>ID: {ele.id}</p>
                            <p>NAME:{ele.name}</p>
                            <p>EMAIL:{ele.email}</p>
                            <p>COMMENT:{ele.body}</p>
                            <hr />

                        </>
                    )
                })}
            </center>
        </>
    )
}
export default EffectAPI;