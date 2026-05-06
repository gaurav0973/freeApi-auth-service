# FreeAPI Authentication App

This is a React + Vite frontend for the FreeAPI authentication module. It implements a full session-based auth flow with signup, login, logout, and current-user profile display.

## Features

- Register new users
- Login with username and password
- Load the current logged-in user from the API session
- Logout and clear the active session
- Protected home screen
- Inline success and error messages
- Loading states for API requests

## API Endpoints

The app uses the following FreeAPI endpoints:

- `POST https://api.freeapi.app/api/v1/users/register`
- `POST https://api.freeapi.app/api/v1/users/login`
- `POST https://api.freeapi.app/api/v1/users/logout`
- `GET https://api.freeapi.app/api/v1/users/current-user`

The frontend is configured to send requests with credentials so the API session cookie can be used across requests.

## Project Structure

- `src/pages/Signup.jsx` - registration form
- `src/pages/Login.jsx` - login form
- `src/pages/Home.jsx` - protected dashboard and profile view
- `src/context/AuthContext.jsx` - shared auth state and session loading
- `src/services/api.js` - Axios client
- `src/services/authService.js` - auth API helpers

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Start the development server:

```bash
bun run dev
```

3. Open the app in the local URL shown by Vite.

## Usage Notes

- Signup requires `username`, `email`, `password`, and `role`.
- Login uses `username` and `password`.
- After login, the app fetches the current session user and redirects to the protected home page.
- Logout clears the session and returns to the login screen.