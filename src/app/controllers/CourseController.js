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
    console.log(formData);
    const promise = course.save();
    promise
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log(error);
      });
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => res.redirect(`/courses/${user.slug}`))
      .catch(next);
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /courses/:id/destroy
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CoursesController();
