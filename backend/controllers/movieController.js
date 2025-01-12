const Movie = require('../models/movieModel');

const getMovies = async (req, res) => {
  const { genre, duration, mood } = req.body;

  try {
    const pipeline = [];

    if (genre) {
      pipeline.push({ $match: { genre } });
    }

    if (mood) {
      pipeline.push({ $match: { mood } });
    }

    if (duration) {
      if (duration === 'Short') {
        pipeline.push({ $match: { duration: { $lt: 90 } } });
      } else if (duration === 'Medium') {
        pipeline.push({ $match: { duration: { $gte: 90, $lt: 120 } } });
      } else if (duration === 'Long') {
        pipeline.push({ $match: { duration: { $gte: 120 } } });
      }
    }

    const movies = await Movie.aggregate(pipeline);

    res.status(200).json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ message: 'Failed to fetch movies', error: error.message });
  }
};

module.exports = { getMovies };
