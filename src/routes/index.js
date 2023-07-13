const newsRouter = require("./news.router");
const homeRouter = require("./home.router");
const coursesRouter = require("./courses.router");
const registerRouter = require("./register.router");
const meRouter = require("./me.router");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/register", registerRouter);
  app.use("/me", meRouter);
  app.use("/", homeRouter);
}

module.exports = route;
