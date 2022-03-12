import { Request, Response } from 'express';
import { DeleteUserService } from './deleteUserService';


export class DeleteUserController{
    constructor (private deleteUserUseCase: DeleteUserService) { }

    async delete(request: Request, response: Response): Promise <Response> {

        const { id } = request.params;

        const deleteUserService = new DeleteUserService();

        await deleteUserService.delete({ id });

        return response.json({message:'User has been Deleted'});
    }
}
