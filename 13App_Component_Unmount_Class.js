// Component will Unmount
// Life Cycle Method // Class_Component
// When Component will unmount called.
// Example of component will unmount.
// Use of component will unmount

import './App.css';
import React from 'react'
import Yellow from './Yellow';
class App extends React.Component{

  constructor()
  {
      super();
      this.state={
          show:true
      }
  }
  render(){
    return(
      <div className='App'>
        {/* <h1>Compontnt Will Unmount</h1> */}
        {
          this.state.show ? <Yellow />:<h1>Child component Removed</h1>
        }
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
      </div>
    )
  }
  
}

export default App;