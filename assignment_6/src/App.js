import './App.css';
import { useEffect, useState } from 'react';
import JokesApp from './Components/JokesApp';
import JokesApp2 from './Components/JokesApp2';
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    fetchjokes()
  }, [])
  function fetchjokes() {
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=10'
    axios.get(url)
      .then((res) => {
        console.log(res.data.jokes)
        setJokes(res.data.jokes)

      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <>
      {/* <JokesApp jokes={jokes} fetchjokes={fetchjokes} /> */}
      <JokesApp2 jokes={jokes} fetchjokes={fetchjokes} />

    </>
  )
}
export default App;
