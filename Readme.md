# Event-Management

### [https://event-management-4dbcc.web.app/](https://event-management-4dbcc.web.app/)

This project is a web application built using React, Tailwind CSS, Firebase, AOS animation library, scroll counter package, and other technologies. It provides users with various features and functionalities as listed below.

## Features

1. **Service Page Details:** Users can view details of every service page.
2. **Google Account Authentication:** Users can create an account using Google authentication.
3. **Email and Password Authentication:** Users can create an account using their email and password.
4. **Signout:** Users can sign out of their accounts.
5. **Sign-in Again:** After signing out, users can sign in again using their email and password.
6. **FAQ Routes:** Users can access FAQ routes and view initial questions.
7. **Error Handling:** Sweet Alert is displayed when users encounter errors.

## Functions

1. **User Profile:** Users can provide their name, email, and photo.
2. **Photo Upload:** Users can upload their photo from their device.
3. **Private Routes:** Users cannot access service details, team, or FAQ routes without logging in (Implemented using private routes).
4. **Automatic Redirect:** If a user is on a private route and signs out, they are automatically redirected to the sign-in page.
5. **Password Requirements:** Dynamically checks password requirements.
6. **Restricted Routes:** When users are already signed in, they cannot access sign-in or sign-up routes.

## Technologies Used

- React
- Tailwind CSS
- Firebase (Authentication, Database, etc.)
- AOS (Animate On Scroll) animation library
- Scroll counter package

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Set up Firebase configuration.
4. Start the development server using `npm run start` or `yarn dev`.
