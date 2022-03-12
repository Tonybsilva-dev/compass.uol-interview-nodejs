import { Request, Response } from "express";
import { CreateCityService } from "./createCityService";


export class CreateCityController {

    constructor(private createCityUseCase: CreateCityService) {}

    async store(request: Request, response: Response) {
        
            const { uf, city } = request.body;

            const createCityService = new CreateCityService;

            const result = await createCityService.execute({ uf, city });

            return response.json(result);
    }

}