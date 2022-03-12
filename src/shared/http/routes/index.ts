import { Router } from 'express';
import { cityRoutes } from '../../../modules/city/routes/cities.routes';
import { usersRouter } from '../../../modules/user/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/city', cityRoutes);

export default routes;