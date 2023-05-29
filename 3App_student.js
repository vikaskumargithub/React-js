function Student(props)
{
    console.warn(props)
    return(
        <div style={{    backgroundColor: "skyblue" , margin:10}} >
            <h1>function component</h1>
            <h1> Hello {props.name} </h1>
            
            
            {/* <h2>Email : {props.email}</h2>
            <h4>Address : {props.other.address} </h4> */}


        </div>
    )
}

export default Student;