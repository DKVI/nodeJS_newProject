const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Users = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 255,
  },
  email: {
    type: String,
    maxLength: 255,
  },
  password: {
    type: String,
    maxLength: 255,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
});

module.exports = mongoose.model("Users", Users);
