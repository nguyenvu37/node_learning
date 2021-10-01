const Course = require('../models/Course');
const { multipleMongoosesToObject } = require('../../util/mongoose');

class SiteControllers {
  // GET /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongoosesToObject(courses);
        res.render('home', { courses });
      })
      // .catch(err => next(err)) // option 1
      .catch(next); // option 2
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteControllers();
