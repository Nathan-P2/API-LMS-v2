import createCommunicationUseCase from '../CreateCommunicationUseCase';

describe('Create communication test suite', () => {
  it('should not be able to create a new communication if classId is not provided', async () => {
    const parameters = {
      classId: null,
      classCode: 'DEX02',
      course: 'Formação em Dados',
      communication: 'Bem-vindos',
      courseId: 77,
    };

    const response = await createCommunicationUseCase.execute(
      parameters.classId,
      parameters.classCode,
      parameters.course,
      parameters.communication,
      parameters.courseId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Invalid classId provided');
  });

  it('should not be able to create a new communication if classCode is not provided', async () => {
    const parameters = {
      classId: 108,
      classCode: null,
      course: 'Formação em Dados',
      communication: 'Bem-vindos',
      courseId: 77,
    };

    const response = await createCommunicationUseCase.execute(
      parameters.classId,
      parameters.classCode,
      parameters.course,
      parameters.communication,
      parameters.courseId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Invalid classCode provided');
  });

  it('should not be able to create a new communication if course is not provided', async () => {
    const parameters = {
      classId: 108,
      classCode: 'DEX02',
      course: null,
      communication: 'Bem-vindos',
      courseId: 77,
    };

    const response = await createCommunicationUseCase.execute(
      parameters.classId,
      parameters.classCode,
      parameters.course,
      parameters.communication,
      parameters.courseId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Invalid course provided');
  });

  it('should not be able to create a new communication if communication is not provided', async () => {
    const parameters = {
      classId: 108,
      classCode: 'DEX02',
      course: 'Formação em Dados',
      communication: null,
      courseId: 77,
    };

    const response = await createCommunicationUseCase.execute(
      parameters.classId,
      parameters.classCode,
      parameters.course,
      parameters.communication,
      parameters.courseId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Invalid communication provided');
  });

  it('should not be able to create a new communication if courseId is not provided', async () => {
    const parameters = {
      classId: 108,
      classCode: 'DEX02',
      course: 'Formação em Dados',
      communication: 'Bem-vindos',
      courseId: null,
    };

    const response = await createCommunicationUseCase.execute(
      parameters.classId,
      parameters.classCode,
      parameters.course,
      parameters.communication,
      parameters.courseId,
    );

    expect(response.statusCode).toBe(400);
    expect(response.message).toBe('Invalid courseId provided');
  });
});
