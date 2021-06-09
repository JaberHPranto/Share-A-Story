import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

function Posts() {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)
    console.log(posts);
    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts
