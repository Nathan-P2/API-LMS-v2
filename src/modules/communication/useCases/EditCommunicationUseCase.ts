import { PrismaClient } from '@prisma/client';

class EditCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(communicationId: number | null, communication: string | null) {
    if (!communicationId) {
      return {
        statusCode: 400,
        message: 'CommunicationId dont provided',
      };
    }

    if (!communication) {
      return {
        statusCode: 400,
        message: 'Communication dont provided',
      };
    }

    await this.prisma.lms_comunicados_turma.update({
      where: {
        comunicado_id: communicationId,
      },
      data: {
        comunicado: communication,
      },
    });

    return {
      statusCode: 200,
      message: 'Communication updated successfully',
    };
  }
}

export default new EditCommunicationUseCase();
