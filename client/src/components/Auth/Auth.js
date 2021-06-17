import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import LockOutlined from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import Input from './Input'
import useStyles from './styles'

function Auth() {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const classes = useStyles()

    const handleChange = () => {
        
    }
    const handleSubmit = () => {
        
    }
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword)=> !prevShowPassword)
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup => !prevIsSignup))
    }

    return (
        <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last name" handleChange={handleChange} half  />
                            </>
                        )}

                        <Input name="email" label="Email" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange}
                            type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                        <Button className={classes.submit} fullWidth variant="contained" color="primary">
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>  
                    </Grid>
                    <Grid container alignItems="center" >
                        <Button onClick={switchMode} className={classes.authButton}>
                            {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
