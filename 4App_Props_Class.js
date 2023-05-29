import './App.css';
import Student from './student'
import React from 'react'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Vikas"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Props !</h1>
        <Student name={this.state.name} email="test@78gmail.com">

        </Student>
        <button onClick={() => this.setState({ name: "Amar" })}>Update Name</button>
      </div>

    );
  }


}


export default App;