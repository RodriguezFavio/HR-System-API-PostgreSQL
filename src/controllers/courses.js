const CourseService = require('../services/courses');

exports.getCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await CourseService.getCourse(courseId);

    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
