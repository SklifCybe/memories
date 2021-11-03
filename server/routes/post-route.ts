import { Router } from 'express';

import { getPosts, createPost } from '../controllers/post-controller';

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);

export { postRouter };
