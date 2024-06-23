import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Data from './Data'

const Views = () =>{
    var[users,setUsers]=useState([])
    var[update,setUpdate]=useState(false)
    var[singleValue,setsingValue]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)

    })
        .catch((err)=>console.log(err))

    },[])
    const deleteValues=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+id)
        .then((response)=>{
            alert(response.data)
            window.location.reload(false)
        })
        .catch((err)=>console.log(err))
        }
        const updateValues=(val)=>{
            console.log("update")
            setUpdate(true)
            setsingValue(val)
        }


  
        var finalJSX=<TableContainer>
        <h2>Add employee form</h2>
        
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell >Employee name</TableCell>
                    <TableCell >Employee age</TableCell>
                    <TableCell >Employee position</TableCell>
                    <TableCell >Employee salary</TableCell>
                </TableRow>
            </TableHead>
            
            
                {users.map((val,i)=>{
                    return(

                     <TableRow>
                    <TableCell >{val.ename}</TableCell>
                    <TableCell >{val.eage}</TableCell>
                    <TableCell >{val.eposition}</TableCell>
                    <TableCell >{val.esalary}</TableCell>
                    <TableCell >
                        <Button onClick={()=>deleteValues(val._id)}>submit</Button>&nbsp;&nbsp;
                        <Button onClick={()=>updateValues(val)}>update</Button>
                    </TableCell>
                
                </TableRow>
                    
               
                    )})}
        
            </Table>
        </TableContainer>
        if(update)finalJSX=<Data data={singleValue}  method='put'/>


  return finalJSX
 
         }
                    


export default Views