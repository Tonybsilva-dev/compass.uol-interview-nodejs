import { Request, Response, Router } from "express";
import { createCityController } from "../useCase/createCity";

const cityRoutes = Router();

cityRoutes.post('/', (request: Request, response: Response) => {
  return createCityController.store(request, response);
});

export { cityRoutes };
