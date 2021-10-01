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
  create(req, res) {
    res.render('courses/create');
  }

  // POST /courses/store
  store(req, res) {
    const course = new Course(req.body);
    course.save();
    res.render('courses/store');
  }

  // GET /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // PUT /courses/:id/
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

module.exports = new CoursesControllers();
