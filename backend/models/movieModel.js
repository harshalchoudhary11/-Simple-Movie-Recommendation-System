const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true  , length: 100 },
  genre: { type: String, required: true , length: 100 },
  duration: { type: String, required: true , length: 100 },
  mood: { type: String, required: true, length: 100  },
});

module.exports = mongoose.model('Movie', movieSchema);
