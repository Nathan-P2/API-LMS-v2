import { Request, Response } from 'express';
import listLastCommunicationUseCase from '../useCases/ListLastCommunicationUseCase';

class ListLastCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const courseId = parseInt(req.params.courseId);

    const courseCode = req.params.courseCode;

    const response = await listLastCommunicationUseCase.execute(
      courseId,
      courseCode,
    );

    return res.status(200).send(response);
  }
}

export default new ListLastCommunicationController();
