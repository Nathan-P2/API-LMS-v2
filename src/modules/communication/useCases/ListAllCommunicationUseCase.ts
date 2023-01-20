import { PrismaClient } from '@prisma/client';
import moment from 'moment';

class ListAllCommunicationUseCase {
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

    const listCommunications = await this.prisma.lms_comunicados_turma.findMany(
      {
        where: {
          comunicado_curso_id: courseId,
          comunicado_turma: classCode,
        },
      },
    );

    const communications = listCommunications.map(
      ({ comunicado_data_created, ...rest }) => ({
        ...rest,
        comunicado_data_created: this.moment(comunicado_data_created).format(
          'LLL',
        ),
      }),
    );

    return {
      statusCode: 200,
      communications,
    };
  }
}

export default new ListAllCommunicationUseCase();
