import { Request, Response } from 'express';
import createCommunicationUseCase from '../useCases/CreateCommunicationUseCase';

class CreateCommunicationController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { classId, classCode, courseTitle, communication, courseId } =
      req.body;

    const response = await createCommunicationUseCase.execute(
      classId,
      classCode,
      courseTitle,
      communication,
      courseId,
    );

    return res.status(response.statusCode).send({ message: response.message });
  }
}

export default new CreateCommunicationController();
