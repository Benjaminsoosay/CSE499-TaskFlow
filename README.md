# TaskFlow - CSE 499

## Project Overview
TaskFlow is a full-stack task management application. This project is being developed as part of the CSE 499 course requirements. 

## Tech Stack
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB (Mongoose)
*   **Authentication:** JWT (JSON Web Tokens), bcrypt
*   **Frontend:** React (Components)

## Sprint Progress
*   **Sprint 1-3:** Set up the initial backend architecture, including server configuration, database connection, and folder structure.
*   **Sprint 4 (W04):** Implemented User and Task models, Auth routes, Task routes, and JWT Middleware.
*   **Sprint 5 (W05 - Current):** Finalized backend routing, built the React `CreateTaskModal.jsx` component, and added test routes. 

## How to Run the Project Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your `MONGO_URI` and `JWT_SECRET`.
4. Run `npm start` to start the server.