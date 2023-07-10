// Use Effect in React js
// What is useEffect ?
// How to use useEffect?
// Exemple useEffect.
// useEffect with State and props .



import './App.css';
import React,{useEffect, useState} from 'react'

function App()  {
  const [count,setCount]=useState(0)
  useEffect(() =>{
    // alert("useEffect")
    console.log("useEffect")
  })
  return (
    <div className='App'>

      <h1>useEffect in React {count}</h1>
      <button onClick={()=>setCount(count+2)}> Update Counter</button>
    </div>
  );
}

export default App;