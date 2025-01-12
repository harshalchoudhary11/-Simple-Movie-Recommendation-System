import React from 'react';

const Recommendation = ({ movie }) => {
  return (
    <div className="recommendation">
      <h2>Recommended Movie:</h2>
      <p><strong>Title:</strong> {movie.title}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Mood:</strong> {movie.mood}</p>
    </div>
  );
};

export default Recommendation;
