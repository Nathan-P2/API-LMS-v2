import { PrismaClient } from '@prisma/client';

class CreateCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(
    classId: number,
    classCode: string,
    course: string,
    communication: string,
    courseId: number,
  ) {
    const response = this.prisma.lms_comunicados_turma.create({
      data: {
        turma_id: classId,
        comunicado_turma: classCode,
        comunicado: communication,
        comunicado_curso_id: courseId,
        comunicado_curso: course,
      },
    });

    return response;
  }
}

export default new CreateCommunicationUseCase();
