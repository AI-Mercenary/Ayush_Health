import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserDetailsCard from "../components/UserDetailsCard";
import UserApplications from "../components/UserApplications";
import "../css/user.css"; // Importing custom CSS

const UserDashboard = () => {
  const navigate = useNavigate();

  // State to hold user data (simulate fetching from API)
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    document: "file1.pdf",
    status: "Pending"
  });

  const [userApplications, setUserApplications] = useState([
    { id: 1, name: "Scheme 1", status: "In Progress" },
    { id: 2, name: "Scheme 2", status: "Completed" }
  ]);

  // Fetch user data here (API call example can go here)

  const handleEditProfile = () => {
    navigate("/user/edit-profile");
  };

  return (
    <div>
      <Typography variant="h4">User Dashboard</Typography>

      <UserDetailsCard 
        name={userDetails.name} 
        email={userDetails.email} 
        status={userDetails.status} 
        onEditProfile={handleEditProfile} 
      />
      
      <UserApplications applications={userApplications} />
    </div>
  );
};

export default UserDashboard;
