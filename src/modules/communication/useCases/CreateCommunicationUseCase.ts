import { PrismaClient } from '@prisma/client';

class CreateCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(
    classId: number | null,
    classCode: string | null,
    course: string | null,
    communication: string | null,
    courseId: number | null,
  ) {
    if (!classId) {
      return {
        statusCode: 400,
        message: 'Invalid classId provided',
      };
    }

    if (!classCode) {
      return {
        statusCode: 400,
        message: 'Invalid classCode provided',
      };
    }

    if (!course) {
      return {
        statusCode: 400,
        message: 'Invalid course provided',
      };
    }

    if (!communication) {
      return {
        statusCode: 400,
        message: 'Invalid communication provided',
      };
    }

    if (!courseId) {
      return {
        statusCode: 400,
        message: 'Invalid courseId provided',
      };
    }

    await this.prisma.lms_comunicados_turma.create({
      data: {
        turma_id: classId,
        comunicado_turma: classCode,
        comunicado: communication,
        comunicado_curso_id: courseId,
        comunicado_curso: course,
      },
    });

    return {
      statusCode: 201,
      message: 'Communication created successfully',
    };
  }
}

export default new CreateCommunicationUseCase();
