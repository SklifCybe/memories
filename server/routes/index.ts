import { Router } from 'express';

import { MainController } from '../controllers';

const mainRouter = Router();

mainRouter.get('/', MainController.getHello)

export { mainRouter };
