import { PrismaClient } from '@prisma/client';

class DeleteCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(communicationId: number | null) {
    if (!communicationId) {
      return {
        statusCode: 400,
        message: 'CommunicationId dont provided',
      };
    }

    await this.prisma.lms_comunicados_turma.delete({
      where: {
        comunicado_id: communicationId,
      },
    });

    return {
      statusCode: 200,
      message: 'Communication deleted successfully',
    };
  }
}

export default new DeleteCommunicationUseCase();
