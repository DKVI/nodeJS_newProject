const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    deleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: false,
  deleted: false,
});

module.exports = mongoose.model("Course", Course);
