/*
Backend Development Assignment

This project implements a full-stack backend using:

- Node.js with Express.js
- MongoDB Atlas (Mongoose ODM)
- JWT Authentication
- bcrypt password hashing
- RESTful API design
- Task Management CRUD operations
- Protected routes using middleware
- Environment variable configuration
- CORS enabled
*/

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

dotenv.config();

// Connect to MongoDB database
connectDB();

const app = express();

// Middleware
app.use(cors({
   origin: [
     "https://tiny-mochi-77d63b.netlify.app",
     "http://localhost:4200"
   ],
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options("*", cors());
app.use(express.json()); // Parse JSON request body

// Routes
app.use("/api/users", userRoutes);   // Register & Login (JWT Authentication)
app.use("/api/tasks", taskRoutes);   // Protected Task CRUD APIs

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

/*
Features Implemented:

1. User Authentication
   - Register user
   - Login user
   - Password hashing using bcrypt
   - JWT token generation
   - Token verification middleware

2. Task Management (CRUD)
   - Create task
   - Get all tasks (user specific)
   - Get single task
   - Update task
   - Delete task

3. Security Measures
   - JWT authentication
   - Password encryption
   - Environment variables (.env)
   - Protected routes
   - Proper HTTP status codes
   - Error handling

This backend is deployment-ready and follows clean architecture principles.
*/
