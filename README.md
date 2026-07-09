# Restaurant Booking Full-Stack App

## Overview
Build a complete full-stack restaurant table booking system.

This application provides a comprehensive platform to manage restaurant bookings efficiently, involving a user-friendly Next.js frontend and a robust Express backend.

## Setup
To get started with the application, follow these steps:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd /path/to/repository
   ```

3. **Install the dependencies for both frontend and backend**
   ```bash
   cd apps/frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Run the application**
    - **Frontend**:
      ```bash
      cd apps/frontend
      npm run dev
      ```
    - **Backend**:
      ```bash
      cd apps/backend
      npm run dev
      ```

5. **Environment Variables**
   - Ensure you have the necessary `.env` files in both frontend and backend configurations as outlined in `.env.example`.

6. **Database**
   - Make sure your PostgreSQL database is up and running. Apply the database schema from `database/schema.sql`.

## Features Built

### Frontend (apps/frontend) — Next.js 14
- `Home`: Displays restaurant info, a hero section, and a "Book a Table" call-to-action.
- `Booking Form`: Allows customers to input their details and booking preferences.
- `Booking Confirmation`: Displays confirmation details with a booking reference.
- Utilizes responsive mobile-first design using Tailwind CSS.
- Incorporates form validation.

### Backend (apps/backend) — Express + TypeScript
- Route `GET /health`: Checks the health of the backend.
- Route `POST /api/bookings`: Handles bookings and returns a booking reference.
- Route `GET /api/bookings/:id`: Retrieves booking information by ID.
- Route `GET /api/availability`: Compares available slots for a specified date.
- Route `POST /api/auth/signup`: Allows user registration.
- Route `POST /api/auth/login`: Manages user login.

## Important Notes
- The frontend reads API environments from the `NEXT_PUBLIC_API_URL` environment variable.
- Both frontend and backend should have `.env.example` included for environment setup.
- The backend is configured to run on port 8080 by default.

## Conclusion
This README provides the necessary setup and configuration steps to get the restaurant booking application running. Ensuring all dependencies are installed and environment variables set accordingly will help in running the system effectively. For additional feature requests or bug fixes, please refer to the project's contribution guidelines.