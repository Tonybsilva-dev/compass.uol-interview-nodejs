import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IDeleteUserDTO } from './deleteUserDTO';

export class DeleteUserService {

    public async delete({ id }: IDeleteUserDTO){


        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                id,
            }
        });

        if (!nameAlredyExists){
            throw new AppError('Email not exists')
        };

        await prisma.users.delete({ 
            where:{
                id,
        } });
    }
} 