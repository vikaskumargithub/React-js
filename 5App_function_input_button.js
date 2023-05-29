// React js in make a input field. 
// Make a function and get value.
// Make button and state
// Get value on button

import './App.css';
import React , {useState}from 'react'

function App(){
  const [data, setData]=useState(null)
  const [print,setPrint]=useState(false)

  function getData(value)
  {
    console.warn(value.target.value)
    setData(value.target.value)
    setPrint(false)
  }
  return (
    <div className='App'>
      {
        print?
        <h1> {data} Get Input box value  !</h1>
        :null
      }
      <input type="text" onChange={getData}></input>
      <button onClick={()=>setPrint (true)} >Print Data</button>
    </div>
  )
}
export default App;