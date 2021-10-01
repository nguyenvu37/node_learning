const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, maxlength: 255 },
    thumbnail: String,
    slug: { type: String, slug: 'name', unique: true },
    videoId: String,
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', Course);
