# Tattoo Studio Frontend Project

## Objective

The objective of this project is to develop the user interface of a website for a tattoo studio, enabling users to create accounts, manage their profiles, and schedule appointments.

## Project Description

This frontend project has been developed using Node.js as the runtime environment and React as the library for integrating JavaScript and HTML. The website includes various views, such as:

- **Home**
- **Services**
- **Artists**
- **Login**
- **Sign Up**
- **Profile Panel**
- **Appointments Panel**
- **Create New Appointments**

Administrators have access to a special panel for user management. This frontend communicates with an API that interacts with a MySQL database.

## Local Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install project dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm run dev
    ```

4. Set up and start the backend server:
    - Ensure that the MySQL database is running.
    - Use the CORS library to allow connections between the frontend and backend.
    - Navigate to the backend directory and execute the following commands:
    ```sh
    cd ../your-repo-backend
    npm install
    npm run dev
    ```

## Future Features

- Make the design fully responsive.
- Allow users to change their passwords.
- Allow users to edit their appointments.
- Allow users to upload a profile picture.
