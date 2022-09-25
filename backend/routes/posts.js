import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

//implement Routes for the Controller

router.get('/creator', getPostsByCreator);
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', auth, updatePost);  //patch is used for updating existing documents, :id (dynamic) we want to know the id before adding something
router.delete('/:id', auth, deletePost); //:id which post we are deleting
router.patch('/:id/likePost', auth, likePost); //auth we need a permission to like the post
router.post('/:id/commentPost', commentPost);

export default router;