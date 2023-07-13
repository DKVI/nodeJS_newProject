const Users = require("../model/Users");

class RegisterController {
  index(req, res) {
    res.render("register");
  }
  store(req, res) {
    console.log(req.body);
    const formData = req.body;
    const user = new Users(formData);
    const promise = user.save();
    promise
      .then(() => {
        res.redirect("/");
        console.log("REGISTER DONE");
      })
      .catch((error) => {
        console.log("REGISTER FAIL");
      });
  }
}

module.exports = new RegisterController();
