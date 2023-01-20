import { Request, Response } from 'express';
import deleteCommunicationUseCase from '../useCases/DeleteCommunicationUseCase';

class DeleteCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const communicationId = req.params.communicationId;

    const response = await deleteCommunicationUseCase.execute(
      parseInt(communicationId),
    );

    return res.status(response.statusCode).send({ message: response.message });
  }
}

export default new DeleteCommunicationController();
