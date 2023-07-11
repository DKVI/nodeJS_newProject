const newsRouter = require("./news.router");
const homeRouter = require("./home.router");
const coursesRouter = require("./courses.router");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", homeRouter);
}

module.exports = route;
