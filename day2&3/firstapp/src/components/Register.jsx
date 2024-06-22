import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br></br>
        <h3><u>Login</u></h3>
        <TextField id="outlined-basic" label="username" variant="outlined" /><br></br>
        <br></br>
        <TextField id="outlined-basic" label="password" variant="outlined" /> <br/><br/>
        <Button variant="contained">SUBMIT</Button>

       
    </div>
  )
}

export default Register