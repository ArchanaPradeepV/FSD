import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2><u>Sign Up</u></h2>
       
        <p>
            Username:<input type="text" id="name"></input><br /><br />
            Email:<input type="email" id="email"></input><br /><br />
            Password:<input type="password" id="pwd"></input><br /><br />

        </p>
        <input type="button"  value="Signup"></input>
        <br/>
    </div>
  )
}

export default Signup