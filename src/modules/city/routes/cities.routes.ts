import { Request, Response, Router } from "express";
import { createCityController } from "../useCase/createCity";
import { findCityController } from "../useCase/findCity";

const cityRoutes = Router();

cityRoutes.post('/', (request: Request, response: Response) => {
  return createCityController.store(request, response);
});

cityRoutes.post('/find/', (request: Request, response: Response) => {
  return findCityController.index(request, response);
})

cityRoutes.post('/find/:uf', (request: Request, response: Response) => {
  return findCityController.handle(request, response);
})

export { cityRoutes };
