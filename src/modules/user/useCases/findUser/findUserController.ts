import { Request, Response } from 'express';
import { FindUserService } from './findUserService';

export class FindUserController {
    constructor (private findUserUseCase: FindUserService){}

    async index(request: Request, response: Response){

        const { name } = request.body;

        const findUserService = new FindUserService;

        const result = await findUserService.execute({ name });

        return response.json(result);
    }

    async handle(request: Request, response: Response){

        const { id } = request.params;

        const findUserService = new FindUserService;

        const result = await findUserService.findByID({ id });

        return response.json(result);
    }
}