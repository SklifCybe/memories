import { Router } from 'express';

import { signin, signup } from '../controllers/user-controller';

const userRouter = Router();

userRouter.post('/signin', signin);
userRouter.post('/signup', signup);

export { userRouter };
