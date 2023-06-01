import React from "react";
function Member(props) {
  return (
    <div>
      {/* <h1>{10/20}</h1> */}
      <h1>User component</h1>
      {/* <button onClick={()=>props.data()}>call data function</button> */}
      <button onClick={props.data}>call data function</button>
    </div>
  );
}

export default Member;