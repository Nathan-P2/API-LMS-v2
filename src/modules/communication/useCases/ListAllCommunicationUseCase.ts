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

  async execute(courseId: number, classCode: string) {
    const listCommunications = await this.prisma.lms_comunicados_turma.findMany(
      {
        where: {
          comunicado_curso_id: courseId,
          OR: {
            comunicado_turma: classCode,
          },
        },
      },
    );

    const response = listCommunications.map(
      ({ comunicado_data_created, ...rest }) => ({
        ...rest,
        comunicado_data_created: this.moment(comunicado_data_created).format(
          'LLL',
        ),
      }),
    );

    return response;
  }
}

export default new ListAllCommunicationUseCase();
