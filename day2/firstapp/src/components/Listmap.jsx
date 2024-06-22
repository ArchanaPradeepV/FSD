import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[input,setinput]=useState(["ict"])
    var[data,setdata]=useState("")

    const inputhandler=(e)=>{
    setdata(e.target.value)
    
    }
    const add=()=>{
        setinput([...input,data])
        console.log(input)
        setdata("")
    }
  return (
    <div>
        <br/>
        <TextField variant='outlined' label="enter your name" onChange={inputhandler} value={data}/><br></br>
        <Button variant='contained' onClick={add}>submit</Button>
        <ul>
        {input.map((v,i)=>{
            return<li>{v}</li>
            
        })}
        </ul>
    </div>
  )
}

export default Listmap