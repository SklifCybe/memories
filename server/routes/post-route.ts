import { Router } from 'express';

import { getPosts, createPost, updatePost } from '../controllers/post-controller';

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.patch('/:id', updatePost);

export { postRouter };
