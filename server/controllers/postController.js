import PostMessage from '../models/postModel.js'

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