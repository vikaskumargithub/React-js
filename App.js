import logo from './logo.svg';
import './App.css';
import User from './User';

let data= "HEN";
function App() {
  function apple()
  {
    data="HELLO"
    alert("function called")
  }
  return (
    <div className='App'>
      <h1>Hello word</h1>
      <button onClick={apple} >Click  me</button>
      <User />
    </div>
    
  );
}


export default App;
