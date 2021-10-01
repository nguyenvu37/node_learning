const Course = require('../models/Course');
const { multipleMongoosesToObject } = require('../../util/mongoose');

class MeControllers {
  // GET /me
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-course', {
          courses: multipleMongoosesToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeControllers();
