// ayushRouters.js

const express = require("express");
const router = express.Router();
const { 
  getAadharData, 
  postAadharData, 
  getAdminDashboard, 
  updateAadharData, 
  deleteAadharData 
} = require("../controllers/ayushControllers");

// Route to fetch Aadhar data by Aadhar number (GET request)
router.route("/aadhardata/:aadharno").get(getAadharData);

// Route to add new Aadhar data (POST request)
router.route("/aadhardata").post(postAadharData);

// Route to update existing Aadhar data (PUT request)
router.route("/aadhardata/:aadharno").put(updateAadharData);

// Route to delete Aadhar data by Aadhar number (DELETE request)
router.route("/aadhardata/:aadharno").delete(deleteAadharData);

// Route to fetch the Admin Dashboard (GET request)
router.route("/admin/dashboard").get(getAdminDashboard);

module.exports = router;
