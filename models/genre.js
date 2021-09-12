const mongoose = require("mongoose");
const Joi = require("joi");

// Create Schema
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

// Create Class
const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genres) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });
  return schema.validate(genres);
}

module.exports.Genre = Genre;
module.exports.validate = validateGenre;
module.exports.genreSchema = genreSchema;
