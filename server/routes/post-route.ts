import { Router } from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/post-controller';

import { auth } from '../middlewares/auth';

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', auth, createPost);
postRouter.patch('/:id', auth, updatePost);
postRouter.delete('/:id', auth, deletePost);
postRouter.patch('/likePost/:id', auth, likePost);

export { postRouter };
