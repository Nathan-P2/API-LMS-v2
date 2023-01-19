import { PrismaClient } from '@prisma/client';

class EditCommunicationUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(communicationId: number, communication: string) {
    const response = await this.prisma.lms_comunicados_turma.update({
      where: {
        comunicado_id: communicationId,
      },
      data: {
        comunicado: communication,
      },
    });

    return response;
  }
}

export default new EditCommunicationUseCase();
