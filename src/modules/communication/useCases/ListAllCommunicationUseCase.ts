import { PrismaClient } from '@prisma/client';

export class ListAllCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
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

    const options: object = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const response = listCommunications.map((element: any) => {
      const obj = Object.assign({}, element);
      element.comunicado_data_created = new Date(
        element.comunicado_data_created,
      ).toLocaleDateString('pt-BR', options);
      return obj;
    });

    return response;
  }
}
