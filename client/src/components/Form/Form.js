import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/post';
import useStyles from './styles';

function Form({setCurrentId,currentId}) {
    const [postData, setPostData] = useState({
        title:'',message:'',tags:'',selectedFile:''
    })
    const post = useSelector(state => currentId ? state.posts.find((p) => p._id === currentId) : null)
    useEffect(() => {
        if (post)
            setPostData(post)
    }, [post])

    const dispatch = useDispatch()
    const classes = useStyles() 
    
    const user = JSON.parse(localStorage.getItem('profile'))
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
        if (currentId) {
            dispatch(updatePost(currentId, {...postData,name:user?.result?.name}))
        }else 
            dispatch(createPost({...postData,name:user?.result?.name}))
        
        clearForm()
    }
    const clearForm = () => {
        setCurrentId(null)
        setPostData({title:'',message:'',tags:'',selectedFile:''})
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please login to create and like other's post
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={`${classes.root} ${classes.paper}`}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Story</Typography>

                <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} 
                />
                <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} 
                />
                <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})} 
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
