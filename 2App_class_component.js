// CLASS COMPONENT and USE STATE


import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 5
    }
  }
  apple()
  {
    // alert("apple")
    // this.setState({data:"kumar"})
    this.setState({data:this.state.data+1})
  }
  render() {
    return (
      <div className='App'>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
       </div>

    );
  }

}

export default App;
