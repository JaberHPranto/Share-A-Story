import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Icon from './Icon';
import Input from './Input';
import useStyles from './styles';

const initialState = {
    firstName: '', lastName: '',email:'',password: '', confirmPassword: ''
}

function Auth() {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(formData,history))
        } else
            dispatch(signin(formData,history))
    }
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword)=> !prevShowPassword)
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup => !prevIsSignup))
    }

    const googleSuccess = async (res) => {
        // console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            
            //redirecting to home
            history.push("/")
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {
        console.log("Google Sign in was unsuccessful. Try again later");
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
                        <Button type='submit' className={classes.submit} fullWidth variant="contained" color="primary">
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>  

                        <GoogleLogin
                            clientId="185268084117-i2nk5o3fer6cl1h58urq3ofqcnnauiqi.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color="primary" fullWidth
                                    onClick={renderProps.onClick} disabled={renderProps.disabled}
                                    variant="contained" startIcon={<Icon />}
                                >
                                    Google Sign in
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
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
