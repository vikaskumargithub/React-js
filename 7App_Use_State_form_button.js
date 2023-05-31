// Make a HTML form
// Add some field 
// use state for field data . 
// Submit and control form


import './App.css';
// import React from 'react'
import {useState} from 'react'
function App() {
  const[name,setName]=useState("");
  const [tnc , setTnc]=useState(false);
  const [interest, setInterest]=useState("");
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
  return(
    <div className="App">
      
        <h1>Handle From in React</h1>
        <form onSubmit={getFormData}>
          <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />  <br/><br/>
          <select onChange={(e)=>setInterest(e.target.value)} >
            <option>Select Options</option>
            <option>Marvel</option>
            <option>DC</option>
          </select> <br></br>
          <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span> <br></br>
          <button type='submit'>Submit</button>
        </form>
      

    </div>
  );
}
export default App;