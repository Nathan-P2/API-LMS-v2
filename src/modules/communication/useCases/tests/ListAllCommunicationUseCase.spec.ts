import listAllCommunicationUseCase from '../ListAllCommunicationUseCase';

describe('Delete communication test suite', () => {
  it('should not be able to list all communications if dont provided courseId', async () => {
    const parameters = {
      courseId: null,
      classCode: 'DEX02',
    };

    const response = await listAllCommunicationUseCase.execute(
      parameters.courseId,
      parameters.classCode,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('CourseId dont provided');
  });

  it('should not be able to list all communications if dont provided classCode', async () => {
    const parameters = {
      courseId: 77,
      classCode: null,
    };

    const response = await listAllCommunicationUseCase.execute(
      parameters.courseId,
      parameters.classCode,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('ClassCode dont provided');
  });
});
