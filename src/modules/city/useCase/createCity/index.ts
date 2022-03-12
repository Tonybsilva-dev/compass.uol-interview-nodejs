import { CreateCityController } from "./createCityController";
import { CreateCityService } from "./createCityService";


const createCityService = new CreateCityService();

const createCityController = new CreateCityController(createCityService);

export { createCityController, createCityService };
