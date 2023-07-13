const Courses = require("../model/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  async storeCourses(req, res, next) {
    let count = 0;
    await Courses.findDeleted({}).then((courses) => {
      count = multipleMongooseToObject(
        courses.filter((course) => course.deleted)
      ).length;
    });

    Courses.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
          count,
        })
      )
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Courses.findDeleted({ deleted: true })
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(
            courses.filter((course) => course.deleted)
          ),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
