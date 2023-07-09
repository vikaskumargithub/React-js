import React from 'react'
class Yellow extends React.Component{
    componentWillUnmount()
    {
    // alert("componentWillUnmount")
    console.warn("componentWillUnmount")
    }
  render(){
    return(
      <div className='App'>
        <h1>Compontnt Will Unmount</h1>
      </div>
    )
  } 
}

export default Yellow;