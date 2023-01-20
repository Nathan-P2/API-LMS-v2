import deleteCommunicationUseCase from '../DeleteCommunicationUseCase';

describe('Delete communication test suite', () => {
  it('should not be able to delete communication if dont provided communicationId', async () => {
    const parameters = {
      communicationId: null,
    };

    const response = await deleteCommunicationUseCase.execute(
      parameters.communicationId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('CommunicationId dont provided');
  });
});
