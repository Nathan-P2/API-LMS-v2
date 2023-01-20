import { Request, Response } from 'express';
import editCommunicationUseCase from '../useCases/EditCommunicationUseCase';

class EditCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const communicationId = parseInt(req.params.communicationId);

    const communication = req.body.communication;

    const response = await editCommunicationUseCase.execute(
      communicationId,
      communication,
    );

    return res.status(response.statusCode).send({ message: response.message });
  }
}

export default new EditCommunicationController();
