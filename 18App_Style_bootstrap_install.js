// What is bootstrap
// install bootstrap
// Use and register bootstrap library 
// example with bootstrap  component 

// index.js me is link ko dalna hai
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from 'react'
import { Table } from 'react-bootstrap';



const App = () => {
  return (
    <div className='App'>
      <h1>Install Bootstrap</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default App






