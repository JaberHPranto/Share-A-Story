import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React from 'react'

function Input({name,half,handleChange,label,type,autoFocus,handleShowPassword}) {
    return (
        <Grid item xs={12} md={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                label={label}
                type={type}
                required
                fullWidth
                variant="outlined" 
                autoFocus={autoFocus}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type==='password'? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}

            />
            
        </Grid>
    )
}

export default Input
