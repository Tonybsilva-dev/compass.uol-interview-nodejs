import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { ICreateUserDTO } from './createUserDTO';

export class CreateUserService {
    async execute({ name , gender , birthday, age, city }: ICreateUserDTO){

        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                name: name
            }
        });

        if (nameAlredyExists){
            throw new AppError('Name already exists')
        };

        const user = await prisma.users.create({
            data: {
                name: name.toUpperCase(),
                gender: gender.toUpperCase(),
                birthday,
                age,
                city
            }
        });

        return user;
    }
}