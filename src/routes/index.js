const newsRouter = require("./news.router");
const homeRouter = require("./home.router");
function route(app) {
  app.use("/homes", homeRouter);
  app.use("/news", newsRouter);

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });
  app.use("/", homeRouter);
}

module.exports = route;
