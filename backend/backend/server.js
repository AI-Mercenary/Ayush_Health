require('dotenv').config(); // Ensure environment variables are loaded
const fs = require('fs');
const path = require('path');
const twilio = require('twilio');
const nodemailer = require('nodemailer');
const session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');  // Import Sequelize for DB connection
const User = require('./models/User'); // Adjust the path to your `User.js`
const app = express();

// Database connection using Sequelize and environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: process.env.DB_DIALECT, // Database dialect (mysql)
    logging: false, // Disable logging for clean output
  }
);

// Test the database connection
const testDBConnection = async () => {
  try {
    await sequelize.authenticate();  // Authenticate the connection
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Sync the database to ensure it's up-to-date with the models
const syncDatabase = async () => {
  try {
    await User.sync({ alter: true });  // Alter the table to match the model
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

// Sync the database as soon as the server starts
testDBConnection();
syncDatabase();

// Middleware
app.use(bodyParser.json());
app.use(
  session({
    secret: 'aadhar-otp-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Use `true` if using HTTPS
  })
);

// File paths
const aadharDataFile = path.join(__dirname, 'aadhardata.json');

// Twilio credentials
const TWILIO_SID =  'AC3959c5c70d5c2ff26934c3051d9a493b';
const TWILIO_AUTH_TOKEN =  'cca8157557b7f48a84e0a9faa9bd2eb3';
const TWILIO_PHONE_NUMBER ='+14842321702';

// Nodemailer credentials
const EMAIL_USER = 'ayushinnovations1642@gmail.com';
const EMAIL_PASS ='gekl djms bpir yveg';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const twilioClient = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// API to send OTP
app.post('/send-otp', (req, res) => {
  const { aadharNo } = req.body;

  fs.readFile(aadharDataFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading Aadhar data:', err);
      return res.status(500).json({ status: 'error', message: 'Error reading Aadhar data' });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.aadharNo === aadharNo);

    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP
      req.session.otp = otp;
      req.session.aadhar = aadharNo;

      // Send OTP via Twilio
      twilioClient.messages
        .create({
          body: `Your OTP is ${otp}`,
          from: TWILIO_PHONE_NUMBER,
          to: `+91${user.contact}`,
        })
        .then(() => {
          // Send OTP via email
          const mailOptions = {
            from: EMAIL_USER,
            to: user.email,
            subject: 'Aadhar OTP Verification',
            text: `Your OTP is ${otp}`,
          };

          transporter.sendMail(mailOptions, (error) => {
            if (error) {
              console.error('Error sending OTP email:', error);
              return res.status(500).json({ status: 'error', message: 'Error sending OTP email' });
            }
            res.json({ status: 'success', message: 'OTP sent successfully' });
          });
        })
        .catch((error) => {
          console.error('Error sending OTP via Twilio:', error);
          res.status(500).json({ status: 'error', message: 'Error sending OTP via Twilio' });
        });
    } else {
      res.status(404).json({ status: 'error', message: 'Aadhar number not found' });
    }
  });
});

// API to verify OTP
app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  console.log("Session OTP:", req.session.otp);  // Check if OTP is stored in session
  console.log("Submitted OTP:", otp);  // Check what OTP was submitted by the user

  if (req.session.otp === otp) {
    fs.readFile(aadharDataFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading Aadhar data:', err);
        return res.status(500).json({ status: 'error', message: 'Error reading Aadhar data' });
      }

      const users = JSON.parse(data);
      const user = users.find((u) => u.aadharNo === req.session.aadhar);

      if (user) {
        res.json({ status: 'success', userData: user, message: 'OTP verified successfully' });
      } else {
        res.status(404).json({ status: 'error', message: 'User data not found' });
      }
    });
  } else {
    console.error("OTP mismatch:", otp, req.session.otp);
    res.status(400).json({ status: 'error', message: 'Invalid OTP' });
  }
});

// API to handle registration

app.post('/register', async (req, res) => {
  const { formData } = req.body; // Expect formData to be passed from frontend

  try {
    // Check if user already exists in the database by Aadhar number
    const existingUser = await User.findOne({ where: { aadharNo: formData.aadharNo } });

    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'User with this Aadhar number is already registered.',
      });
    }

    // Generate a unique registration ID (e.g., REG-123456)
    const regId = `REG-${Date.now().toString().slice(-6)}`;

    // Generate registration date
    const regDate = new Date().toISOString(); // Current timestamp in ISO format

    // Generate a random unique password
    const password = Math.random().toString(36).substring(2, 10);

    // Generate the next user ID automatically
    // If using a database with auto-increment, this step might not be necessary
    const latestUser = await User.findOne({
      order: [['id', 'DESC']], // Find the latest user by ID
    });
    const nextId = latestUser ? latestUser.id + 1 : 1;

    // Prepare the new user data object
    const newUser = {
      id: nextId, // Auto-generated ID
      regId,
      regDate,
      pwd: password,
      aadharNo: formData.aadharNo,
      firstName: formData.firstName,
      lastName: formData.lastName,
      contact: formData.contact,
      email: formData.email,
      gender: formData.gender,
      district: formData.district,
      state: formData.state,
      country: formData.country,
      pincode: formData.pincode,
      address: formData.address,
      orgType: formData.orgType,
      subOrgType: formData.subOrgType,
      bankHolderName: formData.bankHolderName,
      accountNo: formData.accountNo,
      bankName: formData.bankName,
      branchName: formData.branchName,
      IFSC: formData.IFSC,
      createdAt: regDate,
      updatedAt: regDate,
    };

    // Save user to the database
    const createdUser = await User.create(newUser);

    // Send confirmation email
    const mailOptions = {
      from: EMAIL_USER,
      to: newUser.email,
      subject: 'Registration Successful',
      text: `Hello ${newUser.firstName},\n\nYour registration was successful!\n\nRegistration ID: ${newUser.regId}\nPassword: ${newUser.pwd}\n\nThank you for registering!`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Error sending confirmation email:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to send confirmation email' });
      }
      console.log('Confirmation email sent successfully.');
    });

    // Return success response to the frontend
    return res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      userData: createdUser,
    });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ status: 'error', message: 'Error during registration' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  