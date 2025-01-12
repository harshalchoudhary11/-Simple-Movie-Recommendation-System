# Movie Recommendation API

This project is a Node.js-based API designed to fetch movie recommendations based on user-defined criteria such as genre, duration, and mood. It uses MongoDB as the database and provides endpoints to query the movie collection.

## Features

- Retrieve movie recommendations based on **genre**, **duration**, and **mood**.
- Duration categories:
  - **Short**: Movies with a duration less than 90 minutes.
  - **Medium**: Movies with a duration between 90 and 120 minutes.
  - **Long**: Movies with a duration of 120 minutes or more.
- Case-insensitive searches for `genre` and `mood`.
- Error handling for invalid queries or server issues.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/) (running locally or via a cloud service like MongoDB Atlas)

## API Endpoints

### 1. Fetch Movies

**Endpoint:** `POST /api/movies`

**Description:** Retrieves movies based on the provided criteria.

**Request Body:**
```json
{
  "genre": "Drama",
  "duration": "Long",
  "mood": "Relaxed"
}
```

- `genre` (optional): The genre of the movie (e.g., Action, Comedy).
- `duration` (optional): The duration category (`Short`, `Medium`, or `Long`).
- `mood` (optional): The mood of the movie (e.g., Happy, Excited).

**Response:**
- **200 OK:**
  ```json
  [
    {
      "_id": "678297f5115c3f4393f37a7b",
      "title": "The Conjuring",
      "genre": "Horror",
      "duration": 112,
      "mood": "Excited",
      "description": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      "releaseYear": 2013,
      "rating": 7.5
    }
  ]
  ```
- **404 Not Found:**
  ```json
  {
    "message": "No movies found matching the criteria."
  }
- **500 Internal Server Error:**
  ```json
  {
    "message": "Failed to fetch movies",
    "error": "Error details"
  }
  ```

## Project Structure

```
movie-recommendation-api/
├── models/
│   └── movieModel.js       # Mongoose schema for movies
├── routes/
│   └── movieRoutes.js      # API routes for movies
├── controllers/
│   └── movieController.js  # Business logic for fetching movies
├── config/
│   └── db.js               # MongoDB connection setup
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
├── server.js               # Entry point for the application
└── README.md               # Project documentation
```

## Example Movie Document

```json
{
  "_id": "678297f5115c3f4393f37a7b",
  "title": "The Conjuring",
  "genre": "Horror",
  "duration": 112,
  "mood": "Excited",
  "description": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
  "releaseYear": 2013,
  "rating": 7.5
}
```


