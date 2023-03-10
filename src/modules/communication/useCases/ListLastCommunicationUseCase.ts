import { PrismaClient } from '@prisma/client';
import moment from 'moment';

class ListLastCommunicationUseCase {
  private prisma: PrismaClient;
  private moment;

  constructor() {
    this.prisma = new PrismaClient();
    this.moment = moment;
    this.moment.locale('pt-BR');
  }

  async execute(courseId: number | null, classCode: string | null) {
    if (!courseId) {
      return {
        statusCode: 400,
        message: 'CourseId dont provided',
      };
    }

    if (!classCode) {
      return {
        statusCode: 400,
        message: 'ClassCode dont provided',
      };
    }

    const communication: any =
      await this.prisma.lms_comunicados_turma.findFirst({
        where: {
          comunicado_curso_id: courseId,
          comunicado_turma: classCode,
        },
        orderBy: {
          comunicado_id: 'desc',
        },
      });

    if (communication) {
      communication.comunicado_data_created = this.moment(
        communication.comunicado_data_created,
      ).format('LLL');
    }

    return {
      statusCode: 200,
      communication,
    };
  }
}

export default new ListLastCommunicationUseCase();
