// Use Effect With specific state and props .
// What is use Effect with?
// Use Effect with specific state.
// use Effect with speific props.






import './App.css';
import React, {useEffect, useState} from 'react'

function App(props) {
  useEffect(()=>{
    // console.log("useEffect")
    alert("count. is " +props.count)
  },[props.count,props.data])


  return (
    <div className='App'>
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>

    </div>
  );
}

export default App;