import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>My app </Typography> &nbsp;&nbsp;         
                    <Button variant='contained' color='warning'>
                        <Link to='/sin'>
                            Signup
                        </Link>
                        </Button>&nbsp;

                    <Button variant='contained' color='inherit'>
                        <Link to='/'>
                            Login
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='secondary'>
                        <Link to='/sb'>
                            State
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='info'>
                        <Link to='/ad'>
                            add
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='success'>
                        <Link to='/list'>
                            List
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='error'>
                        <Link to='/api'>
                            api
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='secondary'>
                        <Link to='/sam'>
                            use
                        </Link>
                        </Button>&nbsp;
                        <Button variant='contained' color='secondary'>
                        <Link to='/card'>
                            card
                        </Link>
                        </Button>&nbsp;

          
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar