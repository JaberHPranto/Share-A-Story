import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';
import useStyles from './styles';

function Form() {
    const [postData, setPostData] = useState({
        creator:'',title:'',message:'',tags:'',selectedFile:''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
        dispatch(createPost(postData))
    }
    const clearForm = () => {
        
    }

    const classes = useStyles() 
    return (
        <Paper className={`${classes.root} ${classes.paper}`}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit} >
                <Typography variant="h6">Create a Story</Typography>

                <TextField name="creator" label="Creator" variant="outlined" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} 
                />
                <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} 
                />
                <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} 
                />
                <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})} 
                />

                <div className={classes.fileInput}>
                    <FileBase64 type="file" multiple={false} onDone = {({base64})=>setPostData({...postData,selectedFile:base64})}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" type="submit" size="small" fullWidth onClick={clearForm} >Clear</Button>
           </form>
        </Paper>
    ) 
}

export default Form
