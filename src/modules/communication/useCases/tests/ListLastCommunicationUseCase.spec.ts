import listLastCommunicationUseCase from '../ListLastCommunicationUseCase';

describe('Delete communication test suite', () => {
  it('should not be able to list last communication if dont provided courseId', async () => {
    const parameters = {
      courseId: null,
      classCode: 'DEX02',
    };

    const response = await listLastCommunicationUseCase.execute(
      parameters.courseId,
      parameters.classCode,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('CourseId dont provided');
  });

  it('should not be able to list last communication if dont provided classCode', async () => {
    const parameters = {
      courseId: 77,
      classCode: null,
    };

    const response = await listLastCommunicationUseCase.execute(
      parameters.courseId,
      parameters.classCode,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('ClassCode dont provided');
  });
});
