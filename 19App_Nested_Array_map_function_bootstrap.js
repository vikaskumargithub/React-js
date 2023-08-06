// nested list with nested array
// Make a nested Array
// undestand Nested Array
// Use the map function 
// Use nested map function

// index.js me boostrap ka link paste krna hai
// import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';
import React from 'react'
import { Table } from 'react-bootstrap'
function App() {
  const users = [
    {
      name: 'Vikas', email: 'Vikas@test.com', address: [
        { hm: '10', city: 'rohats', country: 'India' },
        { hm: '20', city: 'sasaram', country: 'India' },
        { hm: '23', city: 'gaya', country: 'India' },
        { hm: '45', city: 'Dehri', country: 'India' },
      ]
    },
    {
      name: 'Amar', email: 'Amar@test.com', address: [
        { hm: '10', city: 'rohats', country: 'India' },
        { hm: '20', city: 'sasaram', country: 'India' },
        { hm: '23', city: 'gaya', country: 'India' },
        { hm: '45', city: 'Dehri', country: 'India' },
      ]
    },
    {
      name: 'Aman', email: 'Aman@test.com', address: [
        { hm: '10', city: 'rohats', country: 'India' },
        { hm: '20', city: 'sasaram', country: 'India' },
        { hm: '23', city: 'gaya', country: 'India' },
        { hm: '45', city: 'Dehri', country: 'India' },
      ]
    },
    {
      name: 'Rahul', email: 'Rahul@test.com', address: [
        { hm: '10', city: 'rohats', country: 'India' },
        { hm: '20', city: 'sasaram', country: 'India' },
        { hm: '23', city: 'gaya', country: 'India' },
        { hm: '45', city: 'Dehri', country: 'India' },
      ]
    },
  ]
  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table variant="primary"  >
        <tbody>
          <tr>
          <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
              {/*  */}
              <Table variant="purple"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              {/*  */}
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>

    </div>
  );
}

export default App;





