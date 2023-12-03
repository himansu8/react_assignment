import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import axios from 'axios';


function App() {
  const [jokes,setJokes]=useState([])
useEffect(()=>{
fetchjokes()
},[])
function fetchjokes(){
  const url ='https://v2.jokeapi.dev/joke/Any?type=single&amount=10'
  axios.get(url)
  .then((res)=>{
    //console.log(res.data)
    setJokes(res.data)
    
  })
  .catch((err)=>{
    console.log(err)
  })

}




  return (
    <>
    
    </>
  )
<>
{/* <Routes>
  <Route path='/' element={<Home jokes={jokes}/>} />
</Routes> */}
{Object.values(jokes)}
{Object.values(jokes).map((value, index) =>{
  return(
    (
      <p>key={index}{value}</p>
  )

  )
  );
}
</>
export default App;
