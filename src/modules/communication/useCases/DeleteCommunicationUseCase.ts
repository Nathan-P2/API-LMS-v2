import { PrismaClient } from '@prisma/client';

class DeleteCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(communicationId: number) {
    const response = await this.prisma.lms_comunicados_turma.delete({
      where: {
        comunicado_id: communicationId,
      },
    });

    return response;
  }
}

export default new DeleteCommunicationUseCase();
