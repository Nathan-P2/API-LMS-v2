import { Request, Response } from 'express';
import { ListAllCommunicationUseCase } from '../useCases/ListAllCommunicationUseCase';

class ListAllCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const courseId = parseInt(req.params.courseId);

    const courseCode = req.params.courseCode;

    const listAllCommunicationUseCase = new ListAllCommunicationUseCase();

    const response = await listAllCommunicationUseCase.execute(
      courseId,
      courseCode,
    );

    return res.status(200).send(response);
  }
}

export default new ListAllCommunicationController();
