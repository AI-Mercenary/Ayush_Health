const express = require("express");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require("nodemailer");
const session = require("express-session");
const bcrypt = require("bcrypt"); // To handle password hashing
const { Sequelize } = require("sequelize");
const { connectDB } = require("./db");
const { User } = require("./models/User");

const app = express();
app.use(cors()); // Allow requests from other origins
app.use(express.json()); // Parse JSON request body

// Session middleware for authentication
app.use(
  session({
    secret: "your-secret-key", // Use a secure secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 1000 }, // Session expires in 1 hour
  })
);

// Connect to the database
connectDB();

// Nodemailer credentials
const EMAIL_USER = "ayush1642@gmail.com";
const EMAIL_PASS = "123456";

// Default Admin Credentials
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123"; // Default password for admin

// Function to read users from users.json
const getUsers = () => {
  try {
    const data = fs.readFileSync("users.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading users.json:", err);
    return [];
  }
};

// Function to update users in users.json
const updateUsers = (users) => {
  try {
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    console.log("users.json updated successfully.");
  } catch (err) {
    console.error("Error updating users.json:", err);
  }
};

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized. Please log in." });
  }
};

// Middleware to check admin privileges
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};

// Forgot Password Endpoint
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const users = getUsers();
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found." });
  }

  const newPassword = Math.random().toString(36).slice(-8);
  users[userIndex].password = newPassword;
  updateUsers(users);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Password Reset - Ayush Innovations",
    text: `Your new password is: ${newPassword}\n\nPlease log in with this password and change it immediately.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send the password reset email." });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Check for Admin Login
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.session.user = {
      email,
      role: "admin", // Admin role
    };
    return res.status(200).json({
      message: "Admin login successful!",
      user: req.session.user,
    });
  }

  // Regular User Login (Check database)
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const match = await bcrypt.compare(password, user.pwd);

    if (match) {
      req.session.user = {
        id: user.id,
        email: user.email,
        role: user.role, // Admin or user role
        firstName: user.firstName,
        lastName: user.lastName,
      };

      return res.status(200).json({
        message: "Login successful!",
        user: req.session.user,
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred while processing the request." });
  }
});

// Protected Route Example for Users
app.get("/user-interface", isAuthenticated, (req, res) => {
  res.json({ message: "Welcome to the User Interface!", user: req.session.user });
});

// Protected Route Example for Admins
app.get("/admin-interface", isAuthenticated, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Interface!", user: req.session.user });
});

// Logout Route
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Could not log out. Try again." });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully!" });
  });
});

// Default fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
