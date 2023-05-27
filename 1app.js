import {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [data,setData]=useState(1)
  function updateData()
  {
    setData(data+1)
  }
  console.warn("_________________");
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={updateData} >update Data</button>
      {/* <User /> */}
    </div>
    
  );
}


export default App;