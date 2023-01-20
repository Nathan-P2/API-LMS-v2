import { Request, Response } from 'express';
import listAllCommunicationUseCase from '../useCases/ListAllCommunicationUseCase';

class ListAllCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const courseId = parseInt(req.params.courseId);

    const courseCode = req.params.courseCode;

    const response = await listAllCommunicationUseCase.execute(
      courseId,
      courseCode,
    );

    return res.status(response.statusCode).send(response.communications);
  }
}

export default new ListAllCommunicationController();
