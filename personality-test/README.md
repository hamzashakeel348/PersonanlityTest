# Personality Assessment Test Application

This application allows users to take a personality assessment test to gain insights into their natural inclinations towards introversion or extroversion. The application consists of both frontend and backend components.


## Frontend

The frontend application provides a user-friendly interface for taking the personality assessment test. It comprises as couple of different screens to welcome the user, take the user inputs and show the results at the feedback screen.

### Features

- User Interactive interface.
- Interaction with backend APIs for fetching questions.
- Error handling and validation for smooth user interaction.
- Unit tests for components to ensure reliability.

### Technologies Used

- React
- JavaScript
- Tailwind CSS
- Axios
- Jest/React Testing Library for testing

### Folder Structure

- `src`: Contains the source code for the frontend application.
  - `components`: Components representing entire pages of the application.
    - `Shared`: Shared UI components.
    - `Question`: Test screen that comprises different child Components.
    - `Landing`: Welcome screen to start the test.
    - `Feedback`: Finish screen to see the feedback of the test.
    - `Layout`: Conditional layout for the different components.
  - `utils`: Utility functions.
  - `tests`: Unit and integration tests.
  - `assets`: Contains static assets (HTML, images, etc.).
