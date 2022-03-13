import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IFindCityDTO } from './findCityDTO';


export class FindCityService {
    
    async execute({ city }: IFindCityDTO){

        const findCityExists = await prisma.city.findFirst({
            where: {
                city: {
                    mode: 'insensitive',
                }
            }
        });

        return findCityExists || [];
    }

    async findByUF({ uf, city }: IFindCityDTO){

        const findCityExists = await prisma.city.findFirst({
            where: {[`uf`]: uf, [`city`]: city}
        });

        return findCityExists || [];
    }
}
