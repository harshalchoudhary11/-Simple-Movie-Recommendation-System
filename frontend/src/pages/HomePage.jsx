import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { fetchMovies } from '../services/movieService';
import { FaSpinner } from 'react-icons/fa';

const HomePage = () => {
  const [filters, setFilters] = useState({
    genre: '',
    duration: '',
    mood: ''
  });
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (name, value) => {
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    const { genre, duration, mood } = filters;
    const movies = await fetchMovies(genre, duration, mood);
    setLoading(false);

    if (movies.length === 0) {
      setErrorMessage('No movies found for the given criteria.');
      setFilters({ genre: '', duration: '', mood: '' });
      setRecommendation(null);
      return;
    }
    setRecommendation(movies[0]);
    setFilters({ genre: '', duration: '', mood: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Movie Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <Dropdown
          label="Mood"
          options={['Happy', 'Relaxed', 'Excited', 'Adventurous']}
          value={filters.mood}
          onChange={(value) => handleChange('mood', value)}
        />
        <Dropdown
          label="Preferred Genre"
          options={['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']}
          value={filters.genre}
          onChange={(value) => handleChange('genre', value)}
        />
        <Dropdown
          label="Preferred Duration"
          options={['Short', 'Medium', 'Long']}
          value={filters.duration}
          onChange={(value) => handleChange('duration', value)}
        />

        <button type="submit">Get Recommendation</button>
      </form>

      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <FaSpinner/>
        </div>
      )}

      {errorMessage && !loading && (
        <div style={{ color: 'yellow', marginTop: '20px' }}>
          <p>{errorMessage}</p>
        </div>
      )}

      {recommendation && !loading && (
        <div>
          <h2>Recommendation:</h2>
          <p>{recommendation.title}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
