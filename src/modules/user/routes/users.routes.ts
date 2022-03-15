import { Request, Response, Router } from "express";
import { createUserController } from '../useCases/createUser';
import { deleteUserController } from "../useCases/deleteUser";
import { findUserController } from "../useCases/findUser";



const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find/', (request: Request, response: Response) => {
    return findUserController.index(request, response);
})

usersRouter.get('/find/:id', (request: Request, response: Response) => {
    return findUserController.handle(request, response);
})

usersRouter.delete('/:id', (request: Request, response: Response) => {
    return deleteUserController.delete(request, response);
})

export { usersRouter };
