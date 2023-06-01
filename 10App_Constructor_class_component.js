//  what is contructor
// why this is important
// What we can do in this life cycle
// with life cycle



import './App.css';
import React from 'react'
// import User from './User'

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:"vikas"
    }
  }
  render()
  {
   
    return(
      <h1>Hello World {this.state.data} </h1>
    )
  }
}
export default App;