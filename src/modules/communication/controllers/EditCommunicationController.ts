import { Request, Response } from 'express';
import editCommunicationUseCase from '../useCases/EditCommunicationUseCase';

class EditCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const communicationId = parseInt(req.params.communicationId);

    const communication = req.body.comunicado;

    const response = await editCommunicationUseCase.execute(
      communicationId,
      communication,
    );

    return res.status(200).send(response);
  }
}

export default new EditCommunicationController();