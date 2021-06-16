import mongoose from 'mongoose';
import PostMessage from '../models/postModel.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find()

        res.status(200).json(posts)

    } catch (err) {
        res.status(401).json({
            error: err.message
        })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
        
    } catch (err) {
        res.status(409).json({
            error: err.message
        })
    }
}

export const updatePosts = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("Post not found with this id")
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
     res.status(200).json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("Post not found with this id")
    await PostMessage.findByIdAndRemove(id)
    res.status(200).json({message:"Post deleted Successfully"})
}

export const likePost = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("Post not found with this id")
    
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    
    res.status(200).json(updatedPost)

}