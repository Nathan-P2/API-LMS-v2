import { Request, Response } from 'express';
import createCommunicationUseCase from '../useCases/CreateCommunicationUseCase';

class CreateCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { turma_id, curso, turma, comunicado, curso_id } = req.body;

    const response = await createCommunicationUseCase.execute(
      turma_id,
      curso,
      turma,
      comunicado,
      curso_id,
    );

    return res.status(201).send(response);
  }
}

export default new CreateCommunicationController();
