const Course = require('../model/course');
const APIError = require('../utils/error');

class CourseService {
  static async getCourse(courseId) {
    const response = await Course.findById(courseId);
    if (!response) {
      throw new APIError(404, 'Course Not Found');
    }

    return response;
  }
}

module.exports = CourseService;
