const { getCourse } = require('../src/controllers/coursesController');
const CourseService = require('../src/services/coursesService');
const mockCourse = require('../src/__mocks__/coursesService');

jest.mock('../src/services/coursesService');

describe('Courses Controller', () => {
  it('should return course details for a valid course id', async () => {
    const req = {
      params: {
        id: 'ef131a0c-3006-4a38-8cfd-085fa08f8361',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await CourseService.getCourse.mockResolvedValue(mockCourse);

    await getCourse(req, res, next);

    expect(CourseService.getCourse).toHaveBeenCalledWith(req.params.id);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCourse);
  });

  it('should call next with an error if the service throws an error', async () => {
    const req = { params: { id: 'invalid-id' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    CourseService.getCourse.mockRejectedValueOnce(
      new Error('Course not found')
    );

    await getCourse(req, res, next);

    expect(CourseService.getCourse).toHaveBeenCalledWith(req.params.id);
    expect(next).toHaveBeenCalledWith(new Error('Course not found'));
  });
});
