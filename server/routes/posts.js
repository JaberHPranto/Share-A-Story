import express from 'express';
import { createPosts, deletePost, getPosts, likePost, updatePosts } from '../controllers/postController.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.get('/',getPosts)
router.post('/',auth, createPosts)
router.patch('/:id',auth,updatePosts)
router.delete('/:id',auth, deletePost)
router.patch('/:id/likePost',auth,likePost)

export default router
