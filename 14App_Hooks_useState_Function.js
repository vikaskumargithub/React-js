// With Hook , we can use class component features in functional components such as state , life cycle, pure components etc.
// What are hooks in react js . How to use them . 
// Example of React Hooks with usestate .


import './App.css';
import React,{useState} from 'react'

function App()  {
  const [data,setData]=useState("vikas")
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={()=>setData("kumar")}>Update Data</button>
    </div>
  );
}

export default App;