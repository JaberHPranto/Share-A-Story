import express from 'express';
import { createPosts, deletePost, getPosts, updatePosts } from '../controllers/postController.js';


const router = express.Router()

router.get('/',getPosts)
router.post('/', createPosts)
router.patch('/:id',updatePosts)
router.delete('/:id',deletePost)

export default router
