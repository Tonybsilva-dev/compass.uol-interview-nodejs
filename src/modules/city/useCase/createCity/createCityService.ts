import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { ICreateCityDTO } from './createCityDTO';

export class CreateCityService {
    async execute({ city , uf }: ICreateCityDTO){

        const cityAlredyExists = await prisma.city.findFirst({
            where: {
                city
            }
        });

        if (cityAlredyExists){
            throw new AppError('City already exists')
        };

        const result = await prisma.city.create({
            data: {
                city,
                uf
            }
        });

        return result;
    }
}