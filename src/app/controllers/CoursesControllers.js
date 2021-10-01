const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesControllers {
  // GET /courses/:slug
  index(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/course', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next);
  }

  // GET /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // POST /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course.save();
    res.render('courses/store');
  }
}

module.exports = new CoursesControllers();
