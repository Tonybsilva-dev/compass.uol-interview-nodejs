import { Request, Response } from 'express';
import { FindCityService } from './findCityService';

export class FindCityController {
    constructor(private findUserUseCase: FindCityService) { }

    async index(request: Request, response: Response) {

        const { city } = request.body;

        const findUserService = new FindCityService;

        const result = await findUserService.execute({ city });

        return response.json(result);
    }

    async handle(request: Request, response: Response) {

        const { uf } = request.params;
        const { city } = request.body;

        const findUserService = new FindCityService;

        const result = await findUserService.findByUF({ uf, city });

        return response.json(result);
    }
}