import './App.css';
import { useEffect, useState } from 'react';
import JokesApp from './Components/JokesApp';
import JokesApp2 from './Components/JokesApp2';
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([])
  const [type, setType] = useState('')
  useEffect(() => {
    fetchjokes("Any", "single")
  }, [])
  function fetchjokes(category, type) {
    const url = `https://v2.jokeapi.dev/joke/${category}?type=${type}&amount=1`

    if (type == "single") {
      axios.get(url)
        .then((res) => {
          //console.log(res.data.category)
          setJokes(res.data.joke)
          setType('')

        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      axios.get(url)
        .then((res) => {
         // console.log(res.data.category)
          setJokes(res.data.setup)
          setType(res.data.delivery)

        })
        .catch((err) => {
          console.log(err)
        })
    }


  }

  return (
    <>
      <JokesApp jokes={jokes} type={type} fetchjokes={fetchjokes} />
      {/* <JokesApp2 jokes={jokes} fetchjokes={fetchjokes} /> */}

    </>
  )
}
export default App;
