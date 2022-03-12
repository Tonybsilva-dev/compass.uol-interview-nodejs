import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IFindUserDTO } from './findUserDTO';


export class FindUserService {
    
    async execute({ name }: IFindUserDTO){

        const findUserExists = await prisma.users.findFirst({
            where: {
                name: {
                    mode: 'insensitive',
                }
            }
        });

        return findUserExists || [];
    }

    async findByID({ id }: IFindUserDTO){

        const findUserExists = await prisma.users.findFirst({
            where: {
                id
            }
        });

        return findUserExists || [];
    }
}
