import loginRouter from './purchase';

import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/purchase', loginRouter);

export default apiRouter;
