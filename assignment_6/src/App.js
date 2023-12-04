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
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=1'
    axios.get(url)
      .then((res) => {
        console.log(res.data.category)
        setJokes(res.data.joke)

      })
      .catch((err) => {
        console.log(err)
      })

  }
  function fetchProgjokes() {
    const url = 'https://v2.jokeapi.dev/joke/programming?type=single&amount=1'
    axios.get(url)
      .then((res) => {
        console.log(res.data.category)
        setJokes(res.data.joke)

      })
      .catch((err) => {
        console.log(err)
      })

  }function fetchPunjokes() {
    const url = 'https://v2.jokeapi.dev/joke/pun?type=single&amount=1'
    axios.get(url)
      .then((res) => {
        console.log(res.data.category)
        setJokes(res.data.joke)

      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <>
      <JokesApp jokes={jokes} fetchjokes={fetchjokes} fetchProgjokes={fetchProgjokes} fetchPunjokes={fetchPunjokes}/>
      {/* <JokesApp2 jokes={jokes} fetchjokes={fetchjokes} /> */}

    </>
  )
}
export default App;
