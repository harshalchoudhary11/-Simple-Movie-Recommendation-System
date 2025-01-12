const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";
export const fetchMovies = async (genre, duration, mood) => {
  try {
    const response = await axios.post(`${BASE_URL}/movies`, {
        genre,
        duration,
        mood,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
