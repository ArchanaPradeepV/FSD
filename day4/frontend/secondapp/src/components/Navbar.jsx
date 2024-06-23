import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>
                    <Button variant='contained' color='warning'><Link to='/add'>add</Link></Button>&nbsp;
                    <Button variant='contained' color='secondary'><Link to='/view'>view</Link></Button>&nbsp;
                </Typography>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar