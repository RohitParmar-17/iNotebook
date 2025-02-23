# iNotebook

## Overview
iNotebook is a secure and efficient note management web application built using the MERN stack. It provides an intuitive interface that allows users to add, edit, and delete notes seamlessly while ensuring data security through authentication and state management.

## Screenshots
Here are some screenshots of the iNotebook application:

## Features
- **User Authentication**: Secure login and signup functionality.
- **CRUD Operations**: Users can create, read, update, and delete notes easily.
- **Context API Integration**: Manages application state efficiently.
- **Responsive UI**: Built with Bootstrap for a clean and user-friendly experience.

## Tech Stack
- **Frontend**: React.js, Bootstrap, HTML, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT for secure user authentication

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- MongoDB

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/RohitParmar-17/iNotebook.git
   cd iNotebook
   ```

2. **Install Dependencies**
   ```sh
   npm install
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `backend` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the Backend Server**
   ```sh
   cd backend
   npm start
   ```

5. **Start the Frontend**
   ```sh
   cd frontend
   npm start
   ```
   The app will be available at `http://localhost:3000/`

## Deployment
To deploy the project:
1. **Build the Frontend**
   ```sh
   npm run build
   ```
2. **Deploy to Platforms**
   - Use `Vercel` or `Netlify` for frontend deployment.
   - Use `Render` or `Heroku` for backend deployment.

## Contributing
If you'd like to contribute:
- Fork the repository
- Create a new branch (`git checkout -b feature-branch`)
- Make your changes and commit (`git commit -m "Added new feature"`)
- Push to the branch (`git push origin feature-branch`)
- Open a pull request

## Contact
For any issues or suggestions, feel free to reach out:
- **Email**: rohitghost5050@gmail.com

