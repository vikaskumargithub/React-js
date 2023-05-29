import React, {useState} from 'react';
import './App.css';
import Student from './student';
function App(){
  const [name, setName]=useState("vikas")
  return(
    <div className="App">
    <h1>Props in react :)</h1>
    <Student name={name} />
    <button onClick={()=>{setName("kumar")}} >Update Name</button>
    
    
    {/* <Student name={"vikas"} email="vikask@blog.com" other={{address:'Raipur' , mobile:'000'}} />
    <Student name={"aman"} email="amank@blog.com" other={{address:'Milki' , mobile:'111'}} />
    <Student name={"amar"} email="amark@blog.com" other={{address:'Indarpuri' , mobile:'222'}} /> */}



    </div>
  );
}
export default App;