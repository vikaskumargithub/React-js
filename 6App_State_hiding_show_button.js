// Make a div or any other element.
// Make a State for hiding and show element .
// Make a buton and Update state on button click.

import './App.css';
import React from 'react'

function App(){
  const [status,setStatus]=React.useState(true)
  
  return (
    <div className='App'>
      {
        status? <h1>Hello world  !</h1>:null
      }
      <button onClick={()=>setStatus (false)} >Hide</button>
      <button onClick={()=>setStatus (true)} >Show</button>
      
      {/* <button onClick={()=>setStatus (!status)} >Toggle</button> */}
    </div>
  );
}
export default App;