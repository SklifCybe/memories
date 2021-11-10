import { Router } from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/post-controller';

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.patch('/:id', updatePost);
postRouter.delete('/:id', deletePost);
postRouter.patch('/likePost/:id', likePost);

export { postRouter };
