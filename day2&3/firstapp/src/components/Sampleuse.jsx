import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sampleuse = () => {
    var[x,setx]=useState()
    const  input1 = ()=>{
        setx("react")
     }
     const input2 = ()=>{
        setx("angular")
     }
     const input3 = ()=>{
         setx("view")
        }
    useEffect(()=>{
        input2();
     },[])
     
  return (
    <div>
        <Typography variant='h6'>welcome to {x}</Typography>
        <Button variant='contained'color="primary" onClick={input1}>React</Button>
        <Button variant='contained'color="primary" onClick={input2}>angular</Button>
        <Button variant='contained'color="primary" onClick={input3}>next</Button>
    </div>
  )
}

export default Sampleuse