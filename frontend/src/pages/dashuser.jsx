import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/"); // Redirect to the login page
  };

  // Fetch the user from local storage (you can adjust this as needed)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ backgroundColor: "#f4f4f4" }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard, {user?.email || "User"}!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        You are successfully logged in.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
