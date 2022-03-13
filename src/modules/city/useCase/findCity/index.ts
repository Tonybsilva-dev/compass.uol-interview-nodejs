import { FindCityController } from './findCityController';
import { FindCityService } from './findCityService';


const findCityService = new FindCityService();

const findCityController = new FindCityController(findCityService);

export { findCityService, findCityController };
