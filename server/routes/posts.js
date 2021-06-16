import express from 'express';
import { createPosts, deletePost, getPosts, likePost, updatePosts } from '../controllers/postController.js';


const router = express.Router()

router.get('/',getPosts)
router.post('/', createPosts)
router.patch('/:id',updatePosts)
router.delete('/:id', deletePost)
router.patch('/:id/likePost',likePost)

export default router
