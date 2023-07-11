const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../model/Courses");

class CoursesController {
  // [GET] /courses/:slug

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  async store(req, res, next) {
    const formData = req.body;
    const course = new Course({
      ...formData,
      img: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
    });
    const promise = course.save();
    promise
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new CoursesController();
