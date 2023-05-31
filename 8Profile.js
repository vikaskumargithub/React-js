import { useState } from "react"
import React from 'react'
function Profile()

{
    const [loggedIn,setLoggedin]=useState(2)
    
    return(
        <div>
            {loggedIn==1?
            <h1>Welcome vikas1</h1>
            :loggedIn==2?<h1>Welcome Guest2</h1>
            :<h1>Welcome user3</h1>}
        </div>
    )
}

export default Profile;