import editCommunicationUseCase from '../EditCommunicationUseCase';

describe('Delete communication test suite', () => {
  it('should not be able to update communication if dont provided communicationId', async () => {
    const parameters = {
      communicationId: null,
      communication: 'Comunicado especial',
    };

    const response = await editCommunicationUseCase.execute(
      parameters.communicationId,
      parameters.communication,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('CommunicationId dont provided');
  });

  it('should not be able to update communication if dont provided communication', async () => {
    const parameters = {
      communicationId: 1,
      communication: null,
    };

    const response = await editCommunicationUseCase.execute(
      parameters.communicationId,
      parameters.communication,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Communication dont provided');
  });
});
