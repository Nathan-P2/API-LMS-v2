import { Request, Response } from 'express';
import deleteCommunicationUseCase from '../useCases/DeleteCommunicationUseCase';

class DeleteCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const comunicadoId = req.body.comunicadoId;

    const response = await deleteCommunicationUseCase.execute(
      parseInt(comunicadoId),
    );

    return res.status(response.statusCode).send(response.message);
  }
}

export default new DeleteCommunicationController();
