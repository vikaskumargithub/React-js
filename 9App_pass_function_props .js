import './App.css';
import User from './User'
import Member from './Member'

function App() {
  function getData() {
    alert("Hello from app")
  }
  return (
    <div className='App'>
      <h1>Pass function as a props !</h1>
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <div>
        <Member data={getData}/>
      </div>
    </div>
  );
}

export default App;