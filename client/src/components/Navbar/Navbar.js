import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import memory from '../../images/memory.jpg';
import useStyles from './styles';

function Navbar() {
    const classes = useStyles()
    const user = null;
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h3" align='center' >Share Stories</Typography>
            <img src={memory} alt="memories" className={classes.image} height="50" width="auto" />
            </div>

            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                            <Button className={classes.logout} variant="contained" color="primary">Logout</Button>
                        </div>
                    ): (
                        <Button component={Link} to="/auth" variant="contained" color="primary" >Sign in</Button>    
                    )
                }
            </Toolbar>

        </AppBar>


    )
}

export default Navbar
