import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Calc = () => {
    
    var [count,setCounter]=useState(0)

    var submithandler1=()=>{
        setCounter(count+1)
    }
    var submithandler2=()=>{
        setCounter(count-1)
    }


  return (
    <div>
        <h2>counter</h2>
    <Typography variant='h6'>number {count}</Typography>
         <Button variant='contained'onClick={submithandler1}>+</Button>
         <Button variant="contained" onClick={submithandler2}>-</Button>
    </div>
  )
}


export default Calc