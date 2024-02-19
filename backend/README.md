# Personality Assessment Test Application

This application allows users to take a personality assessment test to gain insights into their natural inclinations towards introversion or extroversion. The application consists of both frontend and backend components.

## Backend

The backend service provides RESTful API endpoints for managing questions, user responses, and authentication.

### Features

- Provides endpoints for fetching questions and submitting responses.
- Implements user authentication using JWT tokens.
- Stores user responses in a database for analysis.
- Error handling and logging for improved reliability.
- Unit and integration tests to ensure functionality.

### Technologies Used

- Node.js
- Express.js
- CORS
- Jest

### Folder Structure

- `src`: Contains the source code for the backend service.
  - `controllers`: Controllers for handling API requests.
  - `models`: Models for the data.
  - `routes`: API route definitions.
- `.env`: Configure environment variables(e.g, PORT=8000, etc.)
- `tests`: Unit and integration tests.

