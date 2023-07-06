const Course = require("../model/Courses");

class HomeController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render("home", { courses });
        return;
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new HomeController();
